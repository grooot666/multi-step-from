import { useMemo, useState ,useEffect } from "react"
import PineCone from "./icons/Pine-cone"
import Arrowsvg from "./icons/arrow-svg"

export const StepOne = ({setStep}) => {


  const [formValue, setFormValue] = useState(()=>{
    const prev= JSON.parse(localStorage.getItem("stepOne"))||"{}"
    return prev
  })
  const [errors, setErrors] = useState({})
  const onContinue = () => {
    const newError = {}
    if (!formValue.firstName || formValue.firstname?.length === 0) {
      newError.firstName = "zaaval bogolno uu"
    }
    if (!formValue.lastName || formValue.lastName?.length === 0) {
      newError.lastName = "zaaval bogolno uu"
    }
     if (!formValue.userName || formValue.userName?.length === 0) {
      newError.userName = "zaaval bogolno uu"
     }
    setErrors(newError)
    if(Object.keys(newError).length === 0){
      setStep(2)
    }
    // localStorage functions => setItem(key,value) getItem(key) clear() remove(key)

  };
  useEffect(()=>{
    localStorage.setItem("stepOne",JSON.stringify(formValue))
    console.log(formValue);
  },[formValue])
  
  const onFirstNameChange = (e) =>{
    setFormValue({ ...formValue, 'firstName': e.target.value });

  }

  // setErrors ((prev) => ({...prev,lastName:""})); 

  const onLastNameChange = (e) =>
    setFormValue({ ...formValue, 'lastName': e.target.value });

  const onUserNameChange = (e) =>
    setFormValue({ ...formValue, 'userName': e.target.value });

  
  


  return <div className=" bg-[#F4F4F4;] w-screen h-screen flex items-center justify-center ">
    <div className=" bg-[#FFF;] rounded-[10px]">
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
        <div className="flex flex-col gap-[12px]">
          {/* this is first name input */}
          <div className=" flex  flex-col gap-[8px]">
            <label className="text-[14px]"
              htmlFor="firstname">
              First name
              <span
                className="text-red-500">*
              </span>
            </label>
            <input
              id="firstname"
              onChange={onFirstNameChange}
              placeholder="Placeholder"
              className="p-[12px] rounded-[10px] border" value={formValue.firstName} />
            {errors.firstName ? <p className="text-red-500">{errors.firstName}</p> : <></>}
          </div>
          {/* this is last name input */}
          <div className=" flex  flex-col gap-[8px]">
            <label htmlFor="lastname" className="text-[14px]">
              Last name  <span className="text-red-500">*</span>
            </label>
            <input
              id="lastname"
              placeholder="Placeholder"
              className="p-[12px]  rounded-[10px]   border "
              onChange={onLastNameChange} />
            {errors.lastName ? <p className="text-red-500">{errors.lastName}</p> : <> </>}

          </div>
           {/* this is user name input */}
          <div className=" flex  flex-col gap-[8px]">
            <label htmlFor="username" className="text-[14px]">
              Username  <span className="text-red-500">*</span>
            </label>
            <input
            onChange={onUserNameChange}
              id="username"
              placeholder="Placeholder"
              className="p-[12px]  rounded-[10px]  border  " />
               {errors.userName ? <p className="text-red-500">{errors.userName}</p> : <></>}
          </div>
          <div
            className=" mt-[100px] ">
            <button
              onClick={onContinue}
              className="bg-black text-white w-[100%] p-[12px] rounded-[6px] flex justify-center font-semibold ">
              Continue 1/3 <Arrowsvg />
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
}



