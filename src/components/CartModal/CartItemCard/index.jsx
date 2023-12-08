import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeFromCart }) => {
   return (
      <li className={styles.cartItemCard} key={product.id}>
         <div>
            <img src={product.img} alt={product.name} />
            <div className={styles.productDescription}>
               <h3>{product.name}</h3>
               <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
         </div>
         <button onClick={() => removeFromCart(product)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
