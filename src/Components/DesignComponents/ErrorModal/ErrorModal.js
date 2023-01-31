import React from "react";
import Card from "../Card/Card";
import './ErrorModal.css'


const ErrorModal = (props) =>{
    return(
        <div>
            <div className={'backdrop'} onClick={props.onAcknowledge}/>
            <Card className={'modal'}>
                <header className={'modal-title-container'}>
                    <h2 className={'modal-title'} >{props.title}</h2>
                </header>
                <div className={'modal-message-container'}>
                    <p className={'modal-message'}>{props.message}</p>
                </div>
                <footer className={'actions'}>
                    <button onClick={props.onAcknowledge} className={'modal-button'}>I Acknowledge</button>
                </footer>

            </Card>
        </div>
    )
}
export default ErrorModal