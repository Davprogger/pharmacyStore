import s from './CardAd.module.css'
import partnersAD from '../../../../assets/images/partnersAD.png'

export const CardAd = () => {
    return <div className={`${s.cardWrapper}`}>
        <img src={partnersAD} alt="partners" className={s.image} />
    </div>
}