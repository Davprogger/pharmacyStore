import s from './ContactShort.module.css'
import map from '../../../../assets/images/map.png'
import cum from '../../../../assets/images/cum.png'
import closeIcon from '../../../../assets/images/close-icon.png'
import successCheck from '../../../../assets/images/success-check.png'
import { useState } from 'react'

export const ContactShort = () => {

    const [input, setInput] = useState({
        name: '',
        mail: '',
        message: ''
    })
    const [successWindow, setSuccessWindow] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        if (input.name.trim().length > 0 
            && input.mail.trim().length > 0 
            && input.message.trim().length > 0) {
            // send data
            setSuccessWindow(true)
            setInput({
                name: '',
                mail: '',
                message: ''
            })
        }
        else {
            alert('Empty or ineligible input')
        }
    }

    const handleNameChange = e => {
        setInput({...input, name: e.target.value})
    }

    const handleMailChange = e => {
        setInput({...input, mail: e.target.value})
    }

    const handleMsgChange = e => {
        setInput({...input, message: e.target.value})
    }

    const handleCloseWindow = () => {
        setSuccessWindow(false)
    }

    return <div className={s.contactWrapper}>
        <div className={successWindow ? s.successWindow : s.successWindowHidden} >
            <div className={s.window}>
                <img src={closeIcon} className={s.closeIcon} alt="close icon" onClick={handleCloseWindow} />
                <h3>ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ</h3>
                <h5>ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿՊԱՏԱՍԽԱՆԻ ՁԵԶ ԷԼ․ՓՈՍՏԻ ՄԻՋՈՑՈՎ</h5>
                <img src={successCheck} className={s.checkImg} alt="check done" />
            </div>
        </div>
        <div className={s.findus} >
            <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik
            </p>
            <div className={s.imagesContainer}>
                <img src={map} alt="map" />
                <img src={cum} alt="circle" />
            </div>
        </div>
        <div className={s.formWrap}>
            <h3>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</h3>
            <form onSubmit={handleSubmit} className={s.form} >
                    <input className={s.fill1} type="text" placeholder='Անուն' value={input.name} onChange={handleNameChange} />
                    <input className={s.fill1} type="email" placeholder='Էլ․հասցե' value={input.mail} onChange={handleMailChange} />
                    <textarea className={s.smsg} placeholder='Հաղորդագրություն' value={input.message} onChange={handleMsgChange} />
                    <input className={s.sbtn} type="submit" value='ՈՒՂԱՐԿԵԼ' />
            </form>
        </div>  
    </div>
}