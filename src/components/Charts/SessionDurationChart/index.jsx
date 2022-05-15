import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Line, ReferenceArea, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types'

export default function SessionDurationChart({dataSessionDuration}){

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

    function customOnMouseOut(){
        let sessionWrap = document.querySelector('.sessionDurationWrap');
        sessionWrap.style.background ='transparent'
    }

    return (
        <div className="sessionDurationWrap">
            <h2 className='sessionDurationChartTitle'>Durée moyenne des sessions</h2>
            <ResponsiveContainer width={268} height={220} >
                <LineChart
                    data={dataSessionDuration}
                    margin={{
                        top:30,
                        right:10,
                        left:10,
                        bottom:50
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
                        tickMargin={50}
                    />
                    <YAxis hide='true' domain={['dataMin', 'dataMax']} />
                    <Tooltip content={<CustomToolTypeSessionDuration />} cursor={false} />
                    <Line dataKey='sessionLength' type='natural' stroke='#FFFFFF' dot={false} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

SessionDurationChart.propTypes={
    dataSessionDuration: PropTypes.array.isRequired
}