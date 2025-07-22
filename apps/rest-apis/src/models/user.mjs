import mongoose from "mongoose"

const schema = mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String
    },
    email: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true
    },
    image: {
      type: mongoose.Schema.Types.String
    },
    accounts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "accounts"
      }
    ]
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

const model = mongoose.model("users", schema)

export default model
