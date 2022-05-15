import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import PropTypes from 'prop-types'

export default function PerformanceChart({dataPerformance}){

    const xAxisFormatter = (kind) => {
        switch (kind){
            case 1: return 'Cardio';
            case 2: return 'Energie';
            case 3: return 'Endurance';
            case 4: return 'Force';
            case 5: return 'Vitesse';
            case 6: return  'Intensité';
            default: return null;
        }
    }

    return (
        <RadarChart width={258} height={263} data={dataPerformance} outerRadius={80} >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey='kind' tickLine={false} tick={{ fontSize: 12, fontWeight: 500 }} stroke="#FFFFFF" tickFormatter={xAxisFormatter} />
            <Radar dataKey='value' fill="#FF0101B2"/>
        </RadarChart> 
    )
}

PerformanceChart.propTypes={
    dataPerformance: PropTypes.array.isRequired
}