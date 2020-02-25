import React from 'react'

const Enemy = props => {
    return(
        <div>
            <h4>{props.enemy.name}{props.feID}</h4>
        </div>
    )
}

export default Enemy