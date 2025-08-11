import { Transactions } from "../models/transaction.mjs"

export async function createTransaction(request, response, next) {
  const body = request.body
  const user = request.user

  try {
    const result = await Transactions.create({
      ledger: body.ledger,
      user: user.id,
      data: { ...body.data }
    })

    return response.status(200).json(result)
  } catch (error) {
    next(error)
  }
}
