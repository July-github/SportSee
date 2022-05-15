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


export default function Profile(){
    const navigate = useNavigate()
    const {id} = useParams()
    const [profileData, setProfileData] = useState()
    const [profileActivity, setProfileActivity] = useState()
    const [profileSessionDuration, setProfileSessionDuration] = useState()
    const [profilePerformance, setProfilePerformance] = useState()

    useEffect(()=>{
        const profileDatas = USER_MAIN_DATA
        const profileActivities = USER_ACTIVITY
        const profileSessionDurations = USER_AVERAGE_SESSIONS
        const profilePerformances = USER_PERFORMANCE

        const currentProfileData = profileDatas.find(profileData => (profileData.id).toString() === id)
        const currentProfileActivity = profileActivities.find(profileActivity => (profileActivity.userId).toString() === id)
        const currentProfileSessionDuration = profileSessionDurations.find(profileSessionDuration => (profileSessionDuration.userId).toString() === id)
        const currentProfilePerformance = profilePerformances.find(profilePerformance => (profilePerformance.userId).toString() === id)

        if((!currentProfileData) || (!currentProfileActivity) || (!currentProfileSessionDuration) || (!currentProfilePerformance)){
            navigate('/Error')
        }

        setProfileData(currentProfileData)
        setProfileActivity(currentProfileActivity)
        setProfileSessionDuration(currentProfileSessionDuration)
        setProfilePerformance(currentProfilePerformance)
        
    }, [navigate, id])

    if((!profileData) || (!profileActivity) || (!profileSessionDuration) || (!profilePerformance)){
        return null
    }

    return (
        <div className='main'>
            <LeftBar />
            <div className='dashboard'>
                <Title 
                    id={profileData.id}
                    firstname={profileData.userInfos.firstName}
                />
                <section className='charts'>
                    <article>
                        <div className='mainChart'>
                            <ActivityChart 
                                    dataActivity={profileActivity.sessions}
                            />
                        </div>
                        <div className='otherCharts'>
                            <div className='sessionDurationChart'>
                                <SessionDurationChart 
                                    dataSessionDuration={profileSessionDuration.sessions}
                                />
                            </div>
                            <div  className='performanceChart'>
                                <PerformanceChart 
                                    dataPerformance={profilePerformance.data}
                                />
                            </div>
                            <div  className='scoreChart'>
                                <ScoreChart 
                                    dataScore={profileData}
                                />
                            </div>
                        </div>
                    </article>
                    <aside>
                        <NutritionCard
                            icon={CaloriesIcon}
                            keyDataSwitch={[`${profileData.keyData.calorieCount}`, 'kCal']}
                            keyDataType='Calories'
                            id = {profileData.id}
                        />
                        <NutritionCard
                            icon={CarbsIcon}
                            keyDataSwitch={[`${profileData.keyData.proteinCount}`, 'g']}
                            keyDataType='Proteines'
                            id = {profileData.id}
                        />
                        <NutritionCard
                            icon={FatIcon}
                            keyDataSwitch={[`${profileData.keyData.carbohydrateCount}`, 'g']}
                            keyDataType='Glucides'
                            id = {profileData.id}
                        />
                        <NutritionCard
                            icon={ProteinIcon}
                            keyDataSwitch={[`${profileData.keyData.carbohydrateCount}`, 'g']}
                            keyDataType='Lipides'
                            id = {profileData.id}
                        />

                    </aside>
                </section>
            </div>
        </div>
    )
}