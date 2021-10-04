import React from 'react'
import { useDispatch } from 'react-redux'
import { IconButton } from '@material-ui/core'
import { SwapHoriz } from '@material-ui/icons'
import { swapCurrencies } from '../store/actions'

const SwapBtn = () => {
    const dispatch = useDispatch()

    return (
        <IconButton variant="text" onClick={() => dispatch(swapCurrencies())}>
            <SwapHoriz
                className="swap-btn-icon"
                aria-label="swap currencies"
                fontSize="large"
            />
        </IconButton>
    )
}

export default SwapBtn
