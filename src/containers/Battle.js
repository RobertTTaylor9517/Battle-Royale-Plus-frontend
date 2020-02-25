import React from 'react'
import { connect } from 'react-redux'
import Enemies from './Enemies'
import Players from './Players'

const Battle = props => {
    return(
        <div>
            <span><Enemies/></span><span><Players/></span>
        </div>
    )
}
export default Battle