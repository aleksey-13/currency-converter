import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAmountFromValue } from '../store/actions'

import { FormControl, TextField } from '@material-ui/core'

const AmountInputField = () => {
    const dispatch = useDispatch()
    const amountFromValue = useSelector(
        (state) => state.currency.amountFromValue
    )

    const handleChange = (e) => {
        const value = e.target.value

        dispatch(setAmountFromValue(value))
    }

    return (
        <FormControl size="small" margin="normal" fullWidth>
            <TextField
                label="Меняю"
                value={amountFromValue}
                size="small"
                id="outlined-adornment-amount"
                onChange={handleChange}
            />
        </FormControl>
    )
}

export default AmountInputField
