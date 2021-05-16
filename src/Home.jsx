import React,{useState} from "react";
function Home(){
    const [text, settext] = useState({days:'',hours:"",minutes:'',second:''});
    const countdown=()=>{
        const countDate=new Date("January 1 ,2022 12:02:00").getTime();
        const now=new Date().getTime();
        let gap= countDate-now;
        const sec=1000;
        const minut=sec*60;
        const hour=minut*60;
        const day=hour*24;
        const textsec=Math.floor((gap%minut)/sec);
        const textmint=Math.floor((gap%hour)/minut);
        const texthour=Math.floor((gap%day)/hour);
        const textDay=Math.floor(gap/day);

        

settext({days:textDay,hours:texthour,minutes:textmint,second:textsec})
    }
  
    setInterval(countdown,1000);
    return(<>
    <section className="coming-soon">
<div>
<h2>We are opening up soon!</h2>
<div className="countdown">
    <div className="container_day">
<h3 className="day">{text.days}</h3>
<h6>day</h6>

    </div>
    <div className="container_hour">
    <h3 className="hour">{text.hours}</h3>
<h6>hour</h6>
</div>
 <div className="container_mints">
 <h3 className="mints">{text.minutes}</h3>
<h6>mint</h6>
</div>
 <div className="container_sec">
 <h3 className="second">{text.second}</h3>
<h6>second</h6>
</div>
</div>

</div>
<img src="https://image.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg" alt="coming soon"/>
    </section>
        
    </>);
}
export default Home;