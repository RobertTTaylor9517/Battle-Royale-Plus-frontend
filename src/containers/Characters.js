import React from 'react'
import { connect } from 'react-redux'
import Character from '../components/Character'

const Characters = props =>{

    const renderChars=()=>{
           return <div>
                <Character/>
                <Character/>
                <Character/>
                <Character/>
            </div>
        
    }

    return(
        <div>
            {renderChars()}
        </div>
    )
}

export default Characters