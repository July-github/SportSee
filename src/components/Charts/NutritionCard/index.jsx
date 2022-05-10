import PropTypes from 'prop-types'

export default function NutritionCard({icon, keyDataSwitch, id, keyDataType}){
    
    return(
        <div className='nutritionCard' key={id}>
            <img className='nutritionCardIcon'  src={icon} alt='icon nutrition card' />
            <div className='nutritionCardText'><div className='nutritionCardKeyData'>{keyDataSwitch}</div><div className='nutritionCardKeyType'>{keyDataType}</div></div>
        </div>
    )
}

NutritionCard.propTypes={
    icon: PropTypes.string.isRequired,
    keyDataSwitch: PropTypes.array.isRequired,
    keyDataType:PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}