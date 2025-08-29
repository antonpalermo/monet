import mongoose from "mongoose"

const schema = new mongoose.Schema(
  {
    name: {
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
