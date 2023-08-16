import s from './ServicesShort.module.css'
import { DefButton } from '../../../reusable/buttons/DefButton'
import servicesf from '../../../../assets/images/servicesf.png'
import servicesc from '../../../../assets/images/servicesc.png'
import { Link } from 'react-router-dom'

export const ServicesShort = () => {

    return <div className={s.servicesWrapper}>
        <div className={s.textp}>
            <header>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</header>
            <p>Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</p>
            <Link to='/services'><DefButton>ԿԱՐԴԱԼ ԱՎԵԼԻՆ</DefButton></Link>
        </div>
        <div className={s.images}>
            <img src={servicesf} alt="factory" />
            <img src={servicesc} alt="circle" />
        </div>
    </div>
}