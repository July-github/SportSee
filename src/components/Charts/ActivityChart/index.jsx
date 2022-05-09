import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import PropTypes from 'prop-types';


function ActivityChart({dataActivity}){

    const xAxisTickFormat = (value, entry, index) => {
        const valueDay = value.split('-')
        
        return (Number(valueDay[2]))
    }

    return(
            <BarChart 
                width={835}
                height={320}
                data={dataActivity}
                margin={{
                    top:30,
                    right:5,
                    left:5,
                    bottom:30
                }}
            >
                <CartesianGrid vertical='false' strokeDasharray='3' height={1} />
                <XAxis className='xAxis' dataKey='day' tickFormatter={xAxisTickFormat} />
                <YAxis dataKey='calories' yAxisId='left' orientation='left' hide='true' />
                <YAxis className='yAxis' dataKey='kilogram' yAxisId='right' orientation='right' type='number' domain={[69, 71]} tickCount='3' axisLine='false' tickLine='false' width={30} />
                <Tooltip/>
                <Legend verticalAlign='top' align='right' height={50} iconType='circle' iconSize={8} formatter={(value, entry, index) => (<span className='activityLegendColor'>{value}</span>)}/>
                <Bar name='Poids (kg)' dataKey='kilogram' yAxisId='right' fill='#282D30' radius={[25, 25, 0, 0]} barSize={7}/>
                <Bar name='Calories brûlées (kCal)' dataKey='calories' yAxisId='left' fill='#E60000' radius={[25, 25, 0, 0]} barSize={7}/>
            </BarChart>
    )
}

ActivityChart.profileActivity = {
    dataActivity: PropTypes.array.isRequired
}

export default ActivityChart