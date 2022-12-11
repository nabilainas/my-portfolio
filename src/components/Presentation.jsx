import React from "react"
import Typed from "react-typed"

const Presentation = () => (
  <div className='flex justify-center text-white p-52 font-comfortaa'>
    <div>
      <Typed
        strings={[
              "Je m'appelle Nabil AÏNAS",
              "Je suis Étudiant en Informatique",
              "J'aime le développement",
              "J'aime faire des script",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
    </div>
  </div>
)


export default Presentation