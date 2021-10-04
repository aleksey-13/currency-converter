import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'

import CurrencyList from './CurrencyList'
import * as actions from '../store/actions'
import { fetchCurrency } from '../store/asyncActions'
import SwapBtn from './SwapBtn'
import AmountInputField from './AmountInputField'
import AmountDisplayField from './AmountDisplayField'
import { isEmptyArr, isNan } from '../utils'

const CalcContainer = () => {
    const dispatch = useDispatch()

    const amountFromValue = useSelector(
        (state) => state.currency.amountFromValue
    )

    const currencyFrom = useSelector((state) => state.currency.currencyFrom)
    const currencyTo = useSelector((state) => state.currency.currencyTo)
    const currencyList = useSelector((state) => state.currency.currencyList)
    const isFetchingData = useSelector((state) => state.currency.isFetchingData)

    useEffect(() => {
        dispatch(fetchCurrency(currencyFrom))
    }, [])

    useEffect(() => {
        printResult()

        if (!isFetchingData) {
            dispatch(fetchCurrency(currencyFrom))
        }
    }, [currencyFrom, currencyTo, currencyList])

    useEffect(() => {
        printResult()
    }, [amountFromValue])

    const calculateResult = (amount) => {
        if (!isEmptyArr(currencyList)) {
            return 0
        }

        const { rate } = currencyList.find((c) => c.ccy === currencyTo)
        const result = (rate * Math.abs(+amount)).toFixed(2)

        return isNan(result)
    }

    const printResult = () => {
        const result = calculateResult(amountFromValue)

        dispatch(actions.setAmountToValue(result))
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item sm={3} xs={6}>
                    <AmountInputField />
                </Grid>

                <Grid item sm={2} xs={6}>
                    <CurrencyList
                        value={currencyFrom}
                        handleChange={(e) =>
                            dispatch(actions.setCurrencyFrom(e.target.value))
                        }
                    />
                </Grid>

                <Grid
                    item
                    sm={2}
                    xs={12}
                    container
                    alignItems="center"
                    justifyContent="center"
                >
                    <SwapBtn />
                </Grid>

                <Grid item sm={3} xs={6}>
                    <AmountDisplayField />
                </Grid>

                <Grid item sm={2} xs={6}>
                    <CurrencyList
                        value={currencyTo}
                        handleChange={(e) =>
                            dispatch(actions.setCurrencyTo(e.target.value))
                        }
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default CalcContainer
