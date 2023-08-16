import s from './Footer.module.css'
import logo from '../../assets/images/logo-footer.png'
import { Link } from 'react-router-dom'
import callIcon from '../../assets/images/call-icon.png'
import mailIcon from '../../assets/images/mail-icon.png'
import locIcon from '../../assets/images/loc-icon.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

export const Footer = () => {

    return <footer className={s.footer}>
        <div className={s.wrapper}>
            <img src={logo} alt="logo white" />
            <div className={s.links} >
                <header>ԱՐՏԱԴՐԱՆՔ</header>
                <ul> 
                    <li><Link to='#'>ՀԵՂՈՒԿՆԵՐ</Link></li>
                    <li><Link to='#'>ՔՍՈՒՔՆԵՐ</Link></li>
                    <li><Link to='#'>ՅՈՒՂԵՐ</Link></li>
                    <li><Link to='#'>ՈԳԵԹՈՒՐՄԵՐ</Link></li>
                    <li><Link to='#'>ՓՈՇԻՆԵՐ</Link></li>
                    <li><Link to='#'>ՄԱՇԿԻ ԽՆԱՄՔԻ ՄԻՋՈՑՆԵՐ</Link></li>
                </ul>
            </div>
            <div className={s.contactUs}>
                <header>ԿԱՊ ՄԵԶ ՀԵՏ</header>
                <div><img src={callIcon} alt="callicon" /><p>Զանգահարեք մեզ: +374 90 000 000</p></div>
                <div><img src={mailIcon} alt="mailicon" /><p>Էլ հասցե: @mail.ru</p></div>
                <div><img src={locIcon} alt="locIcon" /><p>Երևան</p></div>
            </div>
            <div className={s.findUs}>
                <header>ՓՆՏՐԵՔ ՄԵԶ</header>
                <div className={s.icons}>
                    <Link to='#'><img src={instagram} alt="instagram icon" /></Link>
                    <Link to='#'><img src={twitter} alt="twitter icon" /></Link>
                    <Link to='#'><img src={facebook} alt="facebook icon" /></Link>
                </div>
            </div>
        </div>
        <p className={s.copyrights}>By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են</p>
    </footer>
}