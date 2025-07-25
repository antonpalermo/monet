import mongoose from "mongoose"

const schema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
      require: true,
      unique: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
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

export const Ledger = mongoose.model("ledgers", schema)
