import React from 'react'
import styled from "styled-components";
import { menuData } from "../data/MenuData"
import {Link} from "gatsby"
import PDF from '../DylanKroftCV.pdf'

const Dropdown = () => {
    return (
        <Ddown>
            <Buffer></Buffer>
            {menuData.map((item, index) => (
                <div>
                    <NavLink to={item.link} key={index}>
                        {item.title}
                    </NavLink>
                </div>
            ))}
            <NavLink><a href={PDF}>CV</a></NavLink>
            <Buffer></Buffer>

        </Ddown>

    )
}

export default Dropdown

const Ddown = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        transition-delay: 2s;
        width: 100%;
        height: auto;
        position:fixed;
        left: 0;
        top: 0;
        z-index: 90;
        display: flex;
        flex-direction: column;
        background-color: #070912;
        -webkit-box-shadow: 0px 3px 13px 3px #070912; 
        box-shadow: 0px 3px 13px 3px #070912;
        font-weight: 300;
        font-size: 1.75em;
        
    }

`
const NavLink = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    display: flex; 
    justify-content: center; 
    align-items: center;
    height: 80px;
    background-color: #070912;
 
    :hover {
        background-color: #0D1224;
        text-decoration:none;
        color: white;

    }

`   

const Buffer = styled.div`
    height: 80px;
    background-color: #070912;
`
