import { Ledger } from "../models/ledger.mjs"

export async function createLedger(request, response) {
  const user = request.user
  const data = request.body

  try {
    const result = await Ledger.create({
      name: data.name,
      owner: user.id
    })
    return response.status(201).json(result)
  } catch (error) {
    console.log(error)
    return response.status(500)
  }
}
