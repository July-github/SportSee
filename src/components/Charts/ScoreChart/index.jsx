import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import PropTypes from 'prop-types'

function ScoreChart({dataScore}){

/**
 * Format data property 'score'
 * @param {object} data 
 * @returns object data
 */
    function formatScore(data){
        if(data.todayScore){
            data.score = data.todayScore
            delete data.todayScore
            return data
        }
    }
    formatScore(dataScore)

/**
 * Format the score in percentage
 * @param {object} data 
 * @returns an integer for percentage
 */
    function calculatePercent(data){
        const score = Number(data.score)

        return Math.round(score * 100)
    }
    const scorePercent = calculatePercent(dataScore)

    return (
        <div className="scoreChartWrap">
            <h2 className='scoreChartTitle'>Score</h2>
            <ResponsiveContainer width="100%" height='100%'>
                <RadialBarChart 
                    cx="50%" 
                    cy="50%" 
                    innerRadius='90%' 
                    data={[dataScore]} 
                    startAngle={180} 
                    endAngle={-180} >
                    <RadialBar 
                        minAngle={15} 
                        dataKey='score' 
                        fill= '#FF0000' 
                        cornerRadius={25} 
                        barSize={10} />
                    <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
                    <circle cx="50%" cy="50%" fill="white" r="95"></circle>
                </RadialBarChart>
            </ResponsiveContainer>
            <div className="score">
                <p className="scoreResult">{scorePercent}%</p>
                <p className="scoreText">de votre<br/>objectif</p>
            </div>
        </div>
    );
};

ScoreChart.propTypes={
    dataScore: PropTypes.object.isRequired
}

export default ScoreChart