import { Ledger } from "../models/ledger.mjs"
import { Metadata } from "../models/metadata.mjs"

export async function createLedger(request, response, next) {
  const user = request.user
  const data = request.body

  try {
    const result = await Ledger.create({
      name: data.name,
      owner: user.id
    })

    await Metadata.findOneAndUpdate(
      {
        owner: user.id
      },
      {
        owner: user.id,
        properties: {
          defaults: {
            ledger: result.id
          }
        }
      },
      { new: true, upsert: true }
    )

    return response.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

export async function getLedgers(request, response, next) {
  const user = request.user

  try {
    // TODO: optimize this to a single database call.
    const result = await Ledger.find({ owner: user.id })
    const metadata = await Metadata.findOne({ owner: user.id })

    const defaultLedger = result.find(
      ledger => ledger.id === metadata.properties.defaults.ledger.toString()
    )

    return response.status(200).json({
      default: defaultLedger,
      data: result
    })
  } catch (error) {
    next(error)
  }
}
