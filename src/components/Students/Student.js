import { collection, getDocs } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { data } from './StudentBase'

const Student = () => {

    const [studentBase, setStudentBase] = useState([])

    const studentData = async () => {
        const studData = getDocs(collection(data, 'students'))
        setStudentBase((await studData).docs.map((el) => ({ ...el.data(), id: el.id })))
    }

    useEffect(() => {
        studentData()
    }, [])
    return (
        <Container>

            {studentBase?.map((props) => {
                return (
                    <Card key={props.id}>
                        <Holder >
                            <Name>Name: <span>{props.name}</span></Name>

                            <Stack>Stack: <span>{props.stack}</span></Stack>
                            <Quote>Quote: <span>{props.Quote}</span></Quote>
                            <Description>Description: <span>{props.description}</span></Description>
                        </Holder>
                    </Card>
                )
            })}


        </Container>
    )
}

export default Student

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
const Card = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: lightgrey; */
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    margin: 10px;
`
const Holder = styled.div`
    width: 95%;
`
const Name = styled.div`
    font-weight: 600;

    span{
        font-family: Darling in Paris;
    }
`
// const Image = styled.div`
//     font-weight: 600;

//     img{
//         width: 370px;
//         border-radius: 10px;
//     }
// `
const Stack = styled.div`
    font-weight: 600;

     span{
        font-family: Darling in Paris;
    }
`
const Quote = styled.div`
    font-weight: 600;

     span{
        font-family: Darling in Paris;
    }
`
const Description = styled.div`
    font-weight: 600;
`