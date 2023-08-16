import { useSelector } from 'react-redux'
import s from './Napkins.module.css'
import { napkinsSelector } from '../../../../helpers/selectors'
import { ProductCard } from '../../../reusable/ProductCard/ProductCard'

export const Napkins = () => {
    const napkins = useSelector(napkinsSelector)

    return <div className={s.wrapper}>
        {napkins.map(item => <ProductCard key={item.id} data={item} napkins={true} />)}
    </div>
}