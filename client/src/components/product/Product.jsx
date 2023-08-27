import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import './product.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCartProduct } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import axios from "axios";

const Product = ({ product }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isShown, setIsShown] = useState(false);
  const [quantity, setQuantity] = useState(1)
  const user = useSelector(state => state.user.currentUser)
  const cart = useSelector(state => state.cart)

  const productClick = () => {
    navigate(`/products/${product._id}`)
  }
  
  const addCartClick = async () => {
    if (user) {
      setQuantity(prevCount => prevCount + 1)
      // addCartProduct(dispatch, {productId:product._id,quantity:quantity, price:product.price, size:product.size[0], color:product.color[0]}, user.details._id,product.price,1)
      dispatch(addProduct({ products: { productId: product._id, title: product.title, img: product.img, quantity: quantity, price: product.price, size: product.size[0], color: product.color[0] }, price: product.price, quantity: 1 }));
    }
    else {
      navigate('/login')
    }
  }
  useEffect(() => {
    const updateCart = async () => {
      const res = await axios.get(`http://localhost:8800/cart/find/${user.details._id}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      })
      
      axios.put(`http://localhost:8800/cart/${res.data._id}`, { products: cart.products }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      }).then(res => { console.log(res) }).catch(err => { console.log(err) })
    }; updateCart()
  }, [cart])

  return (
    <div className="product" onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)} >
      <img src={product.img} alt="" />
      {isShown && <div className="icons">
        <FontAwesomeIcon className="icon" onClick={addCartClick} icon={faCartShopping} />
        <FontAwesomeIcon className="icon" onClick={productClick} icon={faMagnifyingGlass} />
        <FontAwesomeIcon className="icon" icon={faHeart} />
      </div>}
    </div>
  )
}

export default Product
