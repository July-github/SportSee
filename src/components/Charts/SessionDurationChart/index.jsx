import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";

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

    return (
        <LineChart
            width={258}
            height={200}
            data={dataSessionDuration}
            margin={{
                top:30,
                right:10,
                left:10,
                bottom:50
            }}
        >
            <CartesianGrid horizontal={false} vertical={false} />
            <XAxis className='sessionDurationXAxis' dataKey='day' type="category" axisLine={false} tickLine={false} tickFormatter={xAxisFormatter} stroke='#FFFFFF' tickMargin={50}/>
            <YAxis hide='true' domain={['dataMin', 'dataMax']} />
            <Tooltip content={<CustomToolTypeSessionDuration />} cursor={false} />
            <Line dataKey='sessionLength' type='natural' stroke='#FFFFFF' dot={false} strokeWidth={2} />
        </LineChart>
    )
}