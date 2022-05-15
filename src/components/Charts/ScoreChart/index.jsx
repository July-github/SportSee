import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import PropTypes from 'prop-types'

export default function ScoreChart({dataScore}){

    const RenderScore = () => {
        const score = dataScore.score
        const scorePercent = score * 100
    
        return (
            <div className="score">
                <div className="scoreResult">{scorePercent}%</div><div className="scoreText">de votre<br/>objectif</div>
            </div>
        )
    }

        return (
            <div className="scoreChartWrap">
                <h2 className='scoreChartTitle'>Score</h2>
                <ResponsiveContainer width={258} height={263}>
                    <RadialBarChart cx="50%" cy="50%" innerRadius='80%' outerRadius="100%" data={[dataScore]} startAngle={180} endAngle={-180} >
                        <RadialBar minAngle={15} clockWise dataKey='score' fill= '#FF0000' cornerRadius={25} barSize={10} />
                        <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
                        <circle cx="50%" cy="50%" fill="white" r="90"></circle>
                    </RadialBarChart>
                </ResponsiveContainer>
                <RenderScore/>
            </div>
        );
    };

ScoreChart.propTypes={
    dataScore: PropTypes.object.isRequired
}