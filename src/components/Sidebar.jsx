import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Sidebar() {
  return (
    <Section>
        <div className='top'>
            <div className='brand'>
            <FontAwesomeIcon icon="gauge" />
                <span>Dashboard Kit</span>
            </div>
            <div className='links'>
                <ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon="chart-pie" />
                            <span className='border'>Overview</span>
                        </a>
                    </li>
                </ul>
            </div>
                <div className='links'>
                    <ul>
                        <li>
                            <a href="/ticket">
                                <FontAwesomeIcon icon="ticket" />
                                <span className='border'>Tickets</span>
                            </a>
                        </li>
                    </ul>
                </div>
            <div className='links'>
                <ul>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon="lightbulb" />
                            <span className='border'>Ideas</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='links'>
                <ul>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon="people-group" />
                            <span className='border'>Contacts</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='links'>
                <ul>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon="user-tie" />
                            <span className='border'>Agents</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='links'>
                <ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon="newspaper" />
                            <span className='border'>Articles</span>
                        </a>
                    </li>
                </ul>
            </div>
            <hr style={{borderColor: '#8894aa'}}/>
            <div className='links'>
                <ul>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon="gear" />
                            <span className='border'>Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='links'>
                <ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon="award"/>
                            <span className='border'>Subscription</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </Section>
  )
}

export default Sidebar

const Section = styled.section`
position:fixed;
left:0;
background-color:#262626;
height:100vh;
width:18vw;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
padding:2rem 0;
gap: 2rem;
.top{
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    width:100%;
    .brand{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:1.3rem 0;
        svg{
            color:blue;
            font-size:2rem;
        }
        span{
            font-size:1.2rem;
            font-weight:bold;
            color:white;
        }
    }
    .links{
        display:flex;
        justify-content:center;
        ul{
            list-style-type:none;
            display:flex;
            flex-direction:column;
            gap:1rem;
            li{
                padding:0.5rem 3rem;
                border-radius: 0.1rem;
                &:hover{
                    background-color:#333333;
                    a{
                        color:black;
                    }
                    svg{
                        color:#e6e6ff
                    }
                    span{
                        color:#e6e6ff
                    }
                }
                a{
                    text-decoration:none;
                    display:flex;
                    gap:1rem;
                    color:grey;
                    svg{
                        font-size:1.4rem;
                        color:#556177;
                    }
                    span{
                        display:flex;
                        gap:2rem;
                        color:white;
                    }
                }
            }
            .active{
                background-color:black;
                a{
                    color:white;
                }
            }
        }
    }
}
`
;