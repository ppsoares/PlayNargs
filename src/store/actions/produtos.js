import { PROD_CHANGE, SET_FILTER, INSERT_PRODUCT, INITIAL_STATE, CHANGE_STATE_PRODUCT } from './actionsTypes';

export function alteraProduto(novoProduto) {
    return {
        type: PROD_CHANGE,
        payload: novoProduto
    }
}

export function setFilter(newFilter) {
    return {
        type: SET_FILTER,
        payload: newFilter
    }
}

export function insertProduct(newProduct) {
    return {
        type: INSERT_PRODUCT,
        payload: newProduct
    }
}

export function initialState(newProduct) {
    return {
        type: INITIAL_STATE,
        payload: newProduct
    }
}

export function changeProductState(newStateProduct, product) {
    return {
        type: CHANGE_STATE_PRODUCT,
        payload: newStateProduct,
        prodPayLoad: product
    }
}
