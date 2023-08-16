import { useParams } from 'react-router-dom'
import s from './Detailed.module.css'
import { useSelector } from 'react-redux'
import { productsSelector } from '../../../../helpers/selectors'
import iconX from '../../../../assets/images/dimensions-x-icon.png'
import iconY from '../../../../assets/images/dimensions-y-icon.png'
import layers from '../../../../assets/images/dimensions-y-icon.png'
import quantity from '../../../../assets/images/dimensions-y-icon.png'
import { useState } from 'react'

export const Detailed = () => {

    const [selectedSize, setSelectedSize] = useState(0)
    const {productID, category} = useParams()
    const products = useSelector(productsSelector)
    const product = products[category].find(ob => ob.id === +productID)
    const napkins = category === 'napkins'

    return <div className={s.wrapper}>
            <div className={s.imageWrapper}>
                <img src={product.image} alt="product" />
                { product.sterile ? <p className={s.sterile}>ՍՏԵՐԻԼ</p> : null }
            </div>
            <div className={s.description}>
                <header>բժշկական ԲԻՆՏ ՍՏԵՐԻԼ</header>
                {napkins ?
                    <div className={s.details}>
                        <p className={`${s.dimensions} ${s.selected}`}><img src={iconY} alt="y" />{product.dimensions.y}սմ <img src={iconX} alt="x" /> {product.dimensions.x}սմ</p>
                        <p className={s.layers}><img src={layers} alt="layers icon" />{product.layers} շերտ</p>
                        <p className={s.quantity}><img src={quantity} alt="quantity icon" />{product.pieces} հատ</p>
                    </div>
                    :
                    <div className={s.details} >
                            <p className={`${s.dimensions} ${s.uni} ${selectedSize === 0 ? s.selected : ''}`} onClick={() => setSelectedSize(0)}><img src={iconY} alt="y" />{product.sizes[0].x}սմ <img src={iconX} alt="x" /> {product.sizes[0].y}մ</p>
                            <p className={`${s.dimensions} ${s.uni} ${selectedSize === 1 ? s.selected : ''}`} onClick={() => setSelectedSize(1)}><img src={iconY} alt="y" />{product.sizes[1].x}սմ <img src={iconX} alt="x" /> {product.sizes[1].y}մ</p>
                            <p className={`${s.dimensions} ${s.uni} ${selectedSize === 2 ? s.selected : ''}`} onClick={() => setSelectedSize(2)}><img src={iconY} alt="y" />{product.sizes[2].x}սմ <img src={iconX} alt="x" /> {product.sizes[2].y}մ</p>
                    </div>
                }
                <p className={s.text}>
                    Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                </p>
            </div>    
        </div>
}