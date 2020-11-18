import * as types from '../actions/types';

const initialState = {
  loadingCart: false,
  dataCart: [],
  /*[{
    id: 1,
    name: 'asas',
    image: '121212',
    price: 121223,
    qty: 1
  }]*/
  errorCart: null,
  totalMoney: 0
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_ADD_CART:
      return {...state, loadingCart: action.loading}
    case types.STOP_ADD_CART:
      return {...state, loadingCart: action.loading}
    case types.ADD_CART_SUCCESS:
      const infoPd = action.data;
      // thong tin chi tiet cua san phan lay api de them vao cart
      // can kiem tra xem gio hang da co san pham nao chua ?
      // neu chua thi them moi san pham luon
      if(state.dataCart.length > 0){
        infoPd.qty = 1; // them qty vao - mac dinh la 1
        return {
          ...state,
          dataCart:[...state.dataCart, infoPd],
          errorCart: null,
          totalMoney: parseInt(state.totalMoney) + parseInt(infoPd.price)
        }
      } else {
        // da ton tai it nhat 1 san pham trong gio hang
        // kiem tra san pham dang ton tai do co dung la san pham dang them vao cart khong ?
        // neu dung chi cap lai so luong
        // sai them moi nhu ban dau
        const idPd = action.data.id;
        const searchPd = state.dataCart.filter(item => item.id === idPd)[0];
        if(searchPd){
          searchPd.qty += 1;
          return {
            ...state,
            errorCart: null,
            totalMoney: parseInt(state.totalMoney) + parseInt(infoPd.price)
          }
        } else {
          infoPd.qty = 1; // them qty vao - mac dinh la 1
          return {
            ...state,
            dataCart:[...state.dataCart, infoPd],
            errorCart: null,
            totalMoney: parseInt(state.totalMoney) + parseInt(infoPd.price)
          }
        }
      }
    case types.ADD_CART_FAILURE:
      return {
        ...state,
        errorCart: action.error,
        dataCart: [],
        totalMoney: 0
      }
    default:
      return state;
  }
}