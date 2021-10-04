import React from 'react'
import { Container } from '@material-ui/core'
import CalcTitle from './CalcTitle'
import CalcContainer from './CalcContainer'

const App = () => {
    return (
        <Container fixed maxWidth="md" style={{ padding: '30px 10px' }}>
            <CalcTitle />
            <CalcContainer />
        </Container>
    )
}

export default App
