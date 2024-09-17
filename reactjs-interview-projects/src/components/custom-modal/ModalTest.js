import React, { useState } from 'react'
import { CustomModal } from './CustomModal';
import './styles.css'
export const ModalTest = () => {
    const [showModalPopUp, setShowModalPopUp] = useState(false);

    const handleShowModalPopUp = () => {
        setShowModalPopUp(!showModalPopUp);
    }
    console.log(showModalPopUp);
  return (
    <div>
        <button onClick={handleShowModalPopUp}>Open Modal</button>
        {
            showModalPopUp && <CustomModal handleShowModalPopUp={handleShowModalPopUp}/>
        }
    </div>
  )
}
