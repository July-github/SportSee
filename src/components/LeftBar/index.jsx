import Yoga from '../../assets/iconYoga.svg'
import Bike from '../../assets/iconBike.svg'
import Fitness from '../../assets/iconFitness.svg'
import Swim from '../../assets/iconSwim.svg'


export default function LeftBar(){

    return(
        <div className='leftBarContainer'>
            <div className='leftBarWrap' >
                <div className='leftBarImgWrap' >
                    <img className='leftBarIconYoga' src={Yoga} alt="Yogi"/>
                    <img className='leftBarIconSwim' src={Swim} alt="Swimmer"/>
                    <img className='leftBarIconBike' src={Bike} alt="Biker"/>
                    <img className='leftBarIconFitness' src={Fitness} alt="Dumbbel"/>
                </div>
                <div className='copyright'>Copyright, SportSee 2020</div>
            </div>
        </div>
    )
}