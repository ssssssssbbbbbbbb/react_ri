import Loadable from "react-loadable";
import Loading from "components/loading"

export const Home=Loadable({
    loader:_=>import("./home"),
    loading:Loading
})

export const Mess=Loadable({
    loader:_=>import("./mess"),
    loading:Loading
})
export const Center=Loadable({
    loader:_=>import("./Center"),
    loading:Loading
})
export const Shopping=Loadable({
    loader:_=>import("./shopping"),
    loading:Loading
})
export const Mine=Loadable({
    loader:_=>import("./mine"),
    loading:Loading
})
export const Login=Loadable({
    loader:_=>import("./login"),
    loading:Loading
})