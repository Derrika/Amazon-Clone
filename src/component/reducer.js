export const initialState = {
  basket: [],
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_ITEM_FROM_BASKET":
      let newBasket = [...state.basket, action.item];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't removed product(id: ${action.id}) is not in the basket.`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
      
    case "SET_USER":
      return {
          ...state,
          user: action.user,
      }

    default:
      return state;
  }
};

export default reducer;
