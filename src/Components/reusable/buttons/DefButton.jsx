import s from './DefButton.module.css'

export const DefButton = ({ children }) => {
    return <button className={s.button}>{children}</button>
}