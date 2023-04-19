import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
    const datapointValue = props.dataPoints.map( (datapoint) => datapoint.value)
    const totalMax = Math.max(...datapointValue)
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
