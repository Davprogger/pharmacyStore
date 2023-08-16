import { useState } from 'react'
import s from './Services.module.css'
import { DefButton } from '../../reusable/buttons/DefButton'
import img1 from '../../../assets/images/servicesPage/img1.png'
import circle1 from '../../../assets/images/servicesPage/circle1.png'
import img2 from '../../../assets/images/servicesPage/img2.png'
import circle2 from '../../../assets/images/servicesPage/circle2.png'
import closeIcon from '../../../assets/images/close-icon.png'
import successCheck from '../../../assets/images/success-check.png'

export const Services = () => {

    const [step, setStep] = useState(0)
    const [orderInputs, setOrderInputs] = useState({
        name: '',
        lastName: '',
        number: '',
        message: ''
    })

    const handleOrderCallButton = () => {
        setStep(1)
    }

    const handleNameChange = e => {
        setOrderInputs({...orderInputs, name: e.target.value})
    }
    const handleLastNameChange = e => {
        setOrderInputs({...orderInputs, lastName: e.target.value})
    }
    const handleNumberChange = e => {
        setOrderInputs({...orderInputs, number: e.target.value})
    }
    const handleMessageChange = e => {
        setOrderInputs({...orderInputs, message: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (!Object.values(orderInputs).some(value => value === "")) {
            setStep(2)
            //send data to backend
        } else {
            alert('Something\'s wrong')
        }
    }

    const handleCloseWindow = () => {
        setStep(0)
        setOrderInputs({
            name: '',
            lastName: '',
            number: '',
            message: ''
        })
    }


    return <>
        <div className={`${s.orderCall} ${step === 1 ? s.orderCallActive : ''} ${step === 2 ? s.orderCallNextStep : ''}`}>
            <img src={closeIcon} className={s.closeIcon} alt="close icon" onClick={handleCloseWindow} />
            <header>Պատվիրել զանգ</header>
            <form onSubmit={handleSubmit} className={s.formInput}>
                <div className={s.credentials}>
                    <input type="text" className={s.input} placeholder='Անուն' value={orderInputs.name} onChange={handleNameChange} />
                    <input type="text" className={s.input} placeholder='Ազգանուն' value={orderInputs.lastName} onChange={handleLastNameChange} />
                </div>
                <input type="tel" className={s.input} placeholder='Հեռախեսահամար' value={orderInputs.number} onChange={handleNumberChange} />
                <textarea className={s.input} placeholder='Ծառայության անվանումը' value={orderInputs.message} onChange={handleMessageChange} />
                <input type="submit" className={s.sbtn} value='ՊԱՏՎԻՐԵԼ' />
            </form>
        </div>
        <div className={`${s.callOrdered} ${step === 2 ? s.callOrderedActive : ''}`}>  
            <img src={closeIcon} className={s.closeIcon} alt="close icon" onClick={handleCloseWindow} />
            <header>ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ</header>
            <p>ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿԱՊ ԿՀԱՍՏԱՏԻ ՁԵԶ ՀԵՏ</p>
            <img src={successCheck} alt="success icon" />
        </div>
        <div className={`${step !== 0 ? s.nextStep : ''} ${s.defaultStep}`} />
        
        <div className={s.services}>
            <div className={s.sub}>
                <div className={s.textPart}>
                    <header>
                        ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ
                    </header>
                    <p>Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ; Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    <div className={s.button} onClick={handleOrderCallButton}><DefButton>ՊԱՏՎԻՐԵԼ ԶԱՆԳ</DefButton></div>
                </div>
                <div className={s.imgPart1}>
                    <img src={img2} alt="factory" />
                    <img src={circle2} alt="circle" />
                </div>
            </div>
            <div className={s.sub}>
                <div className={s.imgPart2}>
                    <img src={img1} alt="factory" />
                    <img src={circle1} alt="circle" />
                </div>
                <div className={s.textPart}>
                    <header>
                    ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ 
                    </header>
                    <p>Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ; Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    <div className={s.button} onClick={handleOrderCallButton}><DefButton>ՊԱՏՎԻՐԵԼ ԶԱՆԳ</DefButton></div>
                </div>
            </div>
        </div>
    </>
}