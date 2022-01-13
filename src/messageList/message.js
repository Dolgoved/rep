import { useSelector } from "react-redux";
import { selectUserName } from "../redux/profile/selectors";
import { AUTHORS } from "../utils/constants";

export const Message = ({author, text}) => {
    
    const userName = useSelector(selectUserName)
    
    return(
        <div className={author === AUTHORS.HUMAN ? "user" : "bot"}>
            {author===AUTHORS.HUMAN ? userName: author}: {text}
        </div>
      )
}