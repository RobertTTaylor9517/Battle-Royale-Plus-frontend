import React from 'react'
import Modal from 'react-modal'
import QMark from '../sprites/question_mark.png'
import {OnAtLeastTablet, OnAtMostPhablet} from '../Responsive'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '0%',
        transform: 'translate(-50%, -50%)'
    }
}

const mobileStyles= {
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: '30%',
        height: '500px',
        width: '75vw',
        transform: 'translate(-50%, -20%)',
        fontSize: '10px',
        align: 'center'
    }
}

Modal.setAppElement('body')

const HowToPlay = props => {
    const [modalIsOpen, setIsOpen] = React.useState(false)

    const openModal=()=>{
        setIsOpen(true)
    }

    const closeModal=()=>{
        setIsOpen(false)
    }

    return(
        <div>
            <OnAtMostPhablet>
                <img onClick={openModal} alt='How To Play 'src={QMark} style={{filter: 'invert(100%)', height: '32px'}}/>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={mobileStyles}
                contentLabel='How to play'
                >
                    <h2>How To Play:</h2>
                    <ol style={{lineHeight: '200%'}}>
                        <li>Once logged in type in a team name and click new game</li>
                        <li> Your team consist of four characters, you are allowed to choose up to four attacks per character</li>
                        <li>Once you've seet up your team, hit Submit and then click Start Game</li>
                    </ol>
                    <p>In Battle</p>
                    <ol style={{lineHeight: '200%'}}>
                        <li>Click on the active characters attack to set it, once set the enemy blocks will turn red</li>
                        <li> Click on the enemy to apply the attack </li>
                    </ol>
                    {/* <h4 onClick={closeModal}>X</h4> */}

                </Modal>
            </OnAtMostPhablet>
            <OnAtLeastTablet>
                <img onClick={openModal} alt='How To Play 'src={QMark} style={{filter: 'invert(100%)'}}/>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='How to play'
                >
                    <h2>How To Play:</h2>
                    <ol style={{lineHeight: '200%'}}>
                        <li>Once logged in type in a team name and click new game</li>
                        <li> Your team consist of four characters, you are allowed to choose up to four attacks per character</li>
                        <li>Once you've seet up your team, hit Submit and then click Start Game</li>
                    </ol>
                    <p>In Battle</p>
                    <ol style={{lineHeight: '200%'}}>
                        <li>Click on the active characters attack to set it, once set the enemy blocks will turn red</li>
                        <li> Click on the enemy to apply the attack </li>
                    </ol>
                    {/* <h4 onClick={closeModal}>X</h4> */}

                </Modal>
            </OnAtLeastTablet>
            {/* <button onClick={openModal} type='button'>How To Play</button> */}
        </div>
    )
    

}

export default HowToPlay