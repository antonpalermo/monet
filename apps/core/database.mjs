import debug from "debug"
import mongoose from "mongoose"

const logger = debug("core:mongo")

async function connect() {
  try {
    mongoose.connect(process.env.DATABASE_URL, {
      authSource: "admin",
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      pass: process.env.MONGO_INITDB_ROOT_PASSWORD
    })

    mongoose.connection.on("connected", () => logger("connected"))
  } catch (error) {
    logger("unable to connect please see error: ", error)
  }
}

export default { connect }
