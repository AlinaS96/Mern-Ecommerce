import './cart.css'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import Paypal from '../../components/paypal/Paypal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProduct, removeProduct } from '../../redux/cartRedux'
const Cart = () => {
    const [openModal, setOpenModal] = useState(false)
    const [showPaypal, setShowPaypal] = useState(false)
    const [showStripe, setShowStripe] = useState(false)
    const [cartProducts, setCartProducts] = useState({})
    const [qtyArr, setQtyArr] = useState([])


    const navigate = useNavigate(); const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    const id = user.currentUser.details._id
    const handleCheckout = () => {

        // axios.post("http://localhost:8800/stripe/create-checkout-session", res.data)
        // .then((res)=>{if(res.data.url){
        //     window.location.href = res.data.url
        // }}).catch(err=>{console.log(err)})

    }
    useEffect(() => {
        const getCartProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/cart/find/${id}`, {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                })
                console.log(res)
                setCartProducts(res.data.products)
            } catch (err) {
                console.log(err)
            }
        }; getCartProducts()
    }, [cart, id])
    useEffect(() => {
        const setQuantityArr = () => {
            const qtyArr = Object.values(cartProducts).map((prod) => {
                return prod.quantity
            })
            console.log(qtyArr)
            setQtyArr(qtyArr)
        }
        setQuantityArr()
    }, [cartProducts])

    const handleProductClick = (productId) => {
        navigate(`/products/${productId}`)
    }

    const IncQty = async (index, product) => {
        let newQtyArr = [...qtyArr]
        newQtyArr[index] += 1
        setQtyArr(newQtyArr)
        dispatch(addProduct({ products: { productId: product.productId, title: product.title, img: product.img, quantity: 1, price: product.price, size: product.size, color: product.color }, price: product.price, quantity: 1 }));
    }
    console.log(cart)

    const DecQty = async (index, product) => {
        let newQtyArr = [...qtyArr]
        newQtyArr[index] -= 1
        setQtyArr(newQtyArr)
        dispatch(addProduct({ products: { productId: product.productId, title: product.title, img: product.img, quantity: -1, price: product.price, size: product.size, color: product.color }, price: -product.price, quantity: -1 }));
    }

    useEffect(() => {
        const updateCart = async () => {
            const res = await axios.get(`http://localhost:8800/cart/find/${user.currentUser.details._id}`, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            })
            axios.put(`http://localhost:8800/cart/${res.data._id}`, { products: cart.products }, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            }).then(res => { console.log(res) }).catch(err => { console.log(err) })
        }; updateCart()
    }, [cart])

    const removeItem = (product) => {
        console.log('removing product')
        dispatch(removeProduct({ productId: product.productId }))
        // navigate('/cart')
    }
    return (
        <>
            <div className='cart'>
                <h1>YOUR BAG</h1>
                <div className="top">
                    <button className='continueBtn'>CONTINUE SHOPPING</button>
                    <div className="topText">
                        <span className='shopBag'>Shopping bag ({cart.totalQuantity})</span>
                        <span className='wishlist'>Your Wishlist (0)</span>
                    </div>
                    <button className='topCheckoutBtn'>CHEKOUT NOW</button>
                </div>
                <div className="bottom">
                    <div className="cartProducts">
                     {Object.values(cartProducts)?.map((product, index) => (<>
                            
                            <div className="cartProduct" key={product._id} >
                                <img src={product.img} alt="" onClick={() => handleProductClick(product.productId)} />
                                <div className="cartProductLeft">
                                    <h3 className='productName'><span>Product: </span>{product.title}</h3>
                                    <h3 className='productId'><span>ID: </span>{product.productId}</h3>
                                    <div className="colorDiv" style={{ backgroundColor: `${product.color}` }}></div>
                                    <h3 className="size"><span>Size: </span>{product.size}</h3>
                                </div>
                                <div className="cartProductRight">
                                    <div className="counter">
                                        <button className="plusBtn"
                                            onClick={() => IncQty(index, product)}>
                                            +
                                        </button>
                                        {/* <span className='count'>{qtyArr[index]}</span> */}
                                        <span className='count'>{product.quantity}</span>
                                        <button className="minusBtn" disabled={qtyArr[index] === 1}
                                            onClick={ () => { DecQty(index, product) }}>
                                            -
                                        </button>
                                    </div>
                                    <span className='cartProductPrice'>${product.price}</span>
                                </div>
                            </div>
                            
                       </>))}
                    </div>
                    <div className="summary">
                        <h1>ORDER SUMMARY</h1>
                        <div className="summaryHeader">
                            <h3>Subtotal</h3>
                            <h3>${cart.totalPrice}</h3>
                        </div>
                        <div className="summaryHeader">
                            <h3>Estimated Shipping</h3>
                            <h3>$5.90</h3>
                        </div>
                        <div className="summaryHeader">
                            <h3>Shipping Discount</h3>
                            <h3>-$5.80</h3>
                        </div>
                        <div className="total">
                            <h3>Total</h3>
                            <h3>${cart.totalPrice}</h3>
                        </div>

                        <button onClick={() => { setOpenModal(true) }} className="checkoutBtn">CHECKOUT NOW</button>

                    </div>
                </div>

                <Footer />
            </div>
            {openModal && <div className="paymentModal">
                <div className='topModal'>
                    <div className="exitMark" onClick={() => { setOpenModal(false); setShowPaypal(false); setShowStripe(false) }}>
                        <FontAwesomeIcon icon={faXmark} size="2xl" />
                    </div>
                    {!showStripe && !showPaypal && <h3>Select payment option</h3>}

                </div>
                {showStripe ? (<div className='stripeCheckout'>
                    <img src="https://www.stendhalfestival.com/wp-content/uploads/2018/10/powered-by-stripe.png" alt="" />
                    <button onClick={handleCheckout}>Proceed with card</button>
                </div>) : showPaypal ? (<>
                    <Paypal />
                </>) : (<>
                    <button className="payStripe" onClick={() => { setShowStripe(true) }}>Pay with Stripe</button>
                    <button className="payPaypal" onClick={() => { setShowPaypal(true) }}>Pay with Paypal</button>
                </>)}
            </div>}
        </>
    )
}

export default Cart
