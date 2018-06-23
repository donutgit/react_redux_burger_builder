import * as actionTypes from "../actions/actionTypes";

// set initial state

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.5,
  cheese: 1,
  meat: 1
};

// create ruduser

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients, // берем копию ингридиентов
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1 // и перезаписываем
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients, // берем копию ингридиентов
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1 // и перезаписываем
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: initialState.totalPrice,
        error: false
      };
    case actionTypes.FETCH_INGREDIENTS_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
