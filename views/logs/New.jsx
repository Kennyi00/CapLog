const React = require('react')

function New(props) {
    return (
        <div>
            <h1>Captain Log</h1>
            <form action="/logs" method="POST">
                Title: <input type="text" name="title" /><br/>
                Entry: <input type="text" name="entry" /><br/>
                Ship is broken: <input type="checkbox" name="shipIsBroken"/><br/>
                <input type="submit" value="Submit" />
            </form> 
        </div> 
    )
}

module.exports = New 