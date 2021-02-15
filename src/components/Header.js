import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = (props) => {
    return (
        <header className="header">
           <h1>{props.title}</h1>
           <Button color={props.showAdd ? 'red' : 'green'} text={props.showAdd ? 'Close' : 'Add'} onClick={props.addNew} />
          
          
        </header>
    )
}





//You can also define deafault props---Uncomment the below lines, instead of defining in the App.js. 
Header.defaultProps = {
    title: "Task Tracker"
}

//There are prop-types which can be used to assign a string,int value to make it more robust.
Header.propTypes ={
     title: PropTypes.string.isRequired,
}

//css in Js 
// const headingStyle ={
//     color: 'red',
//     backgroundColor:'black'
// }

export default Header





