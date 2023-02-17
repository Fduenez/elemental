import Image from "next/image";

// @ts-ignore
const card = ({path, attribute, startGame}) => {
    let cardColor = '';
    let cardHoverColor = '';
    switch (attribute){
        case 0:
            cardColor = 'bg-orange-600';
            cardHoverColor = 'hover:bg-orange-400';
            break;
        case 2:
            cardColor = 'bg-green-300';
            cardHoverColor = 'hover:bg-green-100';
            break;
        case 1:
            cardColor = 'bg-cyan-300';
            cardHoverColor = 'hover:bg-cyan-100';
            break;
        default:
            cardColor = 'bg-orange-600'
            cardHoverColor = 'hover:bg-orange-400';
            break;
    }



    return (
        <div className={`mx-2 my-2 rounded-md border-2 border-black w-1/5 h-80 shadow-md ${cardColor} hover:shadow-lg ${cardHoverColor}`} onClick={() => startGame(attribute)}>
            <div className="flex justify-center items-center justify-items-center w-full h-full relative p-2">
                <Image className="w-auto h-auto" src={path} alt={"symbol"} width={120} height={120}/>
            </div>
        </div>
    );
}

export default card;