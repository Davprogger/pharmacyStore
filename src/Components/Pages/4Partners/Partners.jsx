import { CardAd } from './Card/CardAd'
import s from './Partners.module.css'

export const Partners = () => {

    return <div className={s.partnersWrapper}>
        <div className={s.partners}>
            <CardAd />
            <CardAd />
            <CardAd />
            <CardAd />
            <CardAd />
            <CardAd />
        </div>
    </div>
}