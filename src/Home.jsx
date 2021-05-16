import React,{useState} from "react";
import NewYear from "./NewYear";
import Oldyear from "./Oldyear";
function Home(){
    const [text, settext] = useState({days:'',hours:"",minutes:'',second:''});
    const [gapp, setgappt] = useState(0);

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
        
setgappt(gap)
settext({days:textDay,hours:texthour,minutes:textmint,second:textsec})
    }
    setInterval(countdown,1000);
    if (gapp>0){
        return(<>
                   <Oldyear days={text.days} hours={text.hours}  minutes={text.minutes} second={text.second}/>

            </>);
    }
    else{
        return(<>
           <NewYear/>

            </>);
    }
    
}
export default Home;