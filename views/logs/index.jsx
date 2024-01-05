const React = require('react')

function Index (props) {
    return (
        <div>
            <h1>Captain's Logs Page</h1>
            <a href="/logs/new">Create A New Log Here!</a> <br></br>
            <ul>
            {
              props.logs.map((log) => {
                return (
                    <li key={log.id}>  
                      
                       <a href={`/logs/${log._id}`}>{log.title}</a> is {log.entry} and {log.shipIsBroken ? 'ship is broken': 'ship is not broken'}
                       <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                       <input type="submit" value={`Delete${log.title}`}></input>
            </form>
            <form action={`/logs/${log._id}/edit`}>
                                <input type="submit" value={`Edit this ${log.title}`}/>
                                </form>
                       </li>
              )
              
            
          }) 


         }
        
         </ul>


    </div>
    )
}

module.exports = Index