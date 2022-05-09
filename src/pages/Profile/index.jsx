import LeftBar from '../../components/LeftBar/index'
import Title from '../../components/Title/index'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { USER_MAIN_DATA, USER_ACTIVITY } from '../../datas/datasMocked'
import ActivityChart from '../../components/Charts/ActivityChart/index'

function Profile(){
    const navigate = useNavigate()
    const {id} = useParams()
    const [profileData, setProfileData] = useState()
    const [profileActivity, setProfileActivity] = useState([])

    useEffect(()=>{
        const profileDatas = USER_MAIN_DATA
        const profileActivities = USER_ACTIVITY

        const currentProfileData = profileDatas.find(profileData => (profileData.id).toString() === id)
        const currentProfileActivity = profileActivities.find(profileActivity => (profileActivity.userId).toString() === id)

        if((!currentProfileData) || (!currentProfileActivity)){
            navigate('/Error')
        }

        setProfileData(currentProfileData)
        setProfileActivity(currentProfileActivity)
        
    }, [navigate, id])

    if((!profileData) || (!profileActivity)){
        return null
    }

    return (
        <div className='main'>
            <LeftBar />
            <section className='dashboard'>
                <Title 
                    id = {profileData.id}
                    firstname = {profileData.userInfos.firstName}
                />
                <div className='charts'>
                    <article>
                        <div className='mainChart'>
                            <ActivityChart 
                                    dataActivity = {profileActivity.sessions}
                            />
                        </div>
                        <div className='otherCharts'></div>
                    </article>
                    <aside></aside>
                </div>
            </section>
        </div>
    )
}

export default Profile