import React from 'react'
const Save =(props)=>{
    return(
        <div>
            <div onClick={()=>props.handleLoadGame(props.save.id)} style={{border: 'dashed', backgroundColor: 'black'}}>
                <h4>{props.save.team_name}</h4>
                <p>Cleared: {props.save.floor_count}</p>
            </div>
            <button onClick={()=>props.handleDeleteSave(props.save.id)} type='button'>X</button>
        </div>
    )
}
export default Save