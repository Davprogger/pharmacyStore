import { useSelector } from 'react-redux'
import s from './Tanzif.module.css'
import { tanzifSelector } from '../../../../helpers/selectors'
import { ProductCard } from '../../../reusable/ProductCard/ProductCard'

export const Tanzif = () => {
    const tanzif = useSelector(tanzifSelector)

    return <div className={s.wrapper}>
        {tanzif.map(item => <ProductCard key={item.id} data={item} napkins={false} />)}
    </div>
}