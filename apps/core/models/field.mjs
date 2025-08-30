import mongoose from "mongoose"

const schema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: true
    },
    type: {
      type: mongoose.Schema.Types.String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: "dateCreated",
      updatedAt: "dateUpdated"
    }
  }
)

export const Field = mongoose.model("fields", schema)
