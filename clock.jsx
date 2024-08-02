import React, {useState, useEffect} from "react"
function Clock(){
    const [time,settime]=useState(new Date())
    useEffect(()=>{
        const interval=setInterval(()=>{
            settime(new Date())
        },1000)

        return ()=>{
            clearInterval(interval)
        }
    },[])
    function formattime(){
        let hours=time.getHours()
        let minutes=time.getMinutes()
        let seconds=time.getSeconds()
        let meridiem=hours>=12 ? "PM" : "AM"
        hours=hours%12
        return `${zero(hours)}:${zero(minutes)}:${zero(seconds)} ${meridiem}`
    }
    function zero(num){
        return(num<10? "0" : "")+num
    }
    return(
    <div className="clk-con">
        <div className="clock">
            <p>{formattime()}</p>
        </div>
    </div>
    )
}
export default Clock