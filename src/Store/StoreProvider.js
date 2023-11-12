import { Provider } from "react-redux";
import Store from "./Store";




const StoreProvider = (props) =>{

    return <Provider store = {Store}>{props.children}</Provider>
}

export default StoreProvider;