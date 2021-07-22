import MainLayouts from "../layouts/MainLayouts";
import HelloWorld from "../components/HelloWorld";

const routes = [
    {
        path: '/', component: MainLayouts,
        children: [
            {
                path: '', component: HelloWorld
            }
        ]
    },

]

export default routes