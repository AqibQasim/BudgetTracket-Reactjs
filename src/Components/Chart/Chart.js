import React from "react";
import ChartBar from "./CharBar";
import "./Chart.css";
function Chart(props){

    const datapointvalue = props.datapoints.map(datapoint => datapoint.value);
    const maxValue = Math.max(...datapointvalue); 
    return(
        <div className="chart">
            {props.datapoints.map(datapoint => 
            <ChartBar 
            key = {datapoint.label}
            value = {datapoint.value} 
            label = {datapoint.label} 
            max = {maxValue}  
            />
            )}
        </div>
    )
}
export default Chart;