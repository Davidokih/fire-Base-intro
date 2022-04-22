import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../Base/Base'

const Card = () => {

    const [baseData, setBaseData] = useState([])

    const getData = async () => {
        const data = getDocs(collection(db, 'myFirstBase'))
        setBaseData((await data).docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    console.log(baseData)

    useEffect(() => {
        getData()
    }, [])
    return (
        <Container>
            {baseData?.map((props) => {
                return (
                    <Wrapper key={props.id}>
                        <Name><strong>Name:</strong>{props.name}</Name>
                        <Age><strong>age:</strong>{props.age}</Age>
                        <Subject><strong>Subject:</strong>{props.subject}</Subject>
                        <Description><strong>Description:</strong>{props.description}</Description>
                    </Wrapper>
                )
            })}
        </Container>
    )
}

export default Card;

const Container = styled.div`
    width: 100%;
    /* height: 100vh; */
    display: flex;
    flex-wrap: wrap;
`
const Wrapper = styled.div`
    width: 300px;
    /* height: 200px; */
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    margin: 20px 10px;

    :hover{
        transform: scale(1.2)
    }
`
const Name = styled.div`
    margin-top: 20px;
`
const Age = styled.div`
    margin-top: 20px;

`
const Subject = styled.div`
    margin-top: 20px;

`
const Description = styled.div`
    margin-top: 20px;
    line-height: 1.5;
`