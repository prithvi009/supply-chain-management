import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import video from '../videos/video1.mp4'
import pic1 from '../images/product_track1.jpeg'
import pic2 from '../images/product_track.jpg'
import pic3 from '../images/marketplace.jpg'


function Cards() {
    return (
        <div className='cards'>

            <video src={video} autoPlay loop muted></video>
            <h1>TRY US OUT</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>


                        <CardItem
                            src={pic2}
                            text={<a className='links' href='https://gleeful-gumption-a9d8b1.netlify.app/'>Administration Panel</a>}
                            label='Services'
                        />

                        <CardItem
                            src={pic3}
                            text={<a className='links' href="https://dapper-gelato-31f330.netlify.app/">Customer Panel</a>}
                            label='product'
                        />


                    </ul>
                    {/* <ul className='cards__items'>
                        <CardItem
                            src={pic3}
                            text="Rome"
                            label='Fun'
                            path='/services'
                        />
                        <CardItem
                            src={pic4}
                            text="Switzerland"
                            label='Fun'
                            path='/services'
                        />
                    </ul> */}
                    {/* <ul className='cards__items'>
                        <CardItem
                            src={pic5}
                            text="France"
                            label='Fun'
                            path='/services'
                        />
                        <CardItem
                            src={pic6}
                            text="Amazon"
                            label='Fun'
                            path='/services'
                        />
                    </ul> */}

                </div>

            </div>

        </div>
    )
}

export default Cards
