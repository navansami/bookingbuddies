import express from "express"
import morgan from "morgan"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors("*"))
app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.status(200).json({
        message: "success",
        data: {
            data: "You do not have access to this page"
        }
    })
})

export default app