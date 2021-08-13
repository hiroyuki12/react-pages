import React from 'react'
import {Pie, Doughnut } from 'react-chartjs-2'

const data = {
    labels: ['Windows', 'Mac', 'Linux'],
    datasets: [
        {
            data: [60,30,10],
            backgroundColor: ["#4169e1","#ff1493","#FFCE56"],
            hoverBackgroundColor:  ["#36A2EB","#FF6384","#FFCE56"],
            borderColor: ["transparent","transparent","transparent"]
        }
    ]
} 

export const PiePlot: React.FC = () => {
    return (
        <div>
            <Pie data={data} />
            <Doughnut data={data} />
        </div>
    )
}
