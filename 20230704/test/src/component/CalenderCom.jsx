// 1. 헤더 부분
import React, { useState } from 'react'

const CalenderCom = (month) => {

}
const Header = () => {
    return (
        <div className="header1">
            <div className="month">JULY</div>
            <div><img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="" /></div>
        </div>
    )

}
const Header2 =()=>{
    return(
        <div className="header2">
        <div className="dateSun">Sun</div>
        <div className="date">Mon</div>
        <div className="date">Tue</div>
        <div className="date">Wed</div>
        <div className="date">Thr</div>
        <div className="date">Fri</div>
        <div className="dateSun">Sat</div>
    </div>
    )
}
const Days = () => {
    const days = [];
    days.push(' ');
    days.push(' ');
    days.push(' ');
    days.push(' ');
    days.push(' ');
    days.push(' ');
    for (let i = 1; i <= 31; i++) {
        days.push(`${i}`);
    }

    return (
  <div className="center">
        <div className="days">
        {/* arrow function에서 return이 생략할때 구별 확실하게 해야함 */}
            {days.map((day, index) =>{ return (

                <div key={index} className="daysIndex">
                    <div className='ribbon'></div>
                    {day}
                </div>
        )})}
        </div>
        </div>


    );
};


const Footer = () => {
    return (
        <div className="footer">
            <img className="img2" src="https://file.gamejob.co.kr/net/Corp/CoImage/LogoView?FN=2023\2\GJ_CoLogo_22777863.png" alt="" />
        </div>
    )
}

const Button =()=>{
    const [toggle,setState]= useState(false);;
    const handleClick = () => {
    setState(!toggle);
    };
  
}

export { CalenderCom, Header, Days, Footer,Header2,Button };
