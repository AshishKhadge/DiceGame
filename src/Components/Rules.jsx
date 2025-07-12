import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play Guess The Dice Game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>After click on dice if selected number is equal to dice number you will get same point as dice</p>
            <p>If you get wrong guess then 2 point will be dedcuted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    background-color: #FBF1F1;
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
    border-radius: 10px;

    h2{
        margin-bottom: 10px;
    }
    p{
        font-size: 16px;
        line-height: 25px;
    }
`