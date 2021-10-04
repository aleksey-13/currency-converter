import {
    IS_FETCHING_DATA,
    SET_AMOUNT_FROM_VALUE,
    SET_AMOUNT_TO_VALUE,
    SET_CURRENCY_FROM,
    SET_CURRENCY_LIST,
    SET_CURRENCY_TO,
    SWAP_CURRENCIES
} from './types'

export const setAmountFromValue = (value) => ({
    type: SET_AMOUNT_FROM_VALUE,
    payload: value
})

export const setAmountToValue = (value) => ({
    type: SET_AMOUNT_TO_VALUE,
    payload: value
})

export const setCurrencyFrom = (currency) => ({
    type: SET_CURRENCY_FROM,
    payload: currency
})

export const setCurrencyTo = (currency) => ({
    type: SET_CURRENCY_TO,
    payload: currency
})

export const setCurrencyList = (data) => ({
    type: SET_CURRENCY_LIST,
    payload: data
})

export const swapCurrencies = () => ({
    type: SWAP_CURRENCIES
})

export const isFetchingData = (bool) => ({
    type: IS_FETCHING_DATA,
    payload: bool
})
