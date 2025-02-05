import React from "react"
import "./price.css"

function Prices() {
    return (
        <>
            <div className="price_main">
                <div className="price_head">
                    <h1>PRICING</h1>
                    <div className="pricing_buttons">
                        <button >Monthly</button>
                        <button>Quaterly</button>
                        <button>Lifetime</button>
                    </div>
                </div>

                <div className="price_box">
                    <div className="price_box_left">
                        <h2>Unlimited Downloads</h2>
                        <p>lorem10</p>
                        <p>lorem10</p>
                        <p>lorem10</p>
                        <p>lorem10</p>
                    </div>
                    <div className="price_box_right">
                        <h3><s>30000</s></h3>
                        <h2>22999</h2>
                        <button>For Unlimited Time</button>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Prices