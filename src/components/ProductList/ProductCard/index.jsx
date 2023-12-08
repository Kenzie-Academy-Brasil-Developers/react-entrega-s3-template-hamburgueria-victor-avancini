import styles from "./style.module.scss";

export const ProductCard = ({ product, addToCart }) => {
    return (
        <li>
            <div className={styles.productCardHeader}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.productCardMain}>
                <h3>{product.name}</h3>
                <span className={styles.productCategory}>{product.category}</span>
                <span className={styles.productPrice}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button onClick={() => addToCart(product)}>Adicionar</button>
            </div>
        </li>
    )
}