import mongoose from "mongoose"

const schema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String
    },
    amount: {
      type: mongoose.Schema.Types.Number
    },
    type: {
      type: mongoose.Schema.Types.String
    }
  },
  {
    timestamps: {
      createdAt: "dateCreated",
      updatedAt: "dateUpdated"
    }
  }
)

export const Transaction = mongoose.model("transaction", schema)
