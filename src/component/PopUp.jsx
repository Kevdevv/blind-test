import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import '../styles/popup.scss'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '20%',
        height: '30%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '23px',
    },
};


function PopUp(props) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(true);


    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='happy_box'>
                    <img className={props.class} src={props.img} alt='happy people' />
                    <p>{props.text}</p>
                    <Link to='/'><button className={props.button}>Rejouer</button></Link>
                </div>
            </Modal>
        </div>
    );
}

export default PopUp;