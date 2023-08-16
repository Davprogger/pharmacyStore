import s from './SecondaryButton.module.css'

export const SecondaryButton = ({ children }) => {
    return <button className={s.button}>{children}</button>
}