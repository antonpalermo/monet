import { Ledger } from "../models/ledger.mjs"

export async function createLedger(request, response, next) {
  const user = request.user
  const data = request.body

  try {
    const result = await Ledger.create({
      name: data.name,
      owner: user.id
    })
    return response.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

export async function getLedgers(request, response, next) {
  const user = request.user

  try {
    const result = await Ledger.find({ owner: user.id })
    return response.status(200).json(result)
  } catch (error) {
    next(error)
  }
}
