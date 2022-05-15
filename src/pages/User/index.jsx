import LeftBar from '../../components/LeftBar/index'
import Title from '../../components/Title/index'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../datas/datasMocked'
import ActivityChart from '../../components/Charts/ActivityChart/index'
import NutritionCard from '../../components/Charts/NutritionCard'
import CaloriesIcon from '../../assets/calories-icon.svg'
import CarbsIcon from '../../assets/carbs-icon.svg'
import FatIcon from '../../assets/fat-icon.svg'
import ProteinIcon from '../../assets/protein-icon.svg'
import SessionDurationChart from '../../components/Charts/SessionDurationChart'
import PerformanceChart from '../../components/Charts/PerformanceChart'
import ScoreChart from '../../components/Charts/ScoreChart'


export default function User(){
    const navigate = useNavigate()
    const {id} = useParams()
    const [UserData, setUserData] = useState()
    const [UserActivity, setUserActivity] = useState()
    const [UserSessionDuration, setUserSessionDuration] = useState()
    const [UserPerformance, setUserPerformance] = useState()

    useEffect(()=>{
        const UserDatas = USER_MAIN_DATA
        const UserActivities = USER_ACTIVITY
        const UserSessionDurations = USER_AVERAGE_SESSIONS
        const UserPerformances = USER_PERFORMANCE

        const currentUserData = UserDatas.find(UserData => (UserData.id).toString() === id)
        const currentUserActivity = UserActivities.find(UserActivity => (UserActivity.userId).toString() === id)
        const currentUserSessionDuration = UserSessionDurations.find(UserSessionDuration => (UserSessionDuration.userId).toString() === id)
        const currentUserPerformance = UserPerformances.find(UserPerformance => (UserPerformance.userId).toString() === id)

        if((!currentUserData) || (!currentUserActivity) || (!currentUserSessionDuration) || (!currentUserPerformance)){
            navigate('/Error')
        }

        setUserData(currentUserData)
        setUserActivity(currentUserActivity)
        setUserSessionDuration(currentUserSessionDuration)
        setUserPerformance(currentUserPerformance)
        
    }, [navigate, id])

    if((!UserData) || (!UserActivity) || (!UserSessionDuration) || (!UserPerformance)){
        return null
    }

    return (
        <div className='main'>
            <LeftBar />
            <div className='dashboard'>
                <Title 
                    id={UserData.id}
                    firstname={UserData.userInfos.firstName}
                />
                <section className='charts'>
                    <article>
                        <div className='mainChart'>
                            <ActivityChart 
                                    dataActivity={UserActivity.sessions}
                            />
                        </div>
                        <div className='otherCharts'>
                            <div className='sessionDurationChart'>
                                <SessionDurationChart 
                                    dataSessionDuration={UserSessionDuration.sessions}
                                />
                            </div>
                            <div  className='performanceChart'>
                                <PerformanceChart 
                                    dataPerformance={UserPerformance.data}
                                />
                            </div>
                            <div  className='scoreChart'>
                                <ScoreChart 
                                    dataScore={UserData}
                                />
                            </div>
                        </div>
                    </article>
                    <aside>
                        <NutritionCard
                            icon={CaloriesIcon}
                            keyDataSwitch={[`${UserData.keyData.calorieCount}`, 'kCal']}
                            keyDataType='Calories'
                            id = {UserData.id}
                        />
                        <NutritionCard
                            icon={CarbsIcon}
                            keyDataSwitch={[`${UserData.keyData.proteinCount}`, 'g']}
                            keyDataType='Proteines'
                            id = {UserData.id}
                        />
                        <NutritionCard
                            icon={FatIcon}
                            keyDataSwitch={[`${UserData.keyData.carbohydrateCount}`, 'g']}
                            keyDataType='Glucides'
                            id = {UserData.id}
                        />
                        <NutritionCard
                            icon={ProteinIcon}
                            keyDataSwitch={[`${UserData.keyData.carbohydrateCount}`, 'g']}
                            keyDataType='Lipides'
                            id = {UserData.id}
                        />

                    </aside>
                </section>
            </div>
        </div>
    )
}