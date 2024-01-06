
import { useDispatch } from "react-redux";
import "./style.css"
import { updateproductquantity } from "../../../actions/cart";
const CartProduct = (props) => {
    const { item } = props
    const oldprice = item.price;
    const disc = item.discountPercentage;
    const dispatchCartProduct = useDispatch();
    var newprice = oldprice
    if (disc != 0) {
        newprice = oldprice - oldprice * disc / 100
        newprice = Math.round(newprice * 100) / 100
    }
    const handleUp = ()=>{
        dispatchCartProduct(updateproductquantity(item.id, 1))
    }
    const handleDown = ()=>{
        dispatchCartProduct(updateproductquantity(item.id, -1))
    }
    const handleDelete = ()=>{
        dispatchCartProduct(updateproductquantity(item.id, 0))
    }
    return (
        <>
            <div className="cartProduct">
                <div className="cartProduct__detail">
                    <div className="cartProduct__thumbnail">
                        <img src={item.thumbnail}></img>
                    </div>
                    <div className="cartProduct__content">
                        <div className="cartProduct__title">{item.title}</div>
                        <div className="cartProduct__prices">
                            {(newprice != oldprice) ? <div className="cartProduct__newprice">{newprice}</div> : <></>}

                            <div className="cartProduct__oldprice">{item.price}</div>

                        </div>
                    </div>
                </div>

                <div className="cartProduct__buttons">
                    <button onClick={handleDown} className="cartProduct__button">-</button>
                    <div className="cartProduct__quantity">{item.quantity}</div>
                    <button onClick={handleUp} className="cartProduct__button">+</button>
                    <button onClick={handleDelete} className="cartProduct__delete">Delete</button>
                </div>

            </div>

            
        </>

    )
}
export default CartProduct