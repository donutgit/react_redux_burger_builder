import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};
export const purchaseBurgerSuccsess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};
export const purchaseBurgerFali = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};
export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const purchaseBurger = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json", orderData)
      .then(response => {
        console.log(response);
        dispatch(purchaseBurgerSuccsess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFali(error));
      });
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};
export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};
export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};
export const fetchOrders = () => {
  return dispatch => {
    axios
      .get("/orders.json")
      .then(response => {
        const fetchOrders = [];
        for (let key in response.data) {
          fetchOrders.push({
            ...response.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchOrders));
      })
      .catch(error => {
        dispatch(fetchOrdersFail(error));
      });
  };
};
