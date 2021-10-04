import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const CalcTitle = () => {
    return (
        <Grid container spacing={2} marginBottom="20px">
            <Grid item xs={12}>
                <Typography
                    variant="h4"
                    align="center"
                    style={{ color: '#5fbaa7', textTransform: 'uppercase' }}
                >
                    Конвертер валют
                </Typography>
            </Grid>
        </Grid>
    )
}

export default CalcTitle
