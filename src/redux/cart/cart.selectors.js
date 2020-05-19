import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuanity, cartItem) => accumalatedQuanity + cartItem.quantity,
      0
    )
);

// breaks up slices of state to use in different components for memoization
