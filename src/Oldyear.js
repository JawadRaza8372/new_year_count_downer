import React from 'react'

function Oldyear({days,hours,minutes,second}) {
    return (
        <>
          <section className="coming-soon">
        <div>
        <h2>We are opening up soon!</h2>
        <div className="countdown">
            <div className="container_day">
        <h3 className="day">{days}</h3>
        <h6>day</h6>
        
            </div>
            <div className="container_hour">
            <h3 className="hour">{hours}</h3>
        <h6>hour</h6>
        </div>
         <div className="container_mints">
         <h3 className="mints">{minutes}</h3>
        <h6>mint</h6>
        </div>
         <div className="container_sec">
         <h3 className="second">{second}</h3>
        <h6>second</h6>
        </div>
        </div>
        
        </div>
        <img className="imgs" src="https://image.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg" alt="coming soon"/>
            </section>   
        </>
    )
}

export default Oldyear
