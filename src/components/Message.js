import React from 'react'
import { connect } from 'react-redux'

const Message = props =>  {
    const renderMessage=()=>{
        let fiveArr = [...props.message]
        return fiveArr.slice(-5).map(mess=>{
            return <li style={{paddingBottom: '15px'}}>{mess}</li>
        })
    }

    return(
        <div align='center'>
            <ul style={{listStyleType: 'none'}}>
                {renderMessage()}
            </ul>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        message: state.message

    }
}

const mapDispatchToProps = dispatch=>({

})

export default connect(mapStateToProps, mapDispatchToProps)(Message)