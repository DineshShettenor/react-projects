import React, { useRef } from 'react'

export const ScrollToSection = () => {
    const sectionRef = useRef(null);
    const data = [
        {
            label: "First Card",
            style: {
                width: "100%",
                height: "540px",
                background: "red"
            }
        },
        {
            label: "Second Card",
            style: {
                width: "100%",
                height: "540px",
                background: "green"
            }
        },
        {
            label: "Third Card",
            style: {
                width: "100%",
                height: "540px",
                background: "blue"
            }
        },
        {
            label: "Fourth Card",
            style: {
                width: "100%",
                height: "540px",
                background: "yellow"
            }
        },
        {
            label: "fiveth Card",
            style: {
                width: "100%",
                height: "540px",
                background: "skyblue"
            }
        },
    ];
    const handleClick = () => {
        const pos = sectionRef.current.getBoundingClientRect().top;

        window.scrollTo({
            top: pos,
            behavior:'smooth'
        })
    }
  return (
    <div>
        <h1>Scroll to particular section</h1>
        <button onClick={handleClick}>Click to scroll</button>
        {
            data.map((dataItem, index) => (
                <div ref={index === 2 ? sectionRef : null} key={index} style={dataItem.style}>
                    <h2>{dataItem.label}</h2>
                </div>
            ))
        }
    </div>
  )
}

