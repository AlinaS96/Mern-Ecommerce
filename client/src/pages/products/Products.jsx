import React from 'react'
import Product from '../../components/product/Product'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'
import './products.css'
const Products = () => {
    const products = [
        "https://lirikamatoshi.com/cdn/shop/products/20_375a8763-f5d7-4184-a352-4523ef713733.jpg?v=1576267132",
        "https://www.peekaboo.pk/wp-content/uploads/2022/06/NEXT-RED-REGULAR-FIT-COTTON-T-SHIRT-BACK.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWkgA3_v8Vy45hgGIcPXEuBB9j_yvKjGAbkrDqME&s",
        "https://www.stormtech.ca/cdn/shop/products/LRX-4_BLACK_2000x.jpg?v=1675198623",
        "https://euro.montbell.com/products/prod_img/zoom/z_2301368_bric.jpg",
        "https://oliveplanet.in/cdn/shop/products/army-green-jacket-for-men-in-military-with-shoulder-flaps_1280x.jpg?v=1672748497",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM6xAsKhmK2RS_WGtlJB-ngswJ30B2HnR6bzm1hNvD&s",
        "https://media.gq.com/photos/63405112e3db2e41ce8ba53f/master/w_1280%2Cc_limit/Layer_1.jpg"
    ]
    return (
        <div className='Products'>
            <h1>Dresses</h1>
            <div className="options">
                <div className="filterOption1">
                    <h1>Filter products:</h1>
                    <select name="" id="" className='colorSelect'>
                        <option disabled="true" value="">Color</option>
                        <option value="">White</option>
                        <option value="">Black</option>
                        <option value="">Red</option>
                        <option value="">Blue</option>
                        <option value="">Yellow</option>
                        <option value="">Green</option>
                    </select>
                    <select name="" id="" className='sizeSelect'>
                        <option disabled="true" value="">Size</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                    </select>
                </div>
                <div className="filterOption2">
                    <h1>Filter products:</h1>
                    <select name="" id="" className='newSelect'>
                        <option value="">Newest</option>
                        <option value="">Oldest</option>
                    </select>
                </div>
            </div>
            <div className="products">
                {products.map((image) => (
                    <Product image={image} />
                ))}
            </div>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Products
