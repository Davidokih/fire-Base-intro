import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { db } from '../../Base/Base'


const GetAll = () => {
    const [companyData, setCompanyData] = useState([])
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "lightgray",
        "purple",
        "gold",
        "pink"
    ]

    const rand = () => {
        return Math.floor(Math.random() * colors.length)
    }

    const companyColect = async () => {
        const getData = getDocs(collection(db, 'contactUser'))
        setCompanyData((await getData).docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    // useEffect(() => {
    //     rand();

    // }, [])
    useEffect(() => {
        companyColect();
    }, [])
    return (
        <Container>
            <Hold>
                <div>Land Mark Form</div>
                <Link to="/input"><button>Upload Contact</button></Link>
            </Hold>
            <Wrapper>
                {companyData?.map(props => {
                    return (
                        <Card key={props.id}>
                            <Char style={{ backgroundColor: colors[rand()] }}>{props.firstName.charAt(0)}</Char>
                            <Holder>
                                <Name>{props.firstName}</Name>
                                <Last>{props.lastName}</Last>
                            </Holder>
                            <Logo>
                                <Company>{props.company}</Company>
                                <Number>{props.phoneNo}</Number>
                            </Logo>
                        </Card>
                    )
                })}
            </Wrapper>
        </Container>
    )
}

export default GetAll


const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: black; */

   
`
const Hold = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between; 

    div{
        font-size: 50px;
        font-weight: 800;
        font-family: impact;
        margin-bottom: 20px;
    }
    button{
        width: 130px;
        height: 50px;
        border-radius: 10px;
        outline: none;
        border: none;
        margin-bottom: 20px;
    } 

    @media (max-width: 800px) {
        flex-direction: column;
    }
`
const Wrapper = styled.div`

    width: 65%;
     display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

     flex-wrap: wrap;
`
const Card = styled.div`
    width: 320px;
    display: flex;
    height: 150px;
    align-items: center;
    /* justify-content: space-between; */
    flex-direction: column;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    border-radius: 10px;
    margin: 10px;
    padding: 20px;

`
const Char = styled.div`
    height: 50px;
    width: 50px;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    border-radius: 100px;
    color: #fff;
    /* font-family: moo lah lah; */
`
const Name = styled.div`
    font-size: 20px;
    font-weight: 600;
    font-family: Darling in Paris;
`
const Last = styled.div`
    font-size: 20px;
    font-weight: 600;
    font-family: Darling in Paris;
`
const Holder = styled.div`
    /* width: 200px; */
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* flex-direction: column; */
    /* margin-left: 5px; */
    /* background-color: red; */
`
const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Company = styled.div`
    font-size: 20px;
    /* font-family: Matura MT Script Capitals; */
`
const Number = styled.div`
    font-family: Darling in Paris;
`
