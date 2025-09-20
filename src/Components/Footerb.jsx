import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faApple } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Footerb() {
  return (
    <div>Footerb saif
        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: "#1877f2" }} />
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faApple} size="2x" style={{ color: "#1877f2" }}/>
    </div>
  )
}

export default Footerb