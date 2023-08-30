import { ChartData,ChartOptions, } from 'chart.js'
import React from 'react'
import { Pie } from 'react-chartjs-2'

interface PieProps {
    data:ChartData<'pie'>,
     options: ChartOptions<'pie'>
}

export const Piechart:React.FC<PieProps> = ({data,options}) => {
  return (
    <>
        <Pie data={data} options={options}/>
    </>
  )
}
