import { Route, Routes } from "react-router-dom"
import { Main } from "../Components/Pages/0Main/Main"
import { ContactShort } from "../Components/Pages/0Main/4Contact/ContactShort"
import { Partners } from "../Components/Pages/4Partners/Partners"
import { About } from "../Components/Pages/1About/About"
import { Products } from "../Components/Pages/2Products/Products"
import { Bandages } from "../Components/Pages/2Products/0Bandages/Bandages"
import { Tanzif } from "../Components/Pages/2Products/1Tanzif/Tanzif"
import { Napkins } from "../Components/Pages/2Products/2Napkins/Napkins"
import { Top } from "../Components/Pages/2Products/3Top/Top"
import { Detailed } from "../Components/Pages/2Products/Detailed/Detailed"
import { Services } from "../Components/Pages/3Services/Services"

export const ReactRouter = () => (
        <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="about" element={ <About /> } />
            <Route path="products" element={ <Products /> }>
                <Route path="bandages" element={ <Bandages /> }/>
                <Route path="tanzif" element={ <Tanzif />} />
                <Route path="napkins" element={ <Napkins /> } />
                <Route path="tops" element={ <Top /> } />
                <Route path=":category/:productID" element={ <Detailed /> } />
            </Route>
            <Route path="services" element={ <Services /> } />
            <Route path="partners" element={ <Partners />} />
            <Route path="contact" element={ <ContactShort /> } />
        </Routes>
)