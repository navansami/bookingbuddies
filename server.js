import app from "./config/app.js"

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
})