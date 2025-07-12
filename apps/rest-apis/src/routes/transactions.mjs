import express from "express"

const routes = express.Router({ strict: true })

routes.get("/", (req, res) => {
  return res.status(200).json({ msg: "sample" })
})

export default routes
