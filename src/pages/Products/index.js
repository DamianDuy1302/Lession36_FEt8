import { useEffect, useState } from "react"
import Product from "./Product";
import "./style.css"

const Products = () =>{
    const [productsList, setProductsList] = useState();
    useEffect(()=>{
        const fetchy = async()=>{
            const response = await fetch("http://localhost:3002/products");
            const res = await response.json();
            if(res){
                setProductsList(res)
            }
        }
        fetchy()
    }, [productsList])
    return(
        <>
            {productsList && (
                <div className="productsList">
                    {productsList.map(item => (
                        <Product key={item.id} item={item}/>
                    ))}
                </div>
            )}
        </>

    )
}
export default Products