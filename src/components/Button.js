import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <div>
           <button style= {{backgroundColor:props.color}}className="btn" onClick={props.onClick}>{props.text}</button>  
        </div>
    )
}



Button.defaultProps = {
    text:'Add',
    color: 'black'
}

Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick:PropTypes.func,

}

export default Button
