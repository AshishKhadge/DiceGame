import styled from 'styled-components'
import { Button } from '../Button/Button'

const StartGame = (props) => {

    const {toggle} = props
    
    return (
        <>
            <Container>
                <div className='imgClass'>
                    <img src="/images/startdices.png" />
                </div>
                <div className='content'>
                    <h1>dice game</h1>
                    <Button onClick={toggle}>Play Now</Button>
                </div>
            </Container>
        </>
    )
}

export default StartGame

const Container = styled.div`
    max-width: 1182px;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

.content{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 20px;
}

.content{
    h1{
        font-size:96px;
        white-space:nowrap;
        text-transform: uppercase;
    }
}

`
