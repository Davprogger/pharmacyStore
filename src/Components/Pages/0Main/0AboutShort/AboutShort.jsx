import s from './AboutShort.module.css'
import { DefButton } from '../../../reusable/buttons/DefButton'
import fafactory from '../../../../assets/images/fafactory.png'
import ellipse from '../../../../assets/images/Ellipse 1.png'
import { Link } from 'react-router-dom'

export const AboutShort = () => {
    
    return <div className={s.top}>
    <div className={s.topText}>
        <h3>ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ</h3>
        <p>Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;</p>
        <Link to='/about'><DefButton>ԿԱՐԴԱԼ ԱՎԵԼԻՆ</DefButton></Link>
    </div>
    <div className={s.topPic}>
        <img src={fafactory} alt="faf" />
        <img src={ellipse} alt="circle" />
    </div>
</div>
}