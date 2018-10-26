import { createStore } from  'redux';

const reducer = (state, action) => {
    if(action.type === "ADD_TO_ORDER"){
        return {
            ...state,
            order: state.order.concat(action.product)
            }
    } else if(action.type === "REMOVE_FROM_ORDER"){
        return {
            ...state,
            order: state.order.filter(product => product.id !== action.product.id)
        }
    }
return state;
};

export default createStore(reducer, {order: []});