import styled from 'styled-components'
import { IoPlayBack } from "react-icons/io5";

const TotalScore = ({score, onBack}) => {
    return (
        <>
            <ScoreContainer>
                <div className="btn">
                    <IoPlayBack onClick={onBack} />
                </div>
                <div className="score">
                <h1>{score}</h1>
                <p>total score</p>
                </div>
            </ScoreContainer>
        </>
    )
}

export default TotalScore

const ScoreContainer = styled.div`
display: flex;
max-width: 300px;
text-align: center;
.btn{
    text-align: center;
    font-size: 30px;
    display: flex;
    align-items: center;
    margin-inline:30px ;
    cursor: pointer;
}
.score{
    margin-inline: 30px;
}
   h1{
    font-size: 90px;
    line-height: 100px;
   } 
   p{
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
   }
`