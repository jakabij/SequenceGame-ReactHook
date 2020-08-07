import React, {useState, useEffect} from 'react'
import Rounds from './Rounds';

const cardStyle = {
    border: "solid",
    textAlign: "center",
    display: "inline-flex",
    height: "40%",
    width: "10%",
    marginRight: "10px"
}



export default function Card({card, board, cellIndexes, p2}) {
   
    const [foundCardIndexes, setFoundCardIndexes] = useState([]);



    function placeToken(card){
        card.target.textContent="P1- "+card.target.textContent+" -P1";
        console.log("---------Switch-----------")
        //card.setAttribute("style", "background-color: green")
    }


    const placeCard = () => {
        console.log("Clicked card:")
        console.log(card)

        for(let i = 0; i < board.length; i++){
            let card = document.querySelector("#cell" + i);
            card.removeAttribute("style");
            card.removeEventListener("click", placeToken);    //lehet tryba kell rakni
            card.setAttribute("style", "border: solid");
        }


        let i = 0;
        let indexArray = [];
        board.map((e) => (e == card ? indexArray.push(i) : i++))
        console.log("Found indexes:")
        indexArray[1] += 1
        setFoundCardIndexes(indexArray)

        try{
            let id = "#cell" + indexArray[0];
            let card = document.querySelector(id);

            card.setAttribute("style","background-color: red")

            card.addEventListener("click", (e) => placeToken(e))

            id = "#cell" + indexArray[1];
            card = document.querySelector(id);
            card.setAttribute("style","background-color: red")

            card.addEventListener("click", (e) => placeToken(e))


            //send cell indexes back to Rounds.js to compare later the click
            cellIndexes(indexArray)
        }catch{
            alert("J card is not foundable on the board!")
        }
    }

    return (
        <div style={cardStyle} onClick={() => placeCard()}>
            {
                console.log(foundCardIndexes)
            }
            <a>{card}</a>
        </div>
    )
}
