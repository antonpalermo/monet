import mongoose from "mongoose"
import { Metadata } from "../models/metadata.mjs"

// TODO: refac updateMetadata to accept any properties
// provided in the request.body
export async function updateMetadata(request, response, next) {
  const body = request.body
  const user = request.user

  try {
    const result = await Metadata.findOneAndUpdate(
      {
        owner: user.id
      },
      {
        properties: {
          defaults: {
            ledger: new mongoose.Types.ObjectId(`${body.ledger}`)
          }
        }
      },
      {
        new: true
      }
    )

    return response.status(200).json(result)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
