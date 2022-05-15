import {Link} from 'react-router-dom'
import { USER_MAIN_DATA } from '../../datas/datasMocked'


function Home(){
    const UserDatas = USER_MAIN_DATA

    return(
        <ul>
        {UserDatas.map(UserData => 
            <Link to={`/User/${UserData.id}`} key={UserData.id}>
                <li>
                    User : {UserData.userInfos.firstName}
                </li>
            </Link>
        )}
        </ul>
    )
}

export default Home