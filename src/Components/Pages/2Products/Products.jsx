import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import s from './Products.module.css'
import { useEffect } from 'react'

export const Products = () => {

    const nav = useNavigate()
    // TODO: clicking products second time in a row doesn't redirect anymore
    useEffect(() => {
        nav('./bandages')
    }, []) //eslint-disable-line
    return <>
        <div className={s.navlinks}>
            <NavLink className={({ isActive }) => isActive ? s.active : ''} to='./bandages'>Բինտեր</NavLink>
            <NavLink className={({ isActive }) => isActive ? s.active : ''} to='./tanzif'>թանզիֆՆԵՐ</NavLink>
            <NavLink className={({ isActive }) => isActive ? s.active : ''} to='./napkins'>անձեռոցիկներ</NavLink>
            <NavLink className={({ isActive }) => isActive ? s.active : ''} to='./tops'>ԹՈՓԵՐ</NavLink>
        </div>
        <Outlet />
    </>
}