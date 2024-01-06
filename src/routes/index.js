import DefaultLayout from "../layouts/DefaultLayout";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products";
export const routes = [
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
           
            {
                path: "products",
                element: <Products/>
            },
            {
                path: "cart",
                element: <Cart/>
            }
        ]
    },

]

