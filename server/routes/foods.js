import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'
import foodData from '../data/foods.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const router = express.Router()

router.get('/', (req,res)=>{
    res.status(200).json(foodData)
})

router.get('/:foodId',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'../public/food.html'))
})

export default router