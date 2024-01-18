import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ cartList, setOpenCart }) => {
   const [value, setValue] = useState("");

   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setOpenCart(true)} className={styles.shoppingCart}>
               <MdShoppingCart size={21} />
               <span>{cartList.length}</span>
            </button>
         </div>
      </header>
   );
};
