import styled from "styled-components";
import background from "./Images/Background.png"

const CardFormat= styled.div`
background-image: url(${background});
border-radius: 10px;
box-shadow: 12px 8px 30px #565656;
margin-block-start: 0.75em;
margin: 1%;
`
const Imagenes=styled.img`
max-width: 75%;
border: 3.5px solid beige;
  border-radius: 40% 1px;
margin-block: 1em;
`
const Names=styled.h2`
border-radius: 10px 10px 0px 0px;
background-color:beige;
padding: 4%;
color: #03045e;
font-family: Courier New, monospace;
margin-block-start: 0em;
margin-block-end: 0em;
`
const Close=styled.button`
border: none;
// position: relative;
// bottom: 10%;
// left: 10%;
background-color: red;
color:white;
border-radius: 4px
`
const Description=styled.div`
background-color: grey;
margin-bottom: 4%;
`


export default function Card(props) {
   return (
         <CardFormat>
            <Names>{props.name} </Names>
            <Description>{props.species}</Description>
            <Close onClick={props.onClose}>X</Close>
            <Imagenes  src={props.image} alt="" />
            <Description>{props.gender}</Description>
         </CardFormat>
   );
}
