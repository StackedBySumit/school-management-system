import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'JAN',
    income: 40000,
    spend: 24000
  },
  {
    name: 'FEB',
    income: 70000,
    spend: 30000
  },
  {
    name: 'MAR',
    income: 60000,
    spend: 20000
  },
  {
    name: 'APR',
    income: 30000,
    spend: 20000
  },
  {
    name: 'MAY',
    income: 55000,
    spend: 35000
  },
  {
    name: 'JUNE',
    income: 20000,
    spend: 10000
  },
  {
    name: 'JUL',
    income: 50000,
    spend: 40000
  },
  {
    name: 'AUG',
    income: 90000,
    spend: 75000
  },
  {
    name: 'SEP',
    income: 64000,
    spend: 54000
  },
  {
    name: 'OCT',
    income: 54000,
    spend: 42000
  },
  {
    name: 'NOV',
    income: 84000,
    spend: 66000
  },
  {
    name: 'DEC',
    income: 45000,
    spend: 33000
  },
];

function FinanceGraphChart() {
  return (
   <div className='w-full h-full'>
    {/* Title */}
     <div>
        <h1 className='text-2xl font-semibold'>FinanceGraphChart</h1>
    </div>
    {/* Chart */}
    <ResponsiveContainer minWidth="inherit" minHeight="400px">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="spend" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceGraphChart