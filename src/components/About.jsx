import { useState } from "react";
import AboutImg from "../assets/bi2.png"
function About(){
    const[Data, setData]= useState({
        img: AboutImg,
        Title: "Front-End Devloper",
        disc1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda expedita corrupti explicabo, dicta maiores? Molestias commodi nostrum provident sequi aliquid ad dolorum vero repellendus quibusdam iure? Nihil, officia commodi?",
        disc2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident in, pariatur, dolore itaque nihil tenetur rem iusto dignissimos dolor nulla hic incidunt quo perferendis neque repudiandae odio qui adipisci!",
    })
    return(
        <div className="main-container bg-gray-100 py-14">
            <h1 className=" Font-bold text-center underline text-5xl pb-10">About Me</h1> 
            <div className="flex items-center">
                <div className=" w-full flex justify-center">
                    <img className="w-fit" src={Data.img} alt="Rushiimg"/>
                </div>
                <div className="w-full flex justify-start">
                    <div className=" w-2/3">
                    <h1 className=" text-5xl  font-semibold pb-5">{Data.Title}</h1>
                    <p>
                        {Data.disc1}
                    </p>
                    <p>
                 {
                    Data.disc2
                 }
                    </p>
                    <button className="px-3 py-2 bg-orange-500 rounded-full shadow">Read More</button>

                    </div>
               
                </div>

            </div>
        </div>

    )
}
export default About;