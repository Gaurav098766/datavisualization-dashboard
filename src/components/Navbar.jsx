import React from 'react'
import styled from 'styled-components'
import {MdNotificationAdd} from 'react-icons/md'
import {BiSearch} from 'react-icons/bi'

function Navbar() {
  return (
    <Nav>
        <div className='title'>
            <h1>Overview</h1>
        </div>
        <div className='notification'>
            <div className='icon'>
                <BiSearch/>
                {/* <br/> */}
                <MdNotificationAdd/>
                <span>|</span>
                <h1 style={{color:"black",fontSize:12}}>Jones Ferdinand</h1>
                <div className='image'>
                    <img src={"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt=""/>
                </div>
            </div>
        </div>
    </Nav>
  )
}

export default Navbar

const Nav =styled.nav`
display: flex;
justify-content:space-between;;
color:white;
.title{
    h1{
        margin-left:0.1rem;
        color:black;
        font-weight:bold;
    }
}
.notification{
    display: flex;
    align-items: center;
    .icon{
        display:flex;
        align-items:center;
        gap:1rem;
        svg{
            color:black;
            cursor:pointer;
        }
        span{
            color:black;
        }
        .image{
            display:flex;
            gap:1rem;
            img{
                height: 2.5rem;
                width: 2.5rem;
                border-radius: 3rem;
                cursor:pointer;
            }
        }
    }
}
`