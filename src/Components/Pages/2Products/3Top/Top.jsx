import { useSelector } from 'react-redux'
import s from './Top.module.css'
import { topsSelector } from '../../../../helpers/selectors'
import { ProductCard } from '../../../reusable/ProductCard/ProductCard'

export const Top = () => {
    const top = useSelector(topsSelector)
    return <div className={s.wrapper}>
        {top.map(item => <ProductCard key={item.id} data={item} napkins={false} />)}
    </div>
}