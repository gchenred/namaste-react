import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "./cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItems = () => {
    console.log("Remove Clicked");
    dispatch(removeItem());
  };
  return (
    <div className="p-4 text-center mx-auto my-4 w-6/12  bg-gray-50 shadow-lg">
      <h1 className="font-bold text-2xl">Cart Items</h1>
      <button
        className="m-2 p-2 text-center font-bold text-xl bg-red-200 rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems ? (
        <ItemList
          items={cartItems}
          inCart={true}
          handleRemoveItems={handleRemoveItems}
        />
      ) : (
        <h2>Your cart is empty...Please add Items.</h2>
      )}
    </div>
  );
};
export default Cart;
