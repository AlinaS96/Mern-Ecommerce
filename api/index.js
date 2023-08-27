const express = require('express')
const connectToDb = require('./db')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const cors = require('cors')
const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const cartRouter = require('./routes/cart')
const orderRouter = require('./routes/order')
const stripeRouter = require("./routes/stripe")


connectToDb();
const dotenv = require('dotenv')
const app = express()
const port = 8800;
dotenv.config()
app.use("*", cors({ origin: true, credentials: true }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/stripe', stripeRouter)
app.use(express.json())


app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)
// app.use('/stripe', stripeRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})