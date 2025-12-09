import { useState } from 'react'
import styled from 'styled-components'

const StyledComponent = () => {
    const [active, setActive] = useState(true) 
  return (
    <div>
        <Button act={active} onClick={()=>setActive(!active)}>First Btn</Button>
        <Heading>Hello World</Heading>
        <Btn2 primary>Primary</Btn2>
        <Btn2 secondary>Secondary</Btn2>
        <Btn2 tertiary>Tertiary</Btn2>
    </div>
  )
}

export default StyledComponent

const Vaishnavi = styled.button`
    background-color: ${(props)=>{
        if(props.primary) return 'blue'
        if(props.secondary) return 'gray'
        if(props.tertiary) return 'yellow'
        }};
    color: white;
`

const Btn2 = styled(Vaishnavi)`
    border: 1px solid black;
    border-radius: 10px;
    min-width: 200px;
    padding: 10px 20px;
    transition: 1s all;

        &:hover{
            background-color: white;
            color: black;
            border: 2px solid black;
            transition: 1s all;
        }
`

const Heading = styled.h1`
    font-size: 100px;    margin-bottom: 10px;
`

const Button = styled.button`
    background-color: ${props => props.act ? 'blue' : 'green'};
    padding: 10px 20px
`