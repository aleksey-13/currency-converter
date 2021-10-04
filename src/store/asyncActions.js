import ExchangeRateApi from '../services/exchangeRateApi'
import { isFetchingData, setCurrencyList } from './actions'

export function fetchCurrency(defaultCurrency) {
    return async (dispatch) => {
        dispatch(isFetchingData(true))

        const currencyData = new ExchangeRateApi(defaultCurrency)
        const currencyList = await currencyData.getAllCurrencies()

        dispatch(setCurrencyList(currencyList))
        dispatch(isFetchingData(false))
    }
}
