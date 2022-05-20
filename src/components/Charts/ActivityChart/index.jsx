import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


function ActivityChart({dataActivity}){

/**
 * Get the day in the date
 * @param {string} value - full date
 * @returns {number {1-31} } number of the day
 */
    const xAxisTickFormat = (value) => {
        const valueDay = value.split('-')
        
        return (Number(valueDay[2]))
    }


/**
 * Format Tooltip
 * @param {array} payload - source data
 * @param {boolean} active - is Tootip active
 * @returns data.value on hover
 */
    function CustomTooltipActivity ({payload, active}) {
        if (active) {
            return (
                <div className='activityChartTooltip'>
                    <div>{`${payload[0].value}`}kg</div>
                    <div>{`${payload[1].value}`}Kcal</div>
                </div>
            )
        }
        return null
    }

    return(
        <div className='activityWrap'>
            <h2 className='activityChartTitle'>Activité quotidienne</h2>
            <ResponsiveContainer width="100%" height="100%" >
                <BarChart 
                    data={dataActivity}
                    margin={{
                        top:10,
                        right:5,
                        left:5,
                        bottom:10
                    }}
                >
                    <CartesianGrid vertical='false' strokeDasharray='3' height={1} horizontalPoints={[90, 185]} />
                    <XAxis className='activityXAxis' 
                        dataKey='day' 
                        tickFormatter={xAxisTickFormat} 
                        interval='preserveStartEnd' 
                        tickSize='0' 
                        tickMargin='25' 
                        stroke='#9B9EAC' />
                    <YAxis 
                        dataKey='calories' 
                        yAxisId='left' 
                        orientation='left' 
                        hide='true' />
                    <YAxis className='activityYAxis' 
                        dataKey='kilogram' 
                        yAxisId='right' 
                        orientation='right' 
                        type='number' 
                        domain={['dataMin -1', 'dataMax']} 
                        tickCount='3' 
                        tickSize='0' 
                        axisLine={false} 
                        tickMargin='30' 
                        width={45} 
                        stroke='#9B9EAC' />
                    <Tooltip content={<CustomTooltipActivity />} />
                    <Legend 
                        verticalAlign='top' 
                        align='right' 
                        height={80} 
                        iconType='circle' 
                        iconSize={8} 
                        formatter={(value, entry, index) => (
                            <span className='activityLegendColor'>{value}</span>)}/>
                    <Bar name='Poids (kg)' 
                        dataKey='kilogram' 
                        yAxisId='right' 
                        fill='#282D30' 
                        radius={[25, 25, 0, 0]} 
                        barSize={7}/>
                    <Bar name='Calories brûlées (kCal)' 
                        dataKey='calories' 
                        yAxisId='left' 
                        fill='#E60000' 
                        radius={[25, 25, 0, 0]} 
                        barSize={7}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

ActivityChart.propTypes={
    dataActivity: PropTypes.array.isRequired
}

export default ActivityChart