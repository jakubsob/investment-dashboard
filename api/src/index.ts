import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors';

const prisma = new PrismaClient()
const app = express()
const PORT = 3001;
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json())

app.get('/transaction', async (req, res) => {
  const transactions = await prisma.transaction.findMany()
  res.json(transactions)
})

app.post(`/post`, async (req, res) => {
  const { date, amount, price, currency, assetName, category, portfolio } = req.body
  const result = await prisma.transaction.create({
    data: {
      date,
      amount,
      price,
      currency,
      name: assetName,
      category,
      portfolio
    },
  })
  res.json(result)
})

const server = app.listen(PORT, () =>
  console.log(`Server ready on port ${PORT}`),
)
