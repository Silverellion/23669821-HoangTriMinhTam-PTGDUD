import React from 'react'

export const CreateButton = ({ text, type }) => {
    let backgroundColor = "rgb(255,255,255)"
    if(type === "primary") backgroundColor = "rgb(170, 238, 243)"
    if(type === "danger") backgroundColor = "rgb(228, 59, 59)"
    if(type === "success") backgroundColor = "rgb(147, 255, 75)"
  return (
    <button style = {{ 
      backgroundColor,
      width: "300px",
      height: "80px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer"
    }}>
        {text}
    </button>
  )
}