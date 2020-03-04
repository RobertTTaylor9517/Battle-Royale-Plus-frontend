import React from 'react'
import Modal from 'react-modal'
import QMark from '../sprites/question_mark.png'

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
            {/* <button onClick={openModal} type='button'>How To Play</button> */}
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
        </div>
    )
    

}

export default HowToPlay