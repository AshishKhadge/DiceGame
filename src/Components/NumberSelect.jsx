import styled from 'styled-components'

const NumberSelect = ({error, setError, selectedNumber,setSelectedNumber}) => {

    const arrNum = [1, 2, 3, 4, 5, 6]

    const numberSelectorHandler =(value) =>{
        setSelectedNumber(value)
        setError("")
    }
    return (
        <>
            <Set>
                <p className='error'>{error}</p>
                <div className="flex">
                {
                    arrNum.map((value, i) =>
                        <Box
                            isSelected={value == selectedNumber}
                            key={i} 
                            onClick={() => numberSelectorHandler(value)}>
                            {value}
                        </Box>
                    )
                }
                </div>
                <p>select number</p>
            </Set>
        </>
    )
}

export default NumberSelect

const Set = styled.div`
display: flex;
flex-direction: column;
align-items: end;

   .flex{ 
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
}

    p{
        font-size: 20px;
        text-transform: uppercase;
        opacity: 0.8;
        font-weight: 500;
        padding-right: 10px;
    }

    .error{
        color: red;
        font-size: 12px;
        margin-bottom: 5px;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1.5px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 50%;
    transition: all ease 0.5s;
    background-color:${(props) => props.isSelected ? "black" : "white"} ;
    color:${(props) => props.isSelected ? "white" : "black"} ;

    &:hover{
            transform: scale(1.06);
            transition: all ease 0.5s;
    }
`