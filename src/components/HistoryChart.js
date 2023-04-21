import { Bar, Pie } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    ArcElement,
} from 'chart.js';
import { useEffect, useState } from "react";

export default function HistoryChart({ data }) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        BarElement,
        ArcElement,
        Title,
        Tooltip,
        Legend
    );

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                data: [],
            }
        ]
    });

    useEffect(() => {
        var labels = data?.map((data) => `${data.searchPhrase} (${data.url})`);
        var impressionsData = data?.map((data) => data.avarage);

        setChartData({
            labels: labels,
            datasets: [
                {
                    label: "Avarage Impressions",
                    data: impressionsData,
                    backgroundColor: "rgba(100, 217, 255, 0.7)",
                    borderColor: "#64d9ff",
                    borderWidth: 2,
                    borderSkipped: false,
                    borderRadius: 5
                }
            ]
        })


    }, [data])
    return (
        <Bar
            data={chartData}
            options={{
                responsive: true,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        position: 'top',
                    },
                }
            }
            }
        />
    );
}