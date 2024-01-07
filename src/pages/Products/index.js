import { useEffect, useState } from "react"
import Product from "./Product";
import "./style.css"
import ReactPaginate from 'react-paginate';

const Products = () => {
    // const [totalProducts, setTotalProducts] = useState();
    // const [currentPage, setCurrentPage] = useState(1);
    const [productsList, setProductsList] = useState();
    const [pageCount, setPageCount] = useState()
    const itemPerPage = 5
    
    useEffect(() => {
        const fetchy = async () => {
            const response = await fetch("http://localhost:3002/products");
            const res = await response.json();
            if (res) {
                fetchy1(1)
                console.log(res)
                // setTotalProducts(res.length)
                
                setPageCount(parseInt(Math.ceil(res.length/itemPerPage)))
            }   
        }
        fetchy()
    }, [])

    const fetchy1 = async (count) => {
        const response = await fetch(`http://localhost:3002/products?&_page=${count}&_limit=${itemPerPage}`);
        const res = await response.json();
        if (res) {
            setProductsList(res)
            console.log(res)
        }
    }
    

    const handlePageClick = (e)=>{
        fetchy1(e.selected+1)
        // console.log(e.selected+1)
    }
    return (
        <>

            {productsList && (
                <div className="productsList">
                    {productsList.map(item => (
                        <Product key={item.id} item={item} />
                    ))}
                </div>
            )}

            
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />


        </>

    )
}
export default Products