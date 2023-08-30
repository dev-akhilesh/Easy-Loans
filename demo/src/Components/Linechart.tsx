import { ChartData, ChartOptions } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'


interface LineProps {
    data:ChartData<'line'>,
    options:ChartOptions<'line'>
}
export const Linechart:React.FC<LineProps> = ({data,options}) => {
  return (
    <>
        <Line  data={data} options={options}/>
    </>
  )
}
