import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

interface BarChartProps {
  data: number[];
  labels: string[];
  label: string;
  color: string;
}

export default function BarChart({ data, labels, label, color }: BarChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label,
        data,
        backgroundColor: color,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}