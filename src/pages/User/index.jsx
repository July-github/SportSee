import LeftBar from '../../components/LeftBar/index'
import Title from '../../components/Title/index'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../datas/datasMocked'
import ActivityChart from '../../components/Charts/ActivityChart/index'
import NutritionCard from '../../components/Charts/NutritionCard'
import CaloriesIcon from '../../assets/calories-icon.svg'
import CarbsIcon from '../../assets/carbs-icon.svg'
import FatIcon from '../../assets/fat-icon.svg'
import ProteinIcon from '../../assets/protein-icon.svg'
import SessionDurationChart from '../../components/Charts/SessionDurationChart'
import PerformanceChart from '../../components/Charts/PerformanceChart'
import ScoreChart from '../../components/Charts/ScoreChart'
import getAPIUserData from '../../services/fetch'

export default function User(){
    const navigate = useNavigate()
    const {userId} = useParams()

    const [userData, setUserData] = useState()
    const [userActivity, setUserActivity] = useState()
    const [userSessionDuration, setUserSessionDuration] = useState()
    const [userPerformance, setUserPerformance] = useState()

    const [isDataLoading, setIsDataLoading]=useState(false)

    const [isError, setIsError]=useState(false)

    useEffect(()=>{
    
        // const userDatas = USER_MAIN_DATA
        // const UserActivities = USER_ACTIVITY
        // const userSessionDurations = USER_AVERAGE_SESSIONS
        // const userPerformances = USER_PERFORMANCE

        // const currentUserData = userDatas.find(userData => (userData.id).toString() === userId)
        // const currentUserActivity = UserActivities.find(userActivity => (userActivity.userId).toString() === userId)
        // const currentUserSessionDuration = userSessionDurations.find(userSessionDuration => (userSessionDuration.userId).toString() === userId)
        // const currentUserPerformance = userPerformances.find(userPerformance => (userPerformance.userId).toString() === userId)

        // if((!currentUserData) || (!currentUserActivity) || (!currentUserSessionDuration) || (!currentUserPerformance)){
        //     navigate('/Error')
        // }

        // setUserData(currentUserData)
        // setUserActivity(currentUserActivity)
        // setUserSessionDuration(currentUserSessionDuration)
        // setUserPerformance(currentUserPerformance)

        setIsDataLoading(true)

        getAPIUserData('user/' + userId)
            .then(data => setUserData(data))
            .then(() => {setIsDataLoading(false); setIsError(false)})
            .catch(error => setIsError(true))

        getAPIUserData('user/' + userId + '/activity')
            .then((data) => setUserActivity(data))
            .then(() => {setIsDataLoading(false); setIsError(false)})
            .catch(error => setIsError(true))

        getAPIUserData('user/' + userId + '/average-sessions')
            .then((data) => setUserSessionDuration(data))
            .then(() => {setIsDataLoading(false); setIsError(false)})
            .catch(error => setIsError(true))
    
        getAPIUserData('user/' + userId + '/performance')
            .then((data) => setUserPerformance(data))
            .then(() => {setIsDataLoading(false); setIsError(false)})
            .catch(error => setIsError(true))
        
    }, [userId])

    if((!userData) || (!userActivity) || (!userSessionDuration) || (!userPerformance)){
        console.log('null', userData)
        return null
    }

    if((isDataLoading)){
        return(<h1>Loading...</h1>)
    }

    return (
        isError ? navigate('/Error') 
        : (
        <div className='main'>
            <LeftBar />
            <div className='dashboard'>
                <Title 
                    id={userData.id}
                    firstname={userData.userInfos.firstName}
                />
                <section className='charts'>
                    <article>
                        <div className='mainChart'>
                            <ActivityChart 
                                    dataActivity={userActivity.sessions}
                            />
                        </div>
                        <div className='otherCharts'>
                            <div className='sessionDurationChart'>
                                <SessionDurationChart 
                                    dataSessionDuration={userSessionDuration.sessions}
                                />
                            </div>
                            <div  className='performanceChart'>
                                <PerformanceChart 
                                    dataPerformance={userPerformance.data}
                                />
                            </div>
                            <div  className='scoreChart'>
                                <ScoreChart 
                                    dataScore={userData}
                                />
                            </div>
                        </div>
                    </article>
                    <aside>
                        <NutritionCard
                            icon={CaloriesIcon}
                            keyDataSwitch={[`${userData.keyData.calorieCount}`, 'kCal']}
                            keyDataType='Calories'
                            id = {userData.id}
                        />
                        <NutritionCard
                            icon={CarbsIcon}
                            keyDataSwitch={[`${userData.keyData.proteinCount}`, 'g']}
                            keyDataType='Proteines'
                            id = {userData.id}
                        />
                        <NutritionCard
                            icon={FatIcon}
                            keyDataSwitch={[`${userData.keyData.carbohydrateCount}`, 'g']}
                            keyDataType='Glucides'
                            id = {userData.id}
                        />
                        <NutritionCard
                            icon={ProteinIcon}
                            keyDataSwitch={[`${userData.keyData.carbohydrateCount}`, 'g']}
                            keyDataType='Lipides'
                            id = {userData.id}
                        />

                    </aside>
                </section>
            </div>
        </div>
    ))
}