import PropTypes from 'prop-types'

const Logo = ({logo,title}) => {
    return(
        <div className='flex items-center'>
            <img src={logo} alt={title} className="mr-3 h-6" />
            <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
            {title}
            </span>
        </div>
    )

}

Logo.prototype={
    title:PropTypes.string,
    logo:PropTypes.string
}
Logo.defaultProps={
    title:'Corona App',
    logo:'https://img.freepik.com/premium-vector/corona-virus-logo_139161-161.jpg?w=2000'
}

export default Logo

/***************************************************/
/* HEADER KODLANMASI 1 */


/*
import PropTypes from 'prop-types'

const Logo = ({logo,title}) => {
    return(
        <div className='flex items-center'>
            <img src={logo} alt={title} className="mr-3 h-6" />
            <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
            {title}
            </span>
        </div>
    )

}

Logo.prototype={
    title:PropTypes.string,
    logo:PropTypes.string
}
Logo.defaultProps={
    title:'Corona App',
    logo:'https://img.freepik.com/premium-vector/corona-virus-logo_139161-161.jpg?w=2000'
}

export default Logo
*/

/*
import PropTypes from 'prop-types'

const Logo = ({logo,title}) => {
    return(
        <div className='flex items-center'>
            <img src={logo} alt={title} className="mr-3 h-6" />
            <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
            {title}
            </span>
        </div>
    )

}

Logo.prototype={
    title:PropTypes.string,
    logo:PropTypes.string
}
Logo.defaultProps={
    title:'Corona App',
    logo:'https://img.freepik.com/premium-vector/corona-virus-logo_139161-161.jpg?w=2000'
}

export default Logo
*/