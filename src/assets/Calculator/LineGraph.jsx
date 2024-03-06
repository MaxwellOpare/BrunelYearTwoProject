import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function Graph(props) {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            data: props.data.values,
            backgroundColor: 'transparent',
            borderColor: 'rgb(100, 50, 255)',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: .25
        }],
    };

    const options = {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 0,
                max: props.data.maxValue.toFixed(0),
                ticks: {
                    stepSize: 10,
                    callback: (value) => value 
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    }

    return (
        <div style={{width:'100%', height:'600px'}} className="line-graph">
            <Line data={data} options={options}></Line>
        </div>
    )
}

export default Graph;