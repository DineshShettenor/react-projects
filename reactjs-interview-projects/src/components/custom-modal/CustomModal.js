import React from 'react'

export const CustomModal = ({handleShowModalPopUp, id, header, body, footer}) => {
  return (
    <div id={id || "modal"} className='modal'>
        <div className='modal-content'>
            <div className='header'>
                <span className='close-icon' onClick={handleShowModalPopUp}>X</span>
                <h2>{header ? header : "Header"}</h2>
            </div>
            <div className='body'>
                {
                    body ? (
                        body
                    ) : (
                        <div>
                            This is the modal Body
                        </div>
                    )
                }
            </div>
            <div className='footer'>
                {
                    footer ? (footer) : (
                        <footer>Footer Of Modal</footer>
                    )
                }
            </div>
        </div>
    </div>
  )
}
