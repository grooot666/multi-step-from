import { useState } from "react"
import PineCone from "./icons/Pine-cone"
import Arrowsvg from "./icons/arrow-svg"
import Arrowsvg2 from "./icons/Arrow2-svg"
import { fromJSON } from "postcss"




export const StepTwo = ({ setStep }) => {   


    const [formValue, setFormValue] = useState({
    })
    const [errors, setErrors] = useState({})

    const onEmailChange = (e) => {
      setFormValue({...formValue, "email": e.target.value})
    }
   const onPhoneNumberChange = (e) => {
    setFormValue({...formValue,"PhoneNumber": e.target.value})
   }
   const onPassChange = (e) =>{
    setFormValue({...formValue,"Pass": e.target.value})
   }
   const onConPassChange = (e) => {
setFormValue({...formValue,"ConPass": e.target.value})
   }
   
   const onBack = () => {
    setStep(1)
   }

   const onContinue = () =>{
    const newError ={}
    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\+?\d{8}$/

    if(!formValue.email){
        newError.email = "zaaval bogolno uu"
    } else if(!emailRegex.test(formValue.email)){
        newError.email = "zow email uruulna uu"
    }
    if(!formValue.PhoneNumber){
        newError.PhoneNumber = "zaaval bogolno uu"
    }else if(!phoneRegex.test(formValue.PhoneNumber)){
        newError.PhoneNumber = "zow dugaar uruulna uu"
    }
    if(!formValue.Pass){
        newError.Pass = "zaaval bogolno uu"
    } else if(formValue.Pass.length < 6){
        newError.Pass = "pass 6"
    }
    if(!formValue.ConPass){
        newError.ConPass = "zaaval bogolno uu"
    }
    else if(formValue.ConPass !== formValue.Pass){
        newError.ConPass = "tentsv bish"
    }
    setErrors(newError)
    if(Object.keys(newError).length === 0){
        setStep(3)
    }
   }

    return <div className=" bg-[#F4F4F4;] w-screen h-screen flex items-center justify-center ">
        <div className=" bg-[#FFF;] rounded-[10px]">
            <div className="p-[32px] flex flex-col gap-[28px]">
                {/* this is header */}
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
                <div className="flex flex-col gap-[12px]">
                    {/* this is email input */}
                    <div className=" flex  flex-col gap-[8px]">
                        <label className="text-[14px]"
                            htmlFor="Email">
                            Email
                            <span
                                className="text-red-500">*
                            </span>
                        </label>
                        <input
                        onChange={onEmailChange}
                            id="Email"
                            placeholder="Placeholder"
                            className="p-[12px] rounded-[10px] border" />
                            {
                                errors.email && <p className=" text-red-500">{errors.email}</p>
                            }
                    </div>
                    {/* this is phone number input */}
                    <div className=" flex  flex-col gap-[8px]">
                        <label htmlFor="Phone numbe" className="text-[14px]">
                            Phone number  <span className="text-red-500">*</span>
                        </label>
                        <input
                        onChange={onPhoneNumberChange}
                            id="Phone number"
                            placeholder="Placeholder"
                            className="p-[12px]  rounded-[10px]   border "
                        />
                        {
                            errors.PhoneNumber && <p className=" text-red-500">{errors.PhoneNumber}</p>

                        }

                    </div>
                    {/* this is password input */}
                    <div className=" flex  flex-col gap-[8px]">
                        <label htmlFor="Password" className="text-[14px]">
                            Password  <span className="text-red-500">*</span>
                        </label>
                        <input
                        onChange={onPassChange}
                            id="Password"
                            placeholder="Placeholder"
                            className="p-[12px]  rounded-[10px]  border  " />
                            {
                                errors.Pass && <p className=" text-red-500">{errors.Pass}</p>
                            }
                    </div>
                     {/* this is confirm password input */}
                    <div className=" flex  flex-col gap-[8px]">
                        <label htmlFor="Confirm password "
                         className="text-[14px]">
                            Confirm password
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                        onChange={onConPassChange}
                            id="Confirm password "
                            placeholder="Placeholder"
                            className="p-[12px]  rounded-[10px]  border  " />
                            {
                                errors.ConPass && <p className=" text-red-500">{errors.ConPass}</p>
                            }
                    </div>
                    <div
                        className=" mt-[100px] flex gap-[10px]">
                            <button 
                            onClick={onBack}
                            className=" flex justify-center items-center gap-[5px]  w-[180px] p-[10px] border rounded-[8px]"> 
                            <Arrowsvg2/> 
                            Back
                            </button>
                        <button
                        onClick={onContinue}
                            className="bg-black text-white w-[100%] p-[12px] rounded-[6px] flex justify-center font-semibold ">
                            Continue 2/3 <Arrowsvg />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
}



