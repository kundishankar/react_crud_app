import {useContext, createContext} from "react";
import {UserContext, name} from "../useContext/Component1";

//const UserContext = createContext();
const Component4 = () => {
    const [user1, branch] = useContext(UserContext);
   console.log(useContext(UserContext));
    return(
        <>
            <h1>This is Component4, {user1}, {branch}, {name.fname} {name.lname}</h1>
            {/* <h2>Hello {user}</h2> */}
        </>
    )
}

export default Component4;