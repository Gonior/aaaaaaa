require('dotenv').config()
const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const PORT = 3000 || process.env.PORT
const mongoURI = process.env.MONGO_URI

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify : true
	})
	.then(() => console.log("MongoDB database is connected"))
	.catch((err) => console.log(err));

app.use('/', require('./routes/couponRoutes'))

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})

