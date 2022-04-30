import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import Radio from '@material-ui/core/Radio'
import Slider from "@material-ui/core/Slider"

interface Props {
    info: {
        key: String,
        value: String
    }[],
    head: String,
    id: String,
    checked: String
}

const PaymentCheckoutPage = () => {



    const [currentSelection, setcurrentSelection] = useState("1")
    const [checked, setchecked] = useState("1")

    const info1 = [
        {
            key: 'Unlimited Mentoring',
            value: "Our unlimited mentoring with guaranteed 4 live sessions every month"
        },
        {
            key: 'Performance Evaluation',
            value: 'KPI Assessments and Reports every week'
        },
        {
            key: "Experienced Mentors",
            value: "Guaranteed 8+ years of experience on your mentor"
        }

    ]

    const info2 = [
        {
            key: "30 minutes FREE Introductory 1:1 Personalized Session",
            value: 'Get live personalized mentoring by mentors who are industry experts'
        },
        {
            key: "Experienced Mentors",
            value: "Guaranteed 8+ years of experience on your mentor"
        }
    ]


    const info3 = [
        {
            key: "1:1 Personalized Session",
            value: "Get live personalized mentoring by mentors who are industry experts"
        },
        {
            key: "Mentoring Support",
            value: "Get mentoring support by our mentors through emails and messages for 10 days"
        },
        {
            key: "Experienced Mentors",
            value: "Guaranteed 8+ years of experience on your mentor"
        }
    ]


    useEffect(() => {
        const elmnt = document.getElementById(currentSelection)
        if (elmnt !== null) {
            elmnt.style.backgroundColor = "#EAF3FA"
        }

    }, [currentSelection])



    const marks = [
        {
            value: 0,
            label: '0°C',
        },
        {
            value: 4,
            label: '4°C',
        },
        {
            value: 8,
            label: '8°C',
        },
        {
            value: 12,
            label: '12°C',
        },
        {
            value: 16,
            label: '16°C',
        },
    ];


    function Change(event: React.ChangeEvent<HTMLInputElement>) {
        setcurrentSelection(event.target.value)
        setchecked(event.target.value)
    }


    const Container: React.FC<Props> = (props) => {
        return (

            <Container_div id={`${props.id}`} >
                <div style={{ display: "flex" }} >

                    <Radio style={{ width: "0%", marginBottom: "1.3%" }} checked={checked === props.checked} value={props.checked} onChange={(event) => Change(event)} />
                    <Head>{props.head}</Head>

                </div>

                {props.info.map((eachInfo) => {
                    return (
                        <div>
                            <Header>{eachInfo.key}</Header>
                            <Para>{eachInfo.value}</Para>
                        </div>
                    )
                })}
            </Container_div>
        )
    }

    const Container_div = styled.div`
    border: 1px solid #CBCBCB;
    box-sizing: border-box;
    border-radius: 16px;
    width:100%;
    margin-left:10%;
    padding: 16px 24px;
    

    `;

    const Head = styled.h1`
styleName: Mulish/Title Bold 20;
font-family: Mulish;
font-size: 120%;
font-style: normal;
font-weight: 700;
line-height: 120.2%;
letter-spacing: 0em;
text-align: left;
color: #4B4B4B;
margin-bottom:5%;
margin-left:3%;

`;


    const Header = styled.h2`

font-family: Roboto;
font-size: 100%;
font-style: normal;
font-weight: 700;
line-height: 110%;
letter-spacing: 0em;
text-align: left;
color:#4B4B4B;

    `;

    const Para = styled.p`
styleName: Roboto/Overline Regular 14;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.02em;
text-align: left;
color: #4B4B4B;

`;

    const Price = styled.p`
styleName: Roboto/Body Regular 16;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: #262626;


`;


    const Btn = styled.button`
background: #FFFFFF;
box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
border:none;
width:20%;
padding:1%;
margin-left:15%;
`;

    const Title = styled.p`
styleName: Mulish/Title Bold 20;
font-family: Mulish;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
margin-left:12%;
display:"inline-block"

`;



    function valuetext(value: number) {
        return `${value}°C`;
    }



    return (
        <div>
            <div style={{ display: "flex" }}>

                <div>
                    <Title>Selected Session Type</Title>
                    <div style={{ margin: '3%', width: "80%" }}>


                        <Container info={info1} head="WiseUp Upskilling" id="1" checked="1" />
                    </div>
                    <div style={{ margin: '3%', width: "80%" }}>

                        <Container info={info2} head="FREE Introductory Session" id="2" checked="2" />
                    </div>
                    <div style={{ margin: '3%', width: "80%" }}>

                        <Container info={info3} head="Custom Mentorship" id="3" checked="3" />
                    </div>
                </div>




                <div style={{ width: "50%" }}>
                    <Title>Number of Sessions</Title>
                    <Slider
                        aria-label="Custom marks"
                        defaultValue={20}
                        getAriaValueText={valuetext}
                        step={10}
                        valueLabelDisplay="auto"
                        marks={marks}
                    />
                    <Container_div style={{ width: "100%" }}>
                        <Head>Payment Details</Head>
                        <div style={{ display: "flex" }} >
                            <Para style={{ width: "90%" }}>Price per session (Gold tier)</Para>
                            <Price>15.00</Price>
                        </div>
                        <div style={{ display: "flex" }} >
                            <Para style={{ width: "90%" }}>Number of sessions</Para>
                            <Price>4</Price>
                        </div>
                        <div style={{ display: "flex" }} >
                            <Para style={{ width: "90%" }}>GST (18%)</Para>
                            <Price>10.80</Price>
                        </div>
                        <div style={{ display: "flex" }} >
                            <Para style={{ width: "90%" }}>Monthly platform subscription</Para>
                            <Price>2.00</Price>
                        </div>
                        <div>
                            <Para>Use $20 worth of Reward Credits</Para>
                        </div>
                        <div>
                            <input placeholder="Discount Code" style={{ border: "none", borderBottom: "1px solid #A3A3A3", width: "60%" }} />
                            <Btn>Apply</Btn>
                        </div>
                    </Container_div>

                </div>
            </div>

        </div>
    )
}


export default PaymentCheckoutPage;





// 02461 RAC
