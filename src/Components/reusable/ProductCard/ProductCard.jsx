import { SecondaryButton } from '../../reusable/buttons/SecondaryButton';
import s from './ProductCard.module.css'
import iconX from '../../../assets/images/dimensions-x-icon.png'
import iconY from '../../../assets/images/dimensions-y-icon.png'
import layers from '../../../assets/images/layers.png'
import quantity from '../../../assets/images/quantity.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({data, napkins, mainPage = false}) => {

    const [selectedSize, setSelectedSize] = useState(0)

    return <div className={`${s.cardWrapper}`}>
        <img src={data.image} alt="product" className={s.image} />
        <p className={s.name}>{data.name}</p>
            {napkins ?
                <div className={s.details}>
                    <p className={`${s.dimensions} ${s.selected}`}><img src={iconY} alt="y" />{data.dimensions.y}սմ <img src={iconX} alt="x" /> {data.dimensions.x}սմ</p>
                    <p className={s.layers}><img src={layers} alt="layers icon" />{data.layers} շերտ</p>
                    <p className={s.quantity}><img src={quantity} alt="quantity icon" />{data.pieces} հատ</p>
                </div>
            :
            <div className={s.details} >
                    <p className={`${s.dimensions} ${s.uni} ${selectedSize === 0 ? s.selected : ''}`} onClick={() => setSelectedSize(0)}><img src={iconY} alt="y" />{data.sizes[0].x}սմ <img src={iconX} alt="x" /> {data.sizes[0].y}մ</p>
                    <p className={`${s.dimensions} ${s.uni} ${selectedSize === 1 ? s.selected : ''}`} onClick={() => setSelectedSize(1)}><img src={iconY} alt="y" />{data.sizes[1].x}սմ <img src={iconX} alt="x" /> {data.sizes[1].y}մ</p>
                    <p className={`${s.dimensions} ${s.uni} ${selectedSize === 2 ? s.selected : ''}`} onClick={() => setSelectedSize(2)}><img src={iconY} alt="y" />{data.sizes[2].x}սմ <img src={iconX} alt="x" /> {data.sizes[2].y}մ</p>
            </div>
            }
        <div className={s.button}>
            <Link to={`./${mainPage ? 'napkins/' : ''}${data.id}`}><SecondaryButton>ՏԵՍՆԵԼ Ավելին</SecondaryButton></Link>
        </div>
        <p className={data.sterile ? (napkins ? s.nsterile : s.sterile) : s.sterileHide}>ՍՏԵՐԻԼ</p>
    </div>
}