import React, {useState, useEffect} from 'react'

const cardStyle = {
    border: "solid",
    textAlign: "center",
    display: "inline-flex",
    height: "40%",
    width: "10%",
    marginRight: "10px"
}



export default function Card({card, board, cellIndexes}) {
   
    const [foundCardIndexes, setFoundCardIndexes] = useState([]);

    const placeCard = () =>{
        console.log("Clicked card:")
        console.log(card)

        let i = 0;
        let indexArray = [];
        board.map((e) => (e == card ? indexArray.push(i) : i++))
        console.log("Found indexes:")
        indexArray[1] += 1
        setFoundCardIndexes(indexArray)

        let id = "#cell" + indexArray[0];
        try{
            document.querySelector(id).setAttribute("style","background-color: red")

            id = "#cell" + indexArray[1];
            document.querySelector(id).setAttribute("style","background-color: red")

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
