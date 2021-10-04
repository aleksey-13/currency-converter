export default class ExchangeRateApi {
    constructor(defaultCurrency) {
        this.defaultCurrency = defaultCurrency
    }

    static _apiBase = 'https://v6.exchangerate-api.com/v6/'
    static _key = '36ccb1313d681888f3479084'

    getResource = async () => {
        const res = await fetch(
            `${ExchangeRateApi._apiBase}${ExchangeRateApi._key}/latest/${this.defaultCurrency}`
        )

        if (!res.ok) {
            throw new Error(`Could not fetch, received ${res.status}`)
        }

        return await res.json()
    }

    getAllCurrencies = async () => {
        const res = await this.getResource()
        return ExchangeRateApi._transformCurrency(res.conversion_rates)
    }

    static _transformCurrency = (data) => {
        return Object.keys(data).map((key) => ({
            id: Date.now() + Math.random() * 100000,
            ccy: key,
            rate: data[key]
        }))
    }
}
