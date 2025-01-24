"use client";
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";
import { StepFour } from "@/components/StepFour";
import { useState } from "react";

export default function Home() {
  const [step, setStep] =  useState(1)

  return (
   <div>
   {step === 1 &&  <StepOne setStep={setStep} />} 
   {step === 2 &&  <StepTwo setStep={setStep} />} 
   {step === 3 && <StepThree setStep={setStep}/>}
   {step === 4 && <StepFour setStep = {setStep}/>}
   </div>
  );
}
