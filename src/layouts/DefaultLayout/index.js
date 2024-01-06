import { NavLink, Outlet } from "react-router-dom"
import Pagination from "../../components/Paginations"
const DefaultLayout = () => {
    return (
        <>
            <header>
                <div className="menu__logos">
                    <NavLink to="/"><span className="menu__logo">Logo</span></NavLink>
                </div>
                <div className="menu__navs">
                    <div className="menu__nav">
                        <NavLink to="/">Home</NavLink>
                    </div>
                    <div className="menu__nav">
                        <NavLink to="/products">Products</NavLink>
                    </div>
                    <div className="menu__nav">
                        <NavLink to="/cart">Cart</NavLink>
                    </div>
                </div>
            </header>

            <main>

                <Outlet />
                <Pagination/>
            </main>


            <footer>
                <div className="footer__copyright">
                    Copyright by DamianDuy1302
                </div>
            </footer>
        </>
    )
}

export default DefaultLayout