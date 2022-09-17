import React from 'react'
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import {MdOutlineHorizontalRule} from "react-icons/md";

function Sales() {
    return (
        <Section>
        <div className="trends">
            <div className="trends_details">
              <div>
                <h4>Today's Trends</h4>
                <p>as of May 2019,09:41PM</p>
              </div>
              <div className='butt'>
                  <span style={{color:"blue",fontSize:20}}><MdOutlineHorizontalRule/></span>
                  <p style={{marginTop:5}}>Today</p>
                  <span style={{fontSize:20}}><MdOutlineHorizontalRule/></span>
                  <p style={{marginTop:5}}>Yesterday</p>
              </div>
            </div>
      <div className="sales__graph">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
            }}
          >
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#668DFF" stopOpacity={0.4} />
                <stop offset="85%" stopColor="#D4E0FF" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip cursor={false} />
            <Area
              type="monotone"
              dataKey="data2"
              stroke="grey"
              fill="url(#colorview)"
            />
            <Area
              type="monotone"
              dataKey="data1"
              stroke="#668DFF"
              fill="url(#colorview)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
        </div>
        </Section>
    )
}

export default Sales
const data = [
    {
      data2: 2000,
      data1: 2400,
    },
    {
      data2: 4000,
      data1: 1398,
    },
    {
      data2: 5000,
      data1: 12800,
    },
    {
      data2: 8780,
      data1: 3908,
    },
    {
      data2: 9890,
      data1: 4800,
    },
    {
      data2: 11390,
      data1: 3800,
    },
    {
      data2: 3490,
      data1: 4300,
    },
  ];
  const Section = styled.section`
  .trends {
    color: black;
    width: 100%;
    .trends_details {
      display:flex;
      justify-content:space-between;
      margin: 0.4rem 1rem;
      h4{
        font-size:15px;
      }
      p{
        font-size:8.5px;
        color:#bfbfbf
      }
      .butt{
        display:flex;
        gap:0.4rem;
      }
    }
    .sales__graph {
      height: 16.9rem;
      width: 100%;
      .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
      color : white !important;
    }
  }
  
  `;