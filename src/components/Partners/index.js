import React from 'react'

const partners = {
    items: [
        {
            logo: require("../../assets/img/shapes/partners/apple.png").default,
        },
        {
            logo: require("../../assets/img/shapes/partners/airbnb.png").default,
        },
        {
            logo: require("../../assets/img/shapes/partners/google.png").default,
        },
        {
            logo: require("../../assets/img/shapes/partners/nvidia.png").default,
        },
        {
            logo: require("../../assets/img/shapes/partners/tesla.png").default,
        },
        {
            logo: require("../../assets/img/shapes/partners/samsung.png").default,
        },
        {
            logo: require("../../assets/img/shapes/partners/facebook.png").default,
        },
        {
            logo: require("../../assets/img/shapes/partners/microsoft.png").default,
        },

    ]
}

function Partners() {
    return (
        <div className="container">
        <h2 className="middle-header"> We've worked with</h2>
            <div className="partners-section">
                {partners.items.map((item) => (
                    <div className="partners-items">
                        <img src={item.logo}></img>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Partners