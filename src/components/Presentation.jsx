import React from "react"
import Typed from "react-typed"
import {logo} from "../assets/index"
const Presentation = () => (
  <div id="presentation" className="text-white  font-comfortaa flex flex-col items-center p-24 xl:flex-row xl:justify-around ">
    <div className="flex flex-col bg-dimsecondBlue hover:bg-dimBlue m-4 p-4 rounded-lg">
      <p className="text-sm text-center p-4 xl:text-xl">bonjour, Je m'appelle <Typed strings={[ "Nabil AÏNAS",]} typeSpeed={150} backSpeed={150} loop/> </p>
      <p className="text-sm text-center pb-4">je suis étudiant en informatique et apprenti administrateur système</p>
    </div>
    <div className="bg-secondary p-4 hover:bg-dimBlue rounded-lg xl:animate-bounce xl:p-0">
      <img src={logo} alt="cube" height={200} width={400} className="xl:animate-bounce xl:p-0 "/>
    </div>
  </div>
)


export default Presentation