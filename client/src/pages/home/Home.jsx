import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import Category from '../../components/category/Category'
import './home.css'
import Product from '../../components/product/Product'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'
import { addCart } from '../../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
const Home = () => {
  const categories = [
    { title: "SHIRT STYLE", image: "https://brandsego.com/cdn/shop/files/Louis-Vicaci-Super-Stretchy-Slim-Fit-Lycra-Casual-Shirt-For-Men-Light-Yellow-BE18089-BR446-In-House-Lycra-1686135994_ee191351-807f-4376-8914-428c850ee1d5_5000x.jpg?v=1686136008" },
    { title: "LOUNGEWEAR LOVES", image: "https://brandsego.com/cdn/shop/files/Summer-Fashion-T-Shirt-_-Lounge-Short-Suit-For-Men-Shine-Grey-BE18233-BR691-BrandsEgo.Com-1689341029252_5000x.jpg?v=1689341031" },
    { title: "LIGHT JACKETS", image: "https://brandsego.com/cdn/shop/products/b9c8b6e5-16b7-49b2-bae7-f8642f197c041655459739449-Puma-Men-Jackets-6111655459738839-3_7b90e935-b188-44b4-b117-ed374708b274_400x.jpg?v=1673532488" },
    { title: "NEW DRESSES ", image: "https://sowears.net/cdn/shop/files/www-sowears-net-dresses-morgan-blue-solid-dress-39052364972240.jpg?v=1689164064" },
    { title: "THE PERFECT JEANS", image: "https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-4026-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024" }
  ]
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const cart = useSelector((state) => state.cart)
  console.log(cart)
  const [products, setProducts] = useState([])
  useEffect(() => { 
    const getProducts = async () => {
      try {
        const products = await axios.get("http://localhost:8800/product")
        setProducts(products.data)
      } catch (err) {
        console.log(err)
      }
    };
    const setCart = () => {
      if (user.currentUser?.details._id) {
        addCart(dispatch, user.currentUser.details._id)
      }
    }
    getProducts(); setCart();
  }, [])
  return (
    <div>
      <Header />
      <div className="categories">
        {categories.map((category) => (
          <Category category={category} />
        ))}
      </div>
      <div className="Products">
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
