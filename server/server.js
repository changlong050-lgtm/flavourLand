import express from 'express'
import foodsRouter from './routes/foods.js'

const app = express()

app.use('/public',express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

app.get('/',(req,res)=>{

    res.status(200).send('<h1>flavour land API</h1>')
})

const PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})

app.use('/foods', foodsRouter)