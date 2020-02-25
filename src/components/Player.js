import React from 'react'

const Player = props => {

    const renderAttacks=()=>{
        if(props.attacking === props.index){
            return props.character.attacks.map(att => {
                return <button type='button'>{att.name}</button>
            })
        }
    }

    return(
        <div>
            <h4>{props.character.name}</h4>
            {renderAttacks()}
        </div>
    )
}
export default Player