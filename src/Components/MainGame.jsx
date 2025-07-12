import NumberSelect from "./NumberSelect"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from 'styled-components'
import { useState } from "react"
import { Button, OutlineBtn } from "../Button/Button"
import Rules from "./Rules"

const MainGame = ({onBack}) => {

    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)
    const [error, setError] = useState("")
    const [showRules, setShowRules] = useState(false)

    const generateRandomNumber = (min, max) => {
        return (Math.floor(Math.random() * (max - min) + min))
    };

    const ruleBtn = () => {
        setShowRules((prev) => !prev)
    }

    const resetBtn = () => {
        setScore(0)
        setError("")
    }



    const rollMyDice = () => {
        if (!selectedNumber) {
            setError("Please select a number!!")
            return
        }

        const randomNumber = generateRandomNumber(1, 7)
        setCurrentDice((prev) => randomNumber)


        if (selectedNumber == randomNumber) {
            setScore((prev) => prev + randomNumber)
        }
        else {
            setScore((prev) => prev - 2)
        }

        setSelectedNumber(undefined)

    };


    return (
        <>
            <MainSection>
                <div className="topSection">
                    <TotalScore score={score} onBack={onBack}/>
                    <NumberSelect
                        error={error}
                        setError={setError}
                        selectedNumber={selectedNumber}
                        setSelectedNumber={setSelectedNumber} />
                </div>
                <RollDice currentDice={currentDice} rollMyDice={rollMyDice} />
                <div className="btns">
                    <Button onClick={resetBtn}>
                        Reset
                    </Button>
                    <OutlineBtn onClick={ruleBtn}>
                        {showRules ? "Hide" : "Show"} Rules
                    </OutlineBtn>
                </div>
                {showRules && <Rules/>}
            </MainSection>
        </>
    )
}

export default MainGame

const MainSection = styled.div`
max-width: 1700px;
padding-top: 30px;
padding-inline: 10px;
margin: 0 auto !important;
   .topSection{
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    .btns{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`