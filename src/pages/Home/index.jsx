import {Link} from 'react-router-dom'
import { USER_MAIN_DATA } from '../../datas/datasMocked'


function Home(){
    const profileDatas = USER_MAIN_DATA

    return(
        <ul>
        {profileDatas.map(profileData => 
            <Link to={`/Profile/${profileData.id}`} key={profileData.id}>
                <li>
                    User : {profileData.userInfos.firstName}
                </li>
            </Link>
        )}
        </ul>
    )
}

export default Home