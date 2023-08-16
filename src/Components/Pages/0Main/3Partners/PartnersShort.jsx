import { Link } from 'react-router-dom'
import { CardAd } from './Card/CardAd'
import s from './PartnersShort.module.css'
import { DefButton } from '../../../reusable/buttons/DefButton'

export const PartnersShort = () => {

    return <div className={s.partnersWrapper}>
        <header>ԳՈՐԾԸՆԿԵՐՆԵՐ</header>
        <div className={s.partners}>
            <CardAd />
            <CardAd />
            <CardAd />
            <CardAd />
            <CardAd />
            <CardAd />
        </div>
        <Link to='/partners'><DefButton>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</DefButton></Link>
    </div>
}