import MainLayouts from "../layouts/MainLayouts";
import Products from "../components/Products";

const routes = [
    {
        path: '/', component: MainLayouts,
        children: [
            {
                path: '', component: Products
            }
        ]
    },

]

export default routes