import './productPage.css'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { addCartProduct } from '../../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../redux/cartRedux'

const ProductPage = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [product, setProduct] = useState({})
    
    const [selectedSize,setSelectedSize] = useState('S')
    const [count, setCount] = useState(1)
    const dispatch = useDispatch(); const navigate = useNavigate();
    const user = useSelector(state => state.user.currentUser)
    const cart = useSelector(state => state.cart)
    console.log(cart);  console.log(user)
    const [color, setColor] = useState('')
    const [selectedColor,setSelectedColor] = useState(0)
    useEffect(() => {
        const getProduct = async () => {
            try {
                const product = await axios.get(`http://localhost:8800/product/${id}`)
                console.log(product)
                setProduct(product.data)
            } catch (err) {
                console.log(err)
            }
        };
        getProduct();
    }, [id])
console.log(product)
    useEffect(() => {
        const colorSetting = () => {
            setColor(product.color?.map((color) => {
                return {color:color}
            }))
        }; colorSetting()
    }, [product.color])

    const setColorSetting = (index) => {
        setSelectedColor(index)
    }
   console.log(cart)
    const addCartClick = async (e) => {
        e.preventDefault();
        if(user){
        // addCartProduct(dispatch, { productId: product._id, quantity: count, price: product.price, size:selectedSize, color:color[selectedColor].color }, user.details._id,product.price*count,count)
        console.log(count)
        dispatch(addProduct({products:{ productId: product._id,title:product.title,img:product.img, quantity: count, price: product.price, size:selectedSize, color:color[selectedColor].color },price:product.price*count,quantity:count}));    
        // const res = await axios.get(`http://localhost:8800/cart/find/${user.details._id}`, {
        //         headers: { "Content-Type": "application/json" },
        //         withCredentials: true
        //     })
        // console.log(res)
        // console.log(cart)
        //     axios.put(`http://localhost:8800/cart/${res.data._id}`, { products: cart.products }, {
        //         headers: { "Content-Type": "application/json" },
        //         withCredentials: true
        //     }).then(res => {console.log(res)}).catch(err=>{console.log(err)})
    }else{
            navigate('/login')
        }
    }
    
    useEffect(()=>{
        const updateCart=async()=>{
            const res = await axios.get(`http://localhost:8800/cart/find/${user.details._id}`, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            })
        console.log(res)
        console.log(cart)
            axios.put(`http://localhost:8800/cart/${res.data._id}`, { products: cart.products }, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            }).then(res => {console.log(res)}).catch(err=>{console.log(err)})
        }; updateCart()
    },[cart])

    return (<>
        <div className='productPage'>
            <img src={product.img} alt="" />
            <div className="description">
                <h1>{product.title}</h1>
                <p>{product.desc}</p>
                <span>${product.price}</span>
                <div className="productOptions">
                    <div className="colorOptions" >
                        <h3>Color</h3>
                        {product.color?.map((color, index) => (

                            <button onClick={()=>setColorSetting(index)} className="colorInput"
                                style={{
                                    backgroundColor: `${color}`,
                                    border: index===selectedColor && '3px solid rgb(104, 162, 255)'
                                }}  value={color}
                            >

                            </button>
                        ))}

                    </div>
                    <div className="sizeOptions">
                        <h3>Size</h3>
                        <select name="" id="" onChange={(e)=>{setSelectedSize(e.target.value)}}>
                            {product.size?.map((size) => (
                                <option value={`${size}`}>{size}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="quantity">
                    <div className="upDown">
                        <button className="minusBtn" onClick={() => { setCount(count => count - 1) }} disabled={count === 0}>-</button>
                        <span>{count}</span>
                        <button className="plusBtn" onClick={() => { setCount(count => count + 1) }}>+</button>
                    </div>
                    <button onClick={addCartClick}>ADD TO CART</button>
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </>
    )
}

export default ProductPage
