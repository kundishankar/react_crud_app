import Component2 from "./Component2";
import {useState, createContext} from "react";
import Component4 from "./Component4";

export const UserContext = createContext();
const Component1 = () => {
    const [user, setUser] = useState("Jericho");
    const [branch, setBranch] = useState(["CSE","ETNT"]);
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
    return(
        <>
            <h1>This is Component1, {car.model}</h1>
            <UserContext.Provider value={[user, branch]}>
                <Component2/>
            </UserContext.Provider>
            

        </>
    )
}

const details = {
    fname:"Virat",
    lname: "Singh"
}
export const name = details;//exporting default means need to extract with {name} curly braces while importing
export default Component1;//exporting default means no need of extracting with {} curly braces while importing