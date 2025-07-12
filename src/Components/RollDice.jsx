import styled from "styled-components"

const RollDice = ({currentDice, rollMyDice}) => {


  return (
    <>
        <DiceContainer>
            <div className="dice" onClick={rollMyDice}>
                <img src={`/images/Dice/dice_${currentDice}.png`} alt="Dice 1" />
            </div>
            <p>Click on the Dice to Roll</p>
        </DiceContainer>
    </>
  )
}

export default RollDice

const DiceContainer = styled.div`

img{
    transition: all ease 0.5s;
    cursor: pointer;
}
img:hover{
    transform: scale(1.05);
    transition: all ease 0.5s;
}
p{
    font-size: 17px;
    opacity: 0.8;
    text-transform: uppercase;
    font-weight: 300;
}
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
`