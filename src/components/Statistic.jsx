import React from 'react'
import styled from 'styled-components'

function Statistic() {
  return (
    <Section>
      <div className='analtic'>
          <div className='content'>
            <h5>Unresolved</h5>
          </div>
          <div className='total'>
            <h6>60</h6>
          </div>
      </div>

      <div className='analtic'>
        <div className='content'>
          <h5>Overdue</h5>
        </div>
        <div className='total'>
          <h6>16</h6>
        </div>
      </div>


      <div className='analtic'>
        <div className='content'>
          <h5>Open</h5>
        </div>
        <div className='total'>
          <h6>43</h6>
        </div>
      </div>


      <div className='analtic'>
        <div className='content'>
          <h5>On hold</h5>
        </div>
        <div className='total'>
          <h6>64</h6>
        </div>
      </div>
    </Section>
  )
}

export default Statistic
const Section = styled.section`
  display: grid;
  grid-template-columns:repeat(4,1fr);
  gap:1rem;
  .analtic{
    border:1px solid #bfbfbf;
    border-radius:8px;
    &:hover{
      background-color:white;
      cursor:pointer;
      border:1px solid blue;
      color:blue !important;
    }
    .content{
      color:#bfbfbf;
      text-align:center;
    }
    .total{
      text-align:center;
      font-size:35px;
    }
  }
`