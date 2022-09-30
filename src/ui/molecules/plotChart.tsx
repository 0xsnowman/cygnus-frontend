import React from 'react';
import { Box } from "../atoms";
import { Line, Pie, Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

interface IPlotChartProps {
    type: string;
    data: any;
    options?: any;
    plugins?: Array<any>;
}

const PlotChart: React.FC<IPlotChartProps> = ({type, data, options, plugins}) => {

    let chartRender = null;

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

    if (type === 'line') {
        chartRender = <Line data={data}  options={options} plugins={plugins} />
    } else if (type === 'pie') {
        chartRender = <Pie data={data} options={options} />
    } else if (type === 'bar') {
        chartRender = <Bar data={data} options={options} />
    } else {
        chartRender = <Box></Box>
    }

    return (
        <Box>
            {chartRender}
        </Box>
    )
}

export default PlotChart;