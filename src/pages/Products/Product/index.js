import { useDispatch } from "react-redux";
import { addtocart } from "../../../actions/cart";
import Swal from 'sweetalert2'

const Product = (props) => {
    const {item} = props
    const oldprice = item.price;
    const disc = item.discountPercentage;
    var newprice = oldprice
    if(disc!=0){
        newprice = oldprice - oldprice*disc/100
        newprice = Math.round(newprice*100)/100
    }
    const dispatchProduct = useDispatch();
    const handleAddToCart = () =>{

        dispatchProduct(addtocart(item.id))
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Add to cart successfully!",
            showConfirmButton: false,
            timer: 1500
          });
    }
    return (
        <>
            <div className="product">
                <div className="product__thumbnail">
                    <img src={item.thumbnail}></img>
                </div>
                <div className="product__title">{item.title}</div>
                <div className="product__prices">
                    {(newprice!=oldprice) ? <div className="product__newprice">{newprice}</div> : <></>}
                    
                    <div className="product__oldprice">{item.price}</div>

                </div>
                <div className="product__discountPercentage">-{item.discountPercentage}%</div>
                <button onClick={handleAddToCart} className="product__addtocart">Add to cart</button>
            
            </div>
        </>
    )
}
export default Product