import { useState } from "react"
import PineCone from "./icons/Pine-cone"
import Arrowsvg from "./icons/arrow-svg"
import Arrowsvg2 from "./icons/Arrow2-svg"

export const StepThree = ({ setStep }) => {
     const onContinue = ( ) => {
        setStep(4)
     }


    return <div className="w-screen h-screen flex justify-center items-center   bg-[#F4F4F4;]">
        <div className=" bg-[#FFF;] rounded-[10px]" >
            <div className="p-[32px] flex flex-col gap-[28px]">
                <div className=" flex flex-col gap-[8px]">
                    <PineCone />
                    <h1
                        className="text-[30px] font-semibold ">
                        Join Us! 😎
                    </h1>
                    <p
                        className="text-[#8E8E8E;] text-[18px]">
                        Please provide all current information accurately.
                    </p>
                </div>
                <div
                    className=" mt-[100px] flex gap-[10px]">
                    <button
                        
                        className=" flex justify-center items-center gap-[5px]  w-[180px] p-[10px] border rounded-[8px]">
                        <Arrowsvg2 />
                        Back
                    </button>
                    <button
                       onClick={onContinue}
                        className="bg-black text-white w-[100%] p-[12px] rounded-[6px] flex justify-center font-semibold ">
                        Continue 3/3 <Arrowsvg />
                    </button>
                </div>

            </div>
        </div>
    </div>


}
