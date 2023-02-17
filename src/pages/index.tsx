import Card from "@/Components/Card";
import Arena from '@/Components/Arena'
import {useState} from "react";


export default function Home() {

    const [userAttribute, setUserAttribute] = useState(-1);
    const [computerAttribute, setComputerAttribute] = useState(-1);
    const [animation, setAnimation] = useState({userAnimation: -1, computerAnimation: -1});
    const [winner, setWinner] = useState('');
    const playGame = (attribute: number) => {
        console.log("clicked")
        setUserAttribute(attribute);
        let computerRandomAttribute = (Math.floor(Math.random() * 100)%3)
        setComputerAttribute(computerRandomAttribute);
        setAnimation({userAnimation: attribute, computerAnimation: computerRandomAttribute})
        let computerChoice = '';
        switch (computerRandomAttribute){
            case 0:
                computerChoice = 'Fire';
                break;
            case 1:
                computerChoice = 'Water';
                break;
            case 2:
                computerChoice = 'Grass';
                break;
            default:
                computerChoice = 'Fire';
                break;

        }
        if(attribute === computerRandomAttribute){
            console.log(`Computer Chose: ${computerChoice}... you tied`)
            setWinner("No one is a winner");
        }
        else if(attribute === 0 ){
            if(computerRandomAttribute === 1){
                console.log(`Computer Chose: ${computerChoice}... you lose :(`)
                setWinner("Computer Wins");
            }
            else {
                console.log(`Computer Chose: ${computerChoice}... you win!`);
                setWinner("User Wins");
            }
        }
        else if(attribute === 1 ){
            if(computerRandomAttribute === 2){
                console.log(`Computer Chose: ${computerChoice}... you lose :(`)
                setWinner("Computer Wins");
            }
            else {
                console.log(`Computer Chose: ${computerChoice}... you win!`);
                setWinner("User Wins");
            }
        }
        else if(attribute === 2 ){
            if(computerRandomAttribute === 0){
                console.log(`Computer Chose: ${computerChoice}... you lose :(`)
                setWinner("Computer Wins");
            }
            else {
                console.log(`Computer Chose: ${computerChoice}... you win!`);
                setWinner("User Wins");
            }
        }
    }
  return (
    <div className="w-screen h-screen">
        <div className="top-0"><h1 className="text-black">{winner}</h1></div>
        <div className="flex flex-row gap-0 w-full justify-center items-center w-screen">
            <Card path={"/fire.png"} attribute={0} startGame={playGame}/>
            <Card path={"/water.png"} attribute={1} startGame={playGame}/>
            <Card path={"/grass.png"} attribute={2} startGame={playGame}/>
        </div>
        {userAttribute != -1 ?
        <div className="flex flex-row gap-0 w-full justify-center items-center w-screen">
            <Arena animation={animation.userAnimation}/>
            <Arena animation={animation.computerAnimation}/>
        </div>
        : <div></div>}
    </div>
  )
}
