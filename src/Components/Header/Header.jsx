import React, { useState } from 'react'
import s from './Header.module.css'
import logo from '../../assets/images/logo.png'
import flag from '../../assets/images/flag.png'
import arrow from '../../assets/images/Vector 1.png'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [languagesDropped, setLanguagesDropped] = useState(false)
    const handleLanguagesDrop = () => {
        setLanguagesDropped(prev => !prev)
    }

    return <div className={s.header}>
        <div className={s.logo}>
            <img src={logo} alt="logo failed to load" />
        </div>
        <div className={s.links}>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to='/'>ԳԼԽԱՎՈՐ</NavLink>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to='/about'>ՄԵՐ ՄԱՍԻՆ</NavLink>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to='/products'>ԱՐՏԱԴՐԱՆՔ</NavLink>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to='/services'>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</NavLink>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to='/partners'>ԳՈՐԾԸՆԿԵՐՆԵՐ</NavLink>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to='/contact'>ՀԵՏԱԴԱՐՁ ԿԱՊ</NavLink>
            <div className={s.flags} onClick={handleLanguagesDrop}>
                <div className={s.flagBtn}>
                    <img src={flag} alt="flag" />
                    <img src={arrow} alt="arrow" className={languagesDropped ? s.upsideDownArrow : s.arrow}/>
                </div>
                <div className={!languagesDropped ? s.menuHidden : s.menuShown}>
                    <img src={flag} alt="flag" />
                </div>
            </div>
        </div>
    </div>
}

export default Header