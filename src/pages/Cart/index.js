import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./style.css"
import CartProduct from "../Products/CartProduct"
import { clearcart } from "../../actions/cart"
const Cart = () => {
    const carts = useSelector(state => state.cartReducer)
    const dispatchCart = useDispatch();
    const [cartList, setCartList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalProduct, setTotalProduct] = useState(0)
    useEffect(() => {
        const fetchy = async () => {
            const dataFinal = [];
            let total = 0;
            let totalProd = 0;
            for (const item of carts) {
                const product = await fetch("http://localhost:3002/products/" + `${item.id}`);
                const res = await product.json()
                dataFinal.push({
                    ...res,
                    quantity: item.quantity,
                })
                const oldprice = (res.price);
                const disc = (res.discountPercentage);


                let newprice = oldprice - oldprice * disc / 100
                newprice = Math.round(newprice * 100) / 100
                total+=newprice*item.quantity
                totalProd +=1;

            }
            setCartList(dataFinal)
            setTotalPrice(Math.round(total * 100) / 100)
            setTotalProduct(totalProd)
        }
        fetchy()
    }, [carts])

    const handleClear = () =>{
        setCartList([])
        setTotalPrice(0)
        dispatchCart(clearcart())
    }

    return (
        <>
            <div className="cart__header">
                <div className="cart__title">Cart({totalProduct})</div>
                <button onClick={handleClear}className="cart__clearButton">Clear</button>
            </div>
            {cartList && (
                <div className="cartList">
                    {cartList.map(item => (
                        <CartProduct key={item.id} item={item} />
                    ))}
                </div>
            )}
            <div className="cart__pay">
                <div className="cart__total">Total: <span className="cart__totalPrice">{totalPrice}</span></div>

            </div>
        </>

    )
}
export default Cart