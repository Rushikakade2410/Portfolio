import { useState } from "react";

function Header(){
    const [Name,setName]=useState("Rushi");
    const [MenuLink,setMenuLink]=useState([
        {
            text:"Home",
            link:"/Home",
            id:1,
        },
        {
            text:"About",
            link:"/About",
            id:2,
        },
        {
            text:"Skills",
            link:"/Skills",
            id:3,
        },
        {
            text:"Portfolio",
            link:"/Portfolio",
            id:4,
        },
        {
            text:"Contact",
            link:"/Contact",
            id:5,
        }
      
    ]);
    const [HireButton,setHireButton]=useState(
        {
            ButtonName:"Hire me",
            Link:"/Hire"
        }
    )
    
    return(
        <>
        <div className="main h-20 flex justify-between border items-center px-16 bg-gray-100">
            <div className=" text-2xl font-bold">{Name}</div>
            <div className=" space-x-3">
                {
                    MenuLink.map((linkmap)=>(
                        <a key={linkmap.id} href={linkmap.link} className="hover:text-orange-600">{linkmap.text}</a>
                    ))
                }
                {/* <a href="/home" className=" hover:text-orange-600">Home</a>
                <a href="/About" className=" hover:text-orange-600">About</a>
                <a href="/Skills" className=" hover:text-orange-600">Skills</a>
                <a href="/Portfolio" className=" hover:text-orange-600">Portfolio</a>
                <a href="/Contact" className=" hover:text-orange-600">Contact</a> */}
            </div>
            <div>
                <a href={HireButton.link} className=" bg-orange-500 px-4 py-2 shadow rounded-full text-1xl">{HireButton.ButtonName}</a>
            </div>

        </div>
        </>
    )
}
export default Header; 