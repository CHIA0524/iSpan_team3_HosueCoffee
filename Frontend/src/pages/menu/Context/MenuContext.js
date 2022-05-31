import {createContext,useState}from "react";
import react from "react";








// const MenuContext = () => {
// const [asd,setasd] = useState()

const MenuValue = {
    drinkCounter:'4',
    drinkId:'2',
}


const MenuContext =createContext(MenuValue)
// }

export default MenuContext