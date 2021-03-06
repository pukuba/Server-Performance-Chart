import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import bodyParser from 'body-parser'
import cors from 'cors'
dotenv.config({ path: '../.env' })
const port = process.env.MID_SERVER || 7777
const app = express()

const corsOptions = {
    origin: '*',
    method: "POST",
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('', routes)
app.listen(port, () => {
    console.log(`Server Run http://localhost:${port}`)
})