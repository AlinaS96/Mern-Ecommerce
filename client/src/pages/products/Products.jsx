import React, { useEffect, useState } from 'react'
import Product from '../../components/product/Product'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'
import './products.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
const Products = () => {
    const [products, setProducts] = useState([])
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchedProducts, setSearchedProducts] = useState([])
    const location = useLocation();
    console.log(location)
    const [searchValue, setSearchValue] = useState(location.state)
    useEffect(() => {
        const getProducts = async () => {
            try {
                const products = await axios.get("http://localhost:8800/product")
                setProducts(products.data)
            } catch (err) {
                console.log(err)
            }
        };
        getProducts();
    }, [])

    useEffect(() => {
        const setFilter = async () => {
            if (searchValue) {
                let searchProduct = products.filter((prod) => prod.category.includes(searchValue))
                setSearchedProducts(searchProduct)
            }
            let filterProduct
            if (searchValue) {
                 filterProduct = [...searchedProducts]
            } else {
                 filterProduct = [...products]
            }
            
            if (selectedColor === '' && selectedSize === '') {
                console.log('unselected')
                setFilteredProducts(filterProduct)
            } else {
                if (selectedColor !== '') {
                    filterProduct = filterProduct.filter((prod) => prod.color.includes(selectedColor))
                }
                if (selectedSize !== '') {
                    filterProduct = filterProduct.filter((prod) => prod.size.includes(selectedSize))
                }
                setFilteredProducts(filterProduct)
            }

        }
        setFilter();
    }, [products, selectedColor, selectedSize])

    const handleColorSelect = (e) => {
        setSelectedColor(e.target.value)
    }

    const handleSizeSelect = (e) => {
        setSelectedSize(e.target.value)
    }
    console.log(filteredProducts)
    return (
        <>
            <div className='Products'>
                <div className="productsOptions">
                    <div className="filterOption1">
                        <h1>Filter products:</h1>
                        <select name="" id="" className='colorSelect' onChange={handleColorSelect}>
                            <option value="">All Colors</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="yellow">Yellow</option>
                            <option value="green">Green</option>
                            <option value="pink">Pink</option>
                            <option value="gray">Gray</option>
                        </select>
                        <select name="" id="" className='sizeSelect' onChange={handleSizeSelect}>
                            <option value="">All Sizes</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
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
                    {filteredProducts.length===0?
                    <><h3>No products found</h3></>:
                    <>{Object.values(filteredProducts).map((product) => (
                        <Product product={product} />
                    ))}</>
                    }
                </div>

            </div>
            <Newsletter />
            <Footer />
        </>
    )
}

export default Products
