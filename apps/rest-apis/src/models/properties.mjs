import mongoose from "mongoose"

const schema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    },
    properties: {
      defaults: {
        ledger: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ledgers"
        }
      }
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

export const Properties = mongoose.model("properties", schema)
