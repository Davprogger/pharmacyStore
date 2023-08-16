
import { AboutShort } from './0AboutShort/AboutShort'
import { ProductsShort } from './1Products/ProductsShort'
import { ServicesShort } from './2Services/ServicesShort'
import { PartnersShort } from './3Partners/PartnersShort'
import { ContactShort } from './4Contact/ContactShort'
import s from './Main.module.css'

export const Main = () => {

    return <div className={s.mainWrapper}>
        <AboutShort />
        <ProductsShort />
        <ServicesShort />
        <PartnersShort />
        <ContactShort />
    </div>
}