import React from 'react'
import lprd1 from "../assets/lprd1.webp"
import lprd2 from "../assets/lprd2.webp"
import lprd3 from "../assets/lprd3.webp"
import lprd4 from "../assets/lprd4.webp"
import prd1 from "../assets/prd1.webp"
import prd2 from "../assets/prd2.webp"
import prd3 from "../assets/prd3.jpg"
import prd4 from "../assets/prd4.webp"
import cartimg from "../assets/cartimg.webp"
import delhistore from "../assets/delhistore.webp"
import hydstore from "../assets/hydstore.webp"
import Body from '../Body.jsx'

function Data() {
    const data = [
        { id: 1, src: lprd1, alt: "Image 1", Title: "YELLOW NOCTURNAL SWEATSHIRT", Price: "9995" },
        { id: 2, src: lprd2, alt: "Image 2", Title: "BLACK NOCTURNAL HOODIE", Price: "13995" },
        { id: 3, src: lprd3, alt: "Image 3", Title: "OLIVE NOCTURNAL HOODIE", Price: "13995" },
        { id: 4, src: lprd4, alt: "Image 4", Title: "BLACK NOCTURNAL SWEATSHIRT", Price: "9995" },
        // { src: lprd1, alt: "Image 1", Title: "YELLOW NOCTURNAL SWEATSHIRT", Price: "4995" },
    ]
    const maal = [
        { src: prd1, alt: "Image 5", Title: "BLACK JOGGERS", Price: "4995" },
        { src: prd2, alt: "Image 6", Title: "OLIVE JOGGERS", Price: "4995" },
        { src: prd3, alt: "Image 7", Title: "RAW DENIM JORTS", Price: "7495" },
        { src: prd4, alt: "Image 8", Title: "CAMO TRACK JACKETS", Price: "9995" },
        // { src: lprd1, alt: "Image 1", Title: "YELLOW NOCTURNAL SWEATSHIRT", Price: "4995" },
    ]

    const storedata = [{ src: cartimg, alt: "Image 9" },
    { src: delhistore, alt: "Image 10" },
    { src: hydstore, alt: "Image 11" }
    ]
    return (
        <div>
            <Body data={data} />
        </div>
    )
}

export default Data
