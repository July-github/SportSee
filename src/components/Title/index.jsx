import PropTypes from 'prop-types'

export default function Title({id, firstname}){

    return (
        <div className='titleWrap'><div className='nameWrap'>Bonjour<div key={id} className='titleName'>{firstname}</div></div>
        <div className='titleCongrats'>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        </div>
    )
}

Title.propTypes = {
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired
}