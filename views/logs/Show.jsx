const React = require('react')

function Show(props) {
    return(
        <div>
            <h1>{props.log.name}</h1>
            <a href='/logs'>Go Back To The Index Page</a>
            <p>
                The {props.log.title} is {props.log.entry} and {props.log.shipIsBroken? 'It is Broken': 'It is not Broken' }
            </p>

         </div>  
        )
    }



    module.exports = Show