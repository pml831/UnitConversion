"use client"
import React, { useId, useState, useEffect } from "react";

export default function Home() {
  const [foot, setFoot] = useState();
  const [mi, setMi] = useState();
  const [meter, setMeter] = useState();
  const [yard, setYard] = useState();
  const [foot2, setFoot2] = useState();
  const [inch, setInch] = useState();
  const [centimeter, setCentimer] = useState();

    function handleChangeFt(event) {
      setFoot(event.target.value);
      setMi(event.target.value/5280);
      setMeter(event.target.value*.3048);
      setYard(event.target.value/3);
    }

    function handleChangeMi(event) {
      setMi(event.target.value);
      setFoot(event.target.value*5280);
      setMeter(event.target.value*1609.34);
      setYard(event.target.value*1760);
      }

    function handleChangeMeter(event) {
      setMeter(event.target.value);
      setFoot(event.target.value/.3048);
      setMi(event.target.value/1609.34);
      setYard(event.target.value*1.09361);
      }

    function handleChangeYard(event) {
        setYard(event.target.value);
        setFoot(event.target.value*3);
        setMi(event.target.value/1760);
        setMeter(event.target.value/1.09361);
        }

    function handleChangeFoot2(event) {
      setFoot2(event.target.value);
      setInch(event.target.value*12);
      setCentimer(event.target.value*30.48);
      }

    function handleChangeInch(event) {
      setInch(event.target.value);
      setFoot2(event.target.value/12);
      setCentimer(event.target.value*2.54);
      }  

    function handleChangeCentimer(event) {
      setCentimer(event.target.value);
      setFoot2(event.target.value/30.48);
      setInch(event.target.value/2.54);
      }        
  

  return (
     <body>
      <h1 className="text-4xl text-black text-center my-10">Common Conversion Length Conversions</h1>
      <main className="min-h-screen items-center">

      
      <div className="z-5 w-full max-w-5xl items-center font-mono text-sm lg:flex py-4">
        <p className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-00 lg:p-4 lg:dark:bg-zinc-800/30 mr-10">
          Ft{"<=>"}mile{"<=>"}meter{"<=>"}yard
        </p>
        <p className="ml-5">
          Feet:
        </p>
        <input value={foot}  placeholder="ft" onChange={handleChangeFt} />
        <p className="ml-5">
          mile:
        </p>
        <input value={mi} placeholder="mi" onChange={handleChangeMi} />
        <p className="ml-5">
          meter:
        </p>
        <input value={meter} placeholder="meter" onChange={handleChangeMeter} />
        <p className="ml-5">
          yard:
        </p>
        <input value={yard} placeholder="yard" onChange={handleChangeYard} />
      </div>

      <div className="z-5 w-full max-w-5xl items-center font-mono text-sm lg:flex py-4" >
        <p className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-00 lg:p-4 lg:dark:bg-zinc-800/30 mr-10">
          Ft{"<=>"}inch{"<=>"}cm
        </p>
        <p className="ml-5">
          Feet:
        </p>
        <input value={foot2}  placeholder="ft" onChange={handleChangeFoot2} />
        <p className="ml-5">
          inch:
        </p>
        <input value={inch} placeholder="in" onChange={handleChangeInch} />
        <p className="ml-5">
          centimeter:
        </p>
        <input value={centimeter} placeholder="cm" onChange={handleChangeCentimer} />
      </div>

  


    </main> 
    </body>
  )
}
