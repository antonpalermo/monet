import mongoose from "mongoose"

const schema = mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String
  }
})

const model = mongoose.model("transactions", schema)

export default model
