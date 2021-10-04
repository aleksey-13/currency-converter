import React from 'react'
import { useSelector } from 'react-redux'
import { FormControl, TextField } from '@material-ui/core'

const AmountDisplayField = () => {
    const amountToValue = useSelector((state) => state.currency.amountToValue)

    return (
        <FormControl size="small" margin="normal" fullWidth>
            <TextField
                label="Получаю"
                size="small"
                id="outlined-read-only-input"
                value={amountToValue}
                InputProps={{
                    readOnly: true
                }}
            />
        </FormControl>
    )
}

export default AmountDisplayField
