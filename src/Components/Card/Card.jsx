import React from 'react'
import './Card.css'
import img1 from './cardsImgs/01a.JPG'
import img2 from './cardsImgs/02b.JPG'
import img3 from './cardsImgs/03c.JPG'
import img4 from './cardsImgs/04.JPG'
import img5 from './cardsImgs/05.JPG'
import img6 from './cardsImgs/06.JPG'
import img7 from './cardsImgs/07.JPG'
import img8 from './cardsImgs/08.JPG'
import img9 from './cardsImgs/09.JPG'
import img10 from './cardsImgs/10.JPG'

const imgsArr =  [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

export default function Card(){
    return(
        <div className="all-cards-container">
            <div className="cards-container">
                {
                    imgsArr.map(img => {
                        return(
                            <div className="card"><img src={img} className="img-card"/></div>
                        )
                    })
                }
            </div>
        </div>
    )
}