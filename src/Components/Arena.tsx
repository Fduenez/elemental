import grass from '../../public/grass.png'
import Image from "next/image";

// @ts-ignore
const arena = ({animation}) => {
    let div = <div></div>;
    console.log(animation);
    if(animation === 0){
        div = <div><div className="glow"></div>
            <div className="flame"></div></div>

    }
    else if(animation === 1){
        div = <div className='drop-container'><div className='drop'></div></div>
    }
    else{
        div = <div className='animate-spin-slow'><Image className='w-auto h-auto"' src='/grass.png' width={144} height={144} alt='leaf'/></div>
    }

    return (
        <div className="mx-2 my-2 rounded-md border-2 border-black w-full h-80 ">
            <div className="flex justify-center items-center justify-items-center w-full h-full relative p-2">
                {animation != -1 ? div: <div/>}

            </div>
        </div>
    );
}
export default arena;