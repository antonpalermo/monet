import mongoose from "mongoose"

const schema = new mongoose.Schema(
  {
    verified: {
      type: mongoose.Schema.Types.Boolean
    },
    provider: {
      id: {
        type: mongoose.Schema.Types.String
      },
      accessToken: {
        type: mongoose.Schema.Types.String
      },
      refreshToken: {
        type: mongoose.Schema.Types.String
      },
      name: {
        type: mongoose.Schema.Types.String
      },
      type: {
        type: mongoose.Schema.Types.String,
        enum: ["oauth", "credentials"]
      }
    },
    scope: {
      type: [mongoose.Schema.Types.String]
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

const model = mongoose.model("accounts", schema)

export default model
