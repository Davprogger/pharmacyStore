import { useSelector } from 'react-redux'
import s from './Bandages.module.css'
import { bandagesSelector } from '../../../../helpers/selectors'
import { ProductCard } from '../../../reusable/ProductCard/ProductCard'

export const Bandages = () => {
    const bandages = useSelector(bandagesSelector)

    return <div className={s.wrapper}>
        {bandages.map(item => <ProductCard key={item.id} data={item} napkins={false} />)}
    </div>
}