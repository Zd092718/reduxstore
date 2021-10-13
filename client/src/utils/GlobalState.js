import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";
import { Provider } from "react-redux";
import store from "./store";
const StoreContext = createContext();

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });

  return <Provider store={store} value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
