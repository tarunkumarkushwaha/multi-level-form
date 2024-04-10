import React from 'react'
import { useNavigate } from "react-router-dom";

const OnyourWay = ({ nextPage }) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>You're on your way!</h1>
      <div>
        <p>"Through its engaging and well-structured courses, Brilliant has taught me
          mathematical concepts that I previously struggled to understand. I now feel
          confident approaching both technical job interviews and real world problem
          solving situations."
          - Jacob S.</p>
      </div>
      <button onClick={() => navigate('/result')}>continue</button>
    </>
  )
}

export default OnyourWay