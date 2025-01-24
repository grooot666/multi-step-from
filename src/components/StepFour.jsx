import { useState } from "react"
import PineCone from "./icons/Pine-cone"
import Arrowsvg from "./icons/arrow-svg"
import Arrowsvg2 from "./icons/Arrow2-svg"

export const StepFour = ({ setStep }) => {
   


    return <div className="w-screen h-screen flex justify-center items-center   bg-[#F4F4F4;]">
        <div className=" bg-[#FFF;] rounded-[10px]" >
            <div className="p-[32px] flex flex-col gap-[28px]">
                <div className=" flex flex-col gap-[8px]">
                    <PineCone />
                    <h1
                        className="text-[30px] font-semibold ">
                        You're All Set 🔥
                    </h1>
                    <p
                        className="text-[#8E8E8E;] text-[18px]">
                        We have received your submission. Thank you!
                    </p>
                </div>

            </div>
        </div>
    </div>


}