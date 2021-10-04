import React from 'react'
import { useSelector } from 'react-redux'
import { FormControl, MenuItem, Select } from '@material-ui/core'

const CurrencyList = ({ value, handleChange }) => {
    const currencyList = useSelector((state) => state.currency.currencyList)

    return (
        <FormControl fullWidth margin="normal" size="small">
            <Select
                value={value}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                {currencyList.map((c) => (
                    <MenuItem key={c.id} value={c.ccy}>
                        {c.ccy}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default CurrencyList
