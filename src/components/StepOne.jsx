import PineCone from "./icons/Pine-cone"

export const StepOne = ( ) => {
    return  <div className=" bg-[#F4F4F4;] w-screen h-screen flex items-center justify-center ">
    <div className=" bg-[#FFF;] rounded-[10px]">
      <div className="p-[32px] flex flex-col gap-[28px]">
      <div className=" flex flex-col gap-[8px]">
      <PineCone/>
        <h1 className="text-[30px] font-semibold ">Join Us! 😎</h1>
        <p className="text-[#8E8E8E;] text-[18px]">Please provide all current information accurately.</p>
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className=" flex  flex-col gap-[8px]">
          <p className="text-[14px]">First name <span className="text-red-500">*</span></p>
          <input placeholder="Placeholder" className="p-[12px] rounded-[10px] border"/>
        </div>
        <div className=" flex  flex-col gap-[8px]">
          <p className="text-[14px]">
            Last name  <span className="text-red-500">*</span>
          </p>
          <input  placeholder="Placeholder" className="p-[12px]  rounded-[10px]   border "/>
        </div>
        <div className=" flex  flex-col gap-[8px]">
          <p className="text-[14px]">
            Username  <span className="text-red-500">*</span>
          </p>
          <input  placeholder="Placeholder" className="p-[12px]  rounded-[10px]  border  "/>
        </div>
        <div className=" mt-[100px] ">
          <button className="bg-black text-white w-[100%] p-[12px] rounded-[6px]">
            Continue
          </button>
        </div>
      </div>
      </div>
   
    </div>
  </div>
}


    
