import { useSelector } from 'react-redux'
import s from './Products.module.css'
import { napkinsSelector } from '../../../../helpers/selectors'
import { DefButton } from '../../../reusable/buttons/DefButton'
import { Link } from 'react-router-dom'
import { ProductCard } from '../../../reusable/ProductCard/ProductCard'

export const ProductsShort = () => {

    const napkins = useSelector(napkinsSelector)

    // optimize the following code
    const _napkins = []
    for (let i = 0; i < 6; i++) {
        _napkins.push(napkins[i])
    }

    return <div className={s.productsShortWrapper}>
        <header>ԱՐՏԱԴՐԱՆՔ</header>
        <div className={s.products}>
            {_napkins.map(item => <ProductCard data={item} key={item.id} napkins={true} mainPage={true} />)}  
        </div>
        <div className={s.seeMore}>
            <Link to='/products/'><DefButton>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</DefButton></Link>
        </div>
    </div>
}