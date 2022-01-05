import App from "./app";
import { useState } from "react";
import { ProfileContext } from "./utils/context/ProfileContext";
import { Provider } from "react-redux";
import {store} from "./store/store";



const Main=()=>{
    const [name,setName]=useState('default');
    return(
        <Provider store={store}>
            <ProfileContext.Provider value={{name: name, setName}}>
                <App/>
            </ProfileContext.Provider>
        </Provider>
        
    )
}
export default Main;