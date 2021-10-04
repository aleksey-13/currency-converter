import {
    IS_FETCHING_DATA,
    SET_AMOUNT_FROM_VALUE,
    SET_AMOUNT_TO_VALUE,
    SET_CURRENCY_FROM,
    SET_CURRENCY_LIST,
    SET_CURRENCY_TO,
    SWAP_CURRENCIES
} from './types'

const defaultState = {
    amountFromValue: 1,
    amountToValue: 0,
    currencyFrom: 'USD',
    currencyTo: 'UAH',
    currencyList: [],
    isFetchingData: false
}

export default function currencyReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_AMOUNT_FROM_VALUE:
            return {
                ...state,
                amountFromValue: action.payload,
                isFetchingData: false
            }
        case SET_AMOUNT_TO_VALUE:
            return {
                ...state,
                amountToValue: action.payload
            }
        case SET_CURRENCY_FROM:
            return {
                ...state,
                currencyFrom: action.payload
            }
        case SET_CURRENCY_TO:
            return {
                ...state,
                currencyTo: action.payload
            }
        case SET_CURRENCY_LIST:
            return {
                ...state,
                currencyList: action.payload
            }
        case SWAP_CURRENCIES:
            return {
                ...state,
                currencyFrom: state.currencyTo,
                currencyTo: state.currencyFrom
            }
        case IS_FETCHING_DATA:
            return {
                ...state,
                isFetchingData: action.payload
            }
        default:
            return state
    }
}
