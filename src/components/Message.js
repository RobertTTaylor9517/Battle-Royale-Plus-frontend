import React from 'react'
import { connect } from 'react-redux'
import { OnAtLeastTablet, OnAtMostPhablet } from '../Responsive'

const Message = props =>  {
    const renderMessage=()=>{
        let fiveArr = [...props.message]
        return fiveArr.map(mess=>{
            return <li style={{paddingBottom: '15px'}}>{mess}</li>
        })
    }

    return(
        <div align='center'>
            <OnAtMostPhablet>
                <div style={{overflow: 'scroll', height: '100px', fontSize: '10px', paddingRight: '10%'}}>
                    <ul style={{listStyleType: 'none'}}>
                        {renderMessage()}
                    </ul>
                </div>
            </OnAtMostPhablet>
            <OnAtLeastTablet>
                <div style={{overflow: 'scroll', height: '400px'}}>
                    <ul style={{listStyleType: 'none'}}>
                        {renderMessage()}
                    </ul>
                </div>
            </OnAtLeastTablet>
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