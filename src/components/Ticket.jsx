import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BsCircle} from "react-icons/bs";

function Ticket() {
  return (
    <Section>
      <div className='ticket'>
        <div className='tic_1'>
          <div className='tic'>
            <h1 style={{fontSize:15}}>Unresolved tickets</h1>
            <p style={{color:"blue",fontSize:13,cursor:"pointer"}}>View details</p>
          </div>
          <div className='local'>
              <p style={{color:"#999999"}}>Group:<span style={{color:"black",fontStyle:"bold"}}> Support</span></p>
          </div>
          <div className='c1'>
              <p>Waiting on Feature Request</p>
              <p style={{color:"#999999"}}>4238</p>
          </div>
          <hr style={{color:"#999999",marginTop:10}}/>
          <div className='c2'>
              <p>Awaiting Customer Response</p>
              <p style={{color:"#999999"}}>1005</p>
          </div>
          <hr style={{color:"#999999",marginTop:15}}/>
          <div className='c3'>
              <p>Awaiting Customer Fix</p>
              <p style={{color:"#999999"}}>914</p>
          </div>
          <hr style={{color:"#999999",marginTop:15}}/>
          <div className='c4'>
              <p>Pending</p>
              <p style={{color:"#999999"}}>281</p>
          </div>
        </div>
      </div>

      <div className='task'>
        <div className='t_0'>
          <div className='t_1'>
            <h1 style={{fontSize:15}}>Tasks</h1>
            <p style={{color:"blue",fontSize:13,cursor:"pointer"}}>View all</p>
          </div>
          <div className='t_l'>
              <p style={{color:"#999999"}}>Today</p>
          </div>
          <div className='t1'>
              <p style={{color:"#999999"}}>Create new task</p>
              <p style={{color:"#999999"}}><span><FontAwesomeIcon icon="square-plus"/></span></p>
          </div>
          <hr style={{color:"#999999",marginTop:10}}/>
          <div className='t2'>
              <p><BsCircle/><span>Finish ticket update</span></p>
              <p style={{color:"#999999"}}><button>URGENT</button></p>
          </div>
          <hr style={{color:"#999999",marginTop:15}}/>
          <div className='t3'>
              <p><BsCircle/><span>Create new ticket example</span></p>
              <p style={{color:"#999999"}}><button>New</button></p>
          </div>
          <hr style={{color:"#999999",marginTop:15}}/>
          <div className='t4'>
              <p><FontAwesomeIcon icon="circle-check"/><span>Update ticket report</span></p>
              <p style={{color:"#999999"}}><button>DEFAULT</button></p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Ticket

const Section = styled.section`
  display: grid;
  grid-template-columns:repeat(2,1fr);
  gap:1rem;
  .ticket{
    display:grid;
    border:1px solid #e6e6e6;
    border-radius:8px;
    gap:1rem;
    margin-top:1rem;
    .tic_1{
      margin:1.5rem;
      .tic{
        display:flex;
        justify-content:space-between;
      }
      .local{
        margin:0rem;
        font-size:11px;
        margin-top:0.2rem;
    
      }
      .c1{
        display:flex;
        justify-content:space-between;
        margin-top:2rem;
        font-size:15px;
      }
      .c2{
        display:flex;
        justify-content:space-between;
        margin-top:1rem;
        font-size:15px;
      }
      .c3{
        display:flex;
        justify-content:space-between;
        margin-top:1rem;
        font-size:15px;
      }
      .c4{
        display:flex;
        justify-content:space-between;
        margin-top:1rem;
        font-size:15px;
      }
    }
  }
  .task{
    display:grid;
    border:1px solid #e6e6e6;
    border-radius:8px;
    gap:1rem;
    margin-top:1rem;
    .t_0{
      margin:1.5rem;
      .t_1{
        display:flex;
        justify-content:space-between;
      }
      .t_l{
        margin:0rem;
        font-size:11px;
        margin-top:0.2rem;
    
      }
      .t1{
        display:flex;
        justify-content:space-between;
        margin-top:2rem;
        font-size:15px;
        span{
          background-color:white;
        }
      }
      .t2{
        display:flex;
        justify-content:space-between;
        margin-top:1rem;
        font-size:15px;
        span{
          padding:1rem;
          color:black;
        }
        button{
          background-color: #ffcc00;
          width:6rem;
          height:1.5rem;
          border:0.1px #ffcc00;
          border-radius:0.5rem;
          color:white;
        }
      }
      .t3{
        display:flex;
        justify-content:space-between;
        margin-top:1rem;
        font-size:15px;
        span{
          padding:1rem;
          color:black;
        }
        button{
          background-color: #00e699;
          width:4rem;
          height:1.5rem;
          border:0.1px #ffcc00;
          border-radius:0.5rem;
          color:white;
        }
      }
      .t4{
        display:flex;
        justify-content:space-between;
        margin-top:1rem;
        font-size:15px;
        p{
          color:blue;
          span{
            padding:1rem;
            color:black;
          }
        }
        button{
          background-color:#f2f2f2;
          width:6rem;
          height:1.5rem;
          border:0.1px #ffcc00;
          border-radius:0.5rem;
          color:#595959;
        }
      }
    }
  }
`