import App from "./app";
import { Provider } from "react-redux";
import {persistor, store} from "./store/store";
import { PersistGate } from 'redux-persist/integration/react';


const Main=()=>{
    return(
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
        
    )
}
export default Main;