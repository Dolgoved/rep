//import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../form/form";
import { expName, showName } from "../redux/profile/action";
import { selectShowName, selectUserName } from "../redux/profile/selectors";

export const Profile=()=>{    
    const storeData = useSelector(selectShowName); 
    const userName = useSelector(selectUserName); 

    const dispatch = useDispatch(); // хук отправляет данные

    const handleChange = () => {
        dispatch(showName);
      };
    

    const handleSubmit = (newName)=>{
      dispatch(expName(newName))
    };

    return (
        <>
      <h3>THIS IS PROFILE</h3>
      <input type="checkbox" checked={storeData} onChange={handleChange} />
      {storeData && <span>{userName}</span>}
      <Form onSubmit={handleSubmit} />
    </>
        
    )
}