import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { createExpense, ExpenseType, getExpense } from './db'

dotenv.config()

const app = express()
const port = process.env.PORT

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(express.json(), cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Working')
})

app.get('/expenses', async (req, res) => {
  const expenses = await getExpense()
  console.log('Showed Expenses')
  res.json(expenses)
})

app.post('/expenses', async (req, res) => {
  console.log('Expenses posted')
  await createExpense(req.body as ExpenseType)
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
})
