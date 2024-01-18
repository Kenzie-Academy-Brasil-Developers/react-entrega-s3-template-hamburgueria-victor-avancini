import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const HomePage = () => {
   const saveProducts = JSON.parse(localStorage.getItem("@CARTLIST"));
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [loading, setLoading] = useState(true);
   const [openCart, setOpenCart] = useState(false);

   useEffect(() => {
      if(saveProducts) {
         setCartList(saveProducts);
      }
   },[]);

   useEffect(() => {
      const getProducts = async () => {
         try {
            setLoading(true);
            const { data } = await api.get("products");
            setProductList(data);
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      };
      getProducts();
   }, []);

   useEffect(() => {
      localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
   }, [cartList]);

   const productInCart = (product) => {
      return cartList.some((item) => item.id === product.id);
   }

   const addToCart = (product) => {
      if (productInCart(product)) {
         toast.warning(`${product.name} já está no carrinho!`)
      } else {
         setCartList((prevCartList) => [...prevCartList, product]);
         toast.success(`${product.name} foi adicionado ao carrinho!`)
      }
   };

   const removeFromCart = (product) => {
      const itemIndex = cartList.findIndex((item) => item.id === product.id);

      if (itemIndex !== -1) {
         const updatedCart = [...cartList];
         updatedCart.splice(itemIndex, 1);
         setCartList(updatedCart);
      }
   };

   const removeAllFromCart = () => {
      setCartList([]);
   }

   const calculateTotal = () => {
      return cartList.reduce((total, item) => total + item.price, 0);
   }

   return (
      <>
         <Header cartList={cartList} setOpenCart={setOpenCart} />
         <main>
            <ProductList productList={productList} addToCart={addToCart} />
            {openCart ? <CartModal cartList={cartList} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart} total={calculateTotal()} setOpenCart={setOpenCart} /> : null}
         </main>
      </>
   );
};
