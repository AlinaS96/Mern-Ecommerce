import axios from 'axios'
import { loginFailure, loginStart, loginSuccess, logout } from './userRedux'
import { createCart, addProduct } from './cartRedux'

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        axios.post("http://localhost:8800/auth/login", user, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        }).then(res => {
            console.log(res);
            dispatch(loginSuccess(res.data));
            // navigate('/')
        }).catch(err => { console.log(err) })

    } catch (err) {
        dispatch(loginFailure())
    }
}

export const Logout = async (dispatch) => {
    dispatch(logout())
}

export const addCart = async (dispatch, user) => {
    try {
        const cart = await axios.get(`http://localhost:8800/cart/find/${user}`, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        })
        if (!cart.data) {
            axios.post("http://localhost:8800/cart", { products: [], user: user }, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            }).then(res => {
                console.log(res);
                dispatch(createCart(user));
            }).catch(err => { console.log(err) })
        }
    } catch (err) {
        console.log(err)
    }
}

export const addCartProduct = async (dispatch, products, user, price,quantity) => {
    try {
        // const cart = await axios.get(`http://localhost:8800/cart/find/${user}`, {
        //     headers: { "Content-Type": "application/json" },
        //     withCredentials: true
        // })
        // console.log(cart)
        // axios.put(`http://localhost:8800/cart/${cart.data._id}`, { products: products }, {
        //     headers: { "Content-Type": "application/json" },
        //     withCredentials: true
        // }).then(res => {
        //     console.log(res);
            dispatch(addProduct({products:products,price:price,quantity:quantity}));
        // }).catch(err => { console.log(err) })

    } catch (err) {
        console.log(err)
    }
}

// export const removeCartProduct = async(dispatch,productId,user)=>{
//     try{
//         const cart = await axios.get(`http://localhost:8800/cart/find/${user}`, {
//             headers: { "Content-Type": "application/json" },
//             withCredentials: true
//         })
//         axios.put(`http://localhost:8800/cart/${cart.data._id}`, { products: products }, {
//             headers: { "Content-Type": "application/json" },
//             withCredentials: true
//         }).then(res => {
//             console.log(res);
//             dispatch(removeProduct(productId));
//         }).catch(err => { console.log(err) })

//     }catch(err){

//     }
// }