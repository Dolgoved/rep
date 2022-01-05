import { useContext } from "react";
import { AUTHORS } from "../utils/constants";
import { ProfileContext } from "../utils/context/ProfileContext";

export const Message = ({author, text}) => {
    const {name} = useContext(ProfileContext);
    
    return(
        <div className={author === AUTHORS.HUMAN ? "user" : "bot"}>
            {author===AUTHORS.HUMAN ? name: author}: {text}
        </div>
      )
}