import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({ cartList, removeFromCart, removeAllFromCart, setOpenCart }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
               <h2>Carrinho de compras</h2>
               <button onClick={() => setOpenCart(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.modalContent}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeFromCart={removeFromCart} />
                  ))}
               </ul>
            </div>
            <div className={styles.modalTotal}>
               <div>
                  <span>Total</span>
                  <span className={styles.price}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button onClick={removeAllFromCart}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
