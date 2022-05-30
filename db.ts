import { Expense, PrismaClient } from '@prisma/client'

export type ExpenseType = {
  card: string
  description: string
  value: string
  paidInstallments: string
  totalInstallments: string
}

const prisma = new PrismaClient()

export async function createExpense(data: ExpenseType) {
  const createExpenses = await prisma.expense.create({
    data: data
  })
}

export async function getExpense() {
  const getExpenses: ExpenseType[] = await prisma.expense.findMany({
    select: {
      card: true,
      description: true,
      value: true,
      paidInstallments: true,
      totalInstallments: true
    }
  })
  return getExpenses
}
