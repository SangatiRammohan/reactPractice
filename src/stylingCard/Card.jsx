import React from 'react'
import backGround from './stylingCard_assets/Background.jpg'
import pose from './stylingCard_assets/pose.png'
import style from './stylingCard_assets/syles.jpg'
import vector from './stylingCard_assets/image.png'
import "./Card.css"
function Card() {
    return (
        <>
            <div className="main_card">
                <div className="card">
                    <div className="card_details">
                        <h2>Enchanting Wedding Backdrops</h2>
                        <p><li>✨Fantasy Themes: Immerse yourself in a magical fairytale with dreamy castles,
                            enchanted forests, and celestial backdrops, bringing a storybook romance to life.</li>
                            <li>🌍 Global Wedding Venues: Experience iconic destinations like Parisian gardens, Santorini
                                sunsets, or Bali beachside ceremonies, capturing the essence of love across the world.  </li>
                            <li>🕌 Traditional Indian Mandaps: Embrace cultural elegance with intricately designed mandaps,
                                adorned with vibrant florals, golden drapes, and sacred rituals, symbolizing timeless traditions.</li></p>
                        <button>Try ShadiPix for Free <img src={vector} alt="" /></button>
                    </div>
                    <div className="card_img">
                        <img src={backGround} height={500} weight={1000} alt="wedding image" />
                    </div>
                </div>



                <div className="card">
                    <div className="card_img">
                        <img src={pose} height={500} weight={500} alt="wedding image" />
                    </div>
                    <div className="card_details">
                        <h2>Bridal & Groom Elegance: Pick Your Signature Style</h2>
                        <p><li>  🕌 Traditional Indian Wear: Adorn yourself in exquisite sarees,
                            regal sherwanis, and intricately embroidered lehengas, showcasing the grandeur of Indian wedding fashion.</li>
                            <li>🤵 Western Attire: Embrace classic elegance with timeless tuxedos,
                                flowing white gowns, and stylish suits, perfect for a sophisticated wedding look.  </li>
                            <li>🌏 Cultural Variations: Celebrate diversity with regionally inspired attire, from graceful kimonos
                                to vibrant African prints, reflecting unique heritage and traditions.  </li>
                            <li>👗 Modern Fusion Wear: Blend tradition with contemporary style through chic
                                Indo-Western outfits, featuring elegant drapes, trendy cuts, and modern embellishments.</li>
                        </p>
                        <button>Try ShadiPix for Free <img src={vector} alt="" /></button>
                    </div>
                </div>


                <div className="card">
                    <div className="card_details">
                        <h2>Capture the Moment: Candid & Romantic Poses</h2>
                        <p><li>❤️ Romantic Poses: Create timeless memories with intimate gestures, soft glances,
                            and elegant embraces, showcasing the deep love and connection between you and your partner.</li>
                            <li>📸 Candid Poses: Capture genuine, unscripted moments filled with laughter,
                                joy, and natural expressions, reflecting the true essence of your special day.  </li></p>
                        <button>Try ShadiPix for Free <img src={vector} alt="" /></button>
                    </div>
                    <div className="card_img">
                        <img src={style} height={500} weight={100} alt="wedding image" />
                    </div>
                </div>
            </div>

        </>

    )
}

export default Card