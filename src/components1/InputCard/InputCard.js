import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { db } from '../../Base/Base'
import { addDoc, collection } from 'firebase/firestore'

const InputCard = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [company, setCompany] = useState("")
    const [phoneNo, setPhoneNo] = useState("")


    const postData = async () => {
        addDoc(collection(db, 'contactUser'), { firstName, lastName, company, phoneNo })
        setFirstName("")
        setLastName("")
        setCompany("")
        setPhoneNo("")
    }

    return (
        <Container>
            <Wrapper>
                <div>Land Mark</div>
                <Input placeholder="First Name" value={firstName} onChange={(e) => {
                    setFirstName(e.target.value)
                }} />
                <Input placeholder="Last Name" value={lastName} onChange={(e) => {
                    setLastName(e.target.value)
                }} />
                <Input placeholder="Company" value={company} onChange={(e) => {
                    setCompany(e.target.value)
                }} />
                <Input placeholder="Phone No" value={phoneNo} onChange={(e) => {
                    setPhoneNo(e.target.value)
                }} />
                <Link to="/"><button onClick={postData}>Submit</button></Link>
            </Wrapper>
        </Container>
    )
}

export default InputCard

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const Wrapper = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    flex-direction: column;
    height: 500px;
    border-radius: 10px;

    div{
        color: #fff;
        font-family: moo lah lah;
        font-size: 50px;
        margin-bottom: 20px;
    }

    button{
        width: 130px;
        height: 50px;
        border-radius: 10px;
        outline: none;
        border: none;
    }
`
const Input = styled.input`
    width: 280px;
    height: 30px;
    border: none;
    outline: none;
    margin: 10px;
    border-radius: 5px;
`