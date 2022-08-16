export const fetchUser = () => {
    const userInfo =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();
  
    return userInfo;
  };
  
export const fetchCart = () => {
      console.log(JSON.parse(localStorage.getItem("cartItems")));
    const cartInfo =
      localStorage.getItem("cartItems") !== "undefined"
        ? JSON.parse(localStorage.getItem("cartItems"))
        : localStorage.clear();
    console.log('inside fetch Cart '+cartInfo);
    return cartInfo ? cartInfo : [];
  };