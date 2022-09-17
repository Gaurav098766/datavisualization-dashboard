import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import Statistic from './Statistic'
import Trends from './Trends'
import Ticket from './Ticket';


function Dashboard() {
  return (
    <Section>
      <Navbar/>
      <div className='grid'>
          <Statistic/>
      </div>
      <div className='grid_1'>
        <div className='grid_10'>
          <Trends/>
        </div>
        <div className='grid_20'>
            <div className='analtic'>
              <div className='content'>
                <h5>Resolved</h5>
              </div>
              <div className='total'>
                <h6>449</h6>
              </div>
            </div>

            <div className='analtic'>
              <div className='content'>
                <h5>Received</h5>
              </div>
              <div className='total'>
                <h6>426</h6>
              </div>
            </div>

            <div className='analtic'>
              <div className='content'>
                <h5>Average first response time</h5>
              </div>
              <div className='total'>
                <h6>33m</h6>
              </div>
            </div>

            <div className='analtic'>
              <div className='content'>
                <h5>Average response time</h5>
              </div>
              <div className='total'>
                <h6>3h 8m</h6>
              </div>
            </div>

            <div className='analtic'>
              <div className='content'>
                <h5>Resolution within SLA</h5>
              </div>
              <div className='total'>
                <h6>94%</h6>
              </div>
            </div>
        </div>
        
      </div>
      <div className='grid_2'>
        <Ticket/>
      </div>
    </Section>
  )
}

export default Dashboard
const Section = styled.section`

margin-left:18vw;
padding:2rem;
height: 100%;
.grid{
  display:grid;
  margin-top:1rem;
}
.grid_1{
  display:grid;
  margin-top:1rem;
  border-radius:4px;
  border:0.1px solid #bfbfbf;
  grid-template-columns:70% 30%;
  .grid_20{
    display:grid;
    grid-template-rows:repeat(4,1fr);
  }
  .analtic{
    text-align:center;
    border:0.1px solid #bfbfbf;
    .content{
      color:#bfbfbf;
    }
    .total{
      margin:0.5rem;
      font-size:2rem;
    }
  }
}
`