import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types'

function SessionDurationChart({dataSessionDuration}){

/**
 * Format XAxis ticks
 * @param {Number} day - day of the week
 * @returns corresponding letter of the day
 */
    const xAxisFormatter = (day) => {
        switch(day){
            case 1: return 'L';
            case 2: return 'M';
            case 3: return 'M';
            case 4: return 'J';
            case 5: return 'V';
            case 6: return 'S';
            case 7: return 'D';
            default: return '';
        }
    }

/**
 * Format Tooltip
 * @param {array} payload - source data
 * @param {boolean} active - is Tootip active
 * @returns the value when a dot on the line is pointed
 */
    function CustomToolTypeSessionDuration({payload, active}){
        if(active){
            return (
                <div className='sessionDurationChartTooltip'>
                    <div>{`${payload[0].value}`}min</div>
                </div>
            )
        }
        return null
    }

/**
 * Animate background format when moving the cursor on the chart line
 * @param {event} e - move of the mouse
 * @returns darker background from the pointed dot
 */
    function customMouseMove(e){
        let sessionWrap = document.querySelector('.sessionDurationWrap');

        if (e.isTooltipActive) {
          let windowWidth = sessionWrap.offsetWidth;
          let mouseXpercent = Math.floor(
            (e.activeCoordinate.x / windowWidth) * 100
          );
          
          sessionWrap.style.background = `linear-gradient(90deg, rgba(255,0,0, 1) ${mouseXpercent}%, rgba(0,0,0,0.1) ${mouseXpercent}%, rgba(0,0,0,0.1) 100%)`;
        }
        else{
            sessionWrap.style.background ='transparent'
        }
    }

/**
 * Animate background format when moving the cursor out of a line dot
 * @param {event} e - move of the mouse
 * @returns initial background
 */
    function customOnMouseOut(){
        let sessionWrap = document.querySelector('.sessionDurationWrap');
        sessionWrap.style.background ='transparent'
    }

    return (
        <div className="sessionDurationWrap">
            <h2 className='sessionDurationChartTitle'>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%" >
                <LineChart
                    data={dataSessionDuration}
                    margin={{
                        top:80,
                        right:8,
                        left:8,
                        bottom:40
                    }}
                    onMouseMove={(e) => customMouseMove(e)}
                    onMouseOut={() => customOnMouseOut()}
                >
                    <CartesianGrid horizontal={false} vertical={false} />
                    <XAxis 
                        dataKey='day' 
                        type="category" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 12, fontWeight: 500}} 
                        tickFormatter={xAxisFormatter} 
                        stroke='rgba(255, 255, 255, 0.5)' 
                        tickMargin={40}
                    />
                    <YAxis hide='true' domain={['dataMin', 'dataMax']} />
                    <Tooltip content={<CustomToolTypeSessionDuration />} cursor={false} />
                    <Line 
                        dataKey='sessionLength' 
                        type='natural' 
                        stroke='#FFFFFF' 
                        dot={false} 
                        strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

SessionDurationChart.propTypes={
    dataSessionDuration: PropTypes.array.isRequired
}

export default SessionDurationChart