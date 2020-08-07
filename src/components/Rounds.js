import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import Card from "./Card";

import PlayerNames from "./PlayerNames"

const Rounds = ({player}) => {

    const boardCardStyle = {
        border: "solid",
    }

    // R: rhombus    H: heart    S: spade    L: leaf
    // R: red       B:  black
    // Card name

    const gameBoard = [
        "JOKER", "SB2", "SB3", "SB4", "SB5", "SB6", "SB7", "SB8", "SB9", "JOKER",
        "LB6", "LB5", "LB4", "LB3", "LB2", "HRA", "HRK", "HRQ", "HR10", "SB10",
        "LB7", "SBA", "RR2", "RR3", "RR4", "RR5", "RR6", "RR7", "HR9", "SBQ",
        "LB8", "SBK", "LB6", "LB5", "LB4", "LB3", "LB2", "RR8", "HR8", "SBK",
        "LB9", "SBQ", "LB7", "HR6", "HR5", "HR4", "HRA", "RR9", "HR7", "SBA",
        "LB10", "SB10", "LB8", "HR7", "HR2", "HR3", "HRK", "RR10", "HR6", "RR2",
        "LBQ", "SB9", "LB9", "HR8", "HR9", "HR10", "HRQ", "RRQ", "HR5", "RR3",
        "LBK", "SB8", "LB10", "LBQ", "LBK", "LBA", "RRA", "RRK", "HR4", "RR4",
        "LBA", "SB7", "SB6","SB5", "SB4", "SB3", "SB2", "HR2", "HR3", "RR5",
        "JOKER", "RRA", "RRK", "RRQ", "RR10", "RR9", "RR8", "RR7", "RR6", "JOKER"
    ];

    const pickableCardsTemp = [
        "RRA","HRA","SBA","LBA",
        "RRK","HRK","SBK","LBK",
        "RRQ","HRQ","SBQ","LBQ",
        "RRJ","HRJ","SBJ","LBJ",
        "RR10","HR10","SB10","LB10",
        "RR9","HR9","SB9","LB9",
        "RR8","HR8","SB8","LB8",
        "RR7","HR7","SB7","LB7",
        "RR6","HR6","SB6","LB6",
        "RR5","HR5","SB5","LB5",
        "RR4","HR4","SB4","LB4",
        "RR3","HR3","SB3","LB3",
        "RR2","HR2","SB2","LB2",

        "RRA","HRA","SBA","LBA",
        "RRK","HRK","SBK","LBK",
        "RRQ","HRQ","SBQ","LBQ",
        "RRJ","HRJ","SBJ","LBJ",
        "RR10","HR10","SB10","LB10",
        "RR9","HR9","SB9","LB9",
        "RR8","HR8","SB8","LB8",
        "RR7","HR7","SB7","LB7",
        "RR6","HR6","SB6","LB6",
        "RR5","HR5","SB5","LB5",
        "RR4","HR4","SB4","LB4",
        "RR3","HR3","SB3","LB3",
        "RR2","HR2","SB2","LB2",                            
    ];

    const [pickableCards, setPickableCards] = useState(pickableCardsTemp);

    const pickedCardsTemp = [];
    const [pickedCards, setPickedCards] = useState(pickedCardsTemp);

    const player1CardsTemp = [];
    const [player1Cards, setPlayer1Cards] = useState([player1CardsTemp]);

    const player2CardsTemp = [];
    const [player2Cards, setPlayer2Cards] = useState([player2CardsTemp]);

    const player3CardsTemp = [];
    const [player3Cards, setPlayer3Cards] = useState([player3CardsTemp]);
    
    const [selectedCellsIndexes, setSelectedCellsIndexes] = useState([]);

    const selectedIndexes = (indexes) => {
        setSelectedCellsIndexes(indexes)
    }

    const spreadCards = (playerDeck) => {
        let randomCardIndex = Math.floor(Math.random()*pickableCardsTemp.length);

        pickedCardsTemp.push(pickableCardsTemp[randomCardIndex]);
        playerDeck.push(pickableCardsTemp[randomCardIndex]);
        pickableCardsTemp.splice(randomCardIndex,1);
    };

    useEffect(() => {
        for(let i = 0; i < 6; i++){
            spreadCards(player1CardsTemp);
            spreadCards(player2CardsTemp);
            spreadCards(player3CardsTemp);
        }

        setPickableCards(pickableCardsTemp);
        setPickedCards(pickedCardsTemp);
        console.log("picked cards")
        console.log(pickedCards)

        setPlayer1Cards(player1CardsTemp);
        setPlayer2Cards(player2CardsTemp);
        setPlayer3Cards(player3CardsTemp);
    }, [])
    
    const location = useLocation()

    const showPlayerCards = (playerCards) => {
        return(
            <div style={{height: "300px"}}>
                {   console.log("Player1 cards in a nutshell:"),
                    playerCards.map( element => <Card card={element} board={gameBoard} //player1Cards.map volt
                        cellIndexes={selectedIndexes} p2={player2Cards} />)
                }
                {
                     console.log("Got indexes from Card"), //ToDelete
                     console.log(selectedCellsIndexes)
                }
                {
                    //itt eltűntetni az előző cardot és megjeleníteni a következőt
                }
                
            </div>
        )
    }

    return (
        <div>
            <table style={{marginBlockEnd: "50px"}}>
                <tbody>
                    <tr>
                        <td id="cell0" style={boardCardStyle}>JOKER</td>
                        <td id="cell1" style={boardCardStyle}>SB2</td>
                        <td id="cell2" style={boardCardStyle}>SB3</td>
                        <td id="cell3" style={boardCardStyle}>SB4</td>
                        <td id="cell4" style={boardCardStyle}>SB5</td>
                        <td id="cell5" style={boardCardStyle}>SB6</td>
                        <td id="cell6" style={boardCardStyle}>SB7</td>
                        <td id="cell7" style={boardCardStyle}>SB8</td>
                        <td id="cell8" style={boardCardStyle}>SB9</td>
                        <td id="cell9" style={boardCardStyle}>JOKER</td>
                    </tr>
                    <tr>
                        <td id="cell10" style={boardCardStyle}>LB6</td>
                        <td id="cell11" style={boardCardStyle}>LB5</td>
                        <td id="cell12" style={boardCardStyle}>LB4</td>
                        <td id="cell13" style={boardCardStyle}>LB3</td>
                        <td id="cell14" style={boardCardStyle}>LB2</td>
                        <td id="cell15" style={boardCardStyle}>HRA</td>
                        <td id="cell16" style={boardCardStyle}>HRK</td>
                        <td id="cell17" style={boardCardStyle}>HRQ</td>
                        <td id="cell18" style={boardCardStyle}>HR10</td>
                        <td id="cell19" style={boardCardStyle}>SB10</td>
                    </tr>
                    <tr>
                        <td id="cell20" style={boardCardStyle}>LB7</td>
                        <td id="cell21" style={boardCardStyle}>SBA</td>
                        <td id="cell22" style={boardCardStyle}>RR2</td>
                        <td id="cell23" style={boardCardStyle}>RR3</td>
                        <td id="cell24" style={boardCardStyle}>RR4</td>
                        <td id="cell25" style={boardCardStyle}>RR5</td>
                        <td id="cell26" style={boardCardStyle}>RR6</td>
                        <td id="cell27" style={boardCardStyle}>RR7</td>
                        <td id="cell28" style={boardCardStyle}>HR9</td>
                        <td id="cell29" style={boardCardStyle}>SBQ</td>
                    </tr>
                    <tr>
                        <td id="cell30" style={boardCardStyle}>LB8</td>
                        <td id="cell31" style={boardCardStyle}>SBK</td>
                        <td id="cell32" style={boardCardStyle}>LB6</td>
                        <td id="cell33" style={boardCardStyle}>LB5</td>
                        <td id="cell34" style={boardCardStyle}>LB4</td>
                        <td id="cell35" style={boardCardStyle}>LB3</td>
                        <td id="cell36" style={boardCardStyle}>LB2</td>
                        <td id="cell37" style={boardCardStyle}>RR8</td>
                        <td id="cell38" style={boardCardStyle}>HR8</td>
                        <td id="cell39" style={boardCardStyle}>SBK</td>
                    </tr>
                    <tr>
                        <td id="cell40" style={boardCardStyle}>LB9</td>
                        <td id="cell41" style={boardCardStyle}>SBQ</td>
                        <td id="cell42" style={boardCardStyle}>LB7</td>
                        <td id="cell43" style={boardCardStyle}>HR6</td>
                        <td id="cell44" style={boardCardStyle}>HR5</td>
                        <td id="cell45" style={boardCardStyle}>HR4</td>
                        <td id="cell46" style={boardCardStyle}>HRA</td>
                        <td id="cell47" style={boardCardStyle}>RR9</td>
                        <td id="cell48" style={boardCardStyle}>HR7</td>
                        <td id="cell49" style={boardCardStyle}>SBA</td>
                    </tr>
                    <tr>
                        <td id="cell50" style={boardCardStyle}>LB10</td>
                        <td id="cell51" style={boardCardStyle}>SB10</td>
                        <td id="cell52" style={boardCardStyle}>LB8</td>
                        <td id="cell53" style={boardCardStyle}>HR7</td>
                        <td id="cell54" style={boardCardStyle}>HR2</td>
                        <td id="cell55" style={boardCardStyle}>HR3</td>
                        <td id="cell56" style={boardCardStyle}>HRK</td>
                        <td id="cell57" style={boardCardStyle}>RR10</td>
                        <td id="cell58" style={boardCardStyle}>HR6</td>
                        <td id="cell59" style={boardCardStyle}>RR2  </td>
                    </tr>
                    <tr>
                        <td id="cell60" style={boardCardStyle}>LBQ</td>
                        <td id="cell61" style={boardCardStyle}>SB9</td>
                        <td id="cell62" style={boardCardStyle}>LB9</td>
                        <td id="cell63" style={boardCardStyle}>HR8</td>
                        <td id="cell64" style={boardCardStyle}>HR9</td>
                        <td id="cell65" style={boardCardStyle}>HR10</td>
                        <td id="cell66" style={boardCardStyle}>HRQ</td>
                        <td id="cell67" style={boardCardStyle}>RRQ</td>
                        <td id="cell68" style={boardCardStyle}>HR5</td>
                        <td id="cell69" style={boardCardStyle}>RR3</td>
                    </tr>
                    <tr>
                        <td id="cell70" style={boardCardStyle}>LBK</td>
                        <td id="cell71" style={boardCardStyle}>SB8</td>
                        <td id="cell72" style={boardCardStyle}>LB10</td>
                        <td id="cell73" style={boardCardStyle}>LBQ</td>
                        <td id="cell74" style={boardCardStyle}>LBK</td>
                        <td id="cell75" style={boardCardStyle}>LBA</td>
                        <td id="cell76" style={boardCardStyle}>RRA</td>
                        <td id="cell77" style={boardCardStyle}>RRK</td>
                        <td id="cell78" style={boardCardStyle}>HR4</td>
                        <td id="cell79" style={boardCardStyle}>RR4</td>
                    </tr>
                    <tr>
                        <td id="cell80" style={boardCardStyle}>LBA</td>
                        <td id="cell81" style={boardCardStyle}>SB7</td>
                        <td id="cell82" style={boardCardStyle}>SB6</td>
                        <td id="cell83" style={boardCardStyle}>SB5</td>
                        <td id="cell84" style={boardCardStyle}>SB4</td>
                        <td id="cell85" style={boardCardStyle}>SB3</td>
                        <td id="cell86" style={boardCardStyle}>SB2</td>
                        <td id="cell87" style={boardCardStyle}>HR2</td>
                        <td id="cell88" style={boardCardStyle}>HR3</td>
                        <td id="cell89" style={boardCardStyle}>RR5</td>
                    </tr>
                    <tr>
                        <td id="cell90" style={boardCardStyle}>JOKER</td>
                        <td id="cell91" style={boardCardStyle}>RRA</td>
                        <td id="cell92" style={boardCardStyle}>RRK</td>
                        <td id="cell93" style={boardCardStyle}>RRQ</td>
                        <td id="cell94" style={boardCardStyle}>RR10</td>
                        <td id="cell95" style={boardCardStyle}>RR9</td>
                        <td id="cell96" style={boardCardStyle}>RR8</td>
                        <td id="cell97" style={boardCardStyle}>RR7</td>
                        <td id="cell98" style={boardCardStyle}>RR6</td>
                        <td id="cell99" style={boardCardStyle}>JOKER</td>
                    </tr>
                </tbody>
          </table>
          <div>
            {
                console.log("---------"),
                console.log(player),
                showPlayerCards(player)
            }
          </div>
        </div>
    )
}

export default Rounds
