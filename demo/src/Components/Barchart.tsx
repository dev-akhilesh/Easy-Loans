import React from 'react'
import { Bar } from 'react-chartjs-2'
import type { ChartOptions, ChartData } from 'chart.js';


interface BarchartProps {
   options: ChartOptions<'bar'>,
    data: ChartData<'bar'>;
  }

export const Barchart:React.FC<BarchartProps> = ({data,options}) => {
  return (
    <>
    <Bar  data={data}  options={options}/>
    </>
  )
}
