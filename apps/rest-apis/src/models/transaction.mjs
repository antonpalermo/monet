import mongoose from "mongoose"

const schema = mongoose.Schema(
  {
    ledger: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ledgers"
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    },
    data: {
      type: mongoose.Schema.Types.Mixed
    }
  },
  {
    toJSON: {
      virtuals: true,
      transform: function (_, ret, __) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      }
    },
    timestamps: {
      createdAt: "dateCreated",
      updatedAt: "dateUpdated"
    }
  }
)

export const Transactions = mongoose.model("transactions", schema)
