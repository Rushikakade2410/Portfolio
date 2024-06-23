import Bannerimg from "../assets/bi1.png"
import BnnerWallPaper from "../assets/banner_wallpaper.svg"
import Typed from "typed.js";
import { useEffect, useRef } from "react";
function Banner() {
    const el = useRef(null);
    
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-end Developer", "Back-end Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 200,
      typeSpeed: 60,
      backSpeed: 50,
      backDelay: 50,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
    return (
        <div style={
            {
                backgroundImage: `url(${BnnerWallPaper})`,
                backgroundSize: "cover"
            }
        } className="main-container flex items-center">
            <div className=" w-full flex justify-center text-white">
                <div className=" w-2/3 ms-10">
                    <h3 className=" text-3xl font-semibold">Hi, I am</h3>
                    <h1 className=" mt-3 text-5xl font-bold">Rushi</h1>
                    <h2 className=" mt-3 text-3xl">I am <span ref={el}></span></h2>
                    <p className=" mt-3 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veritatis unde debitis magni, eveniet ducimus est dolores</p>
                    <div className="icon-container space-x-5 mb-4">
                    <i class="fa-brands text-4xl fa-facebook"></i>
                    <i class="fa-brands text-4xl fa-instagram"></i>
                    <i class="fa-brands text-4xl fa-linkedin"></i>
                    </div>
                    <a className="px-3 py-2 bg-orange-500 rounded-full shadow" href="/contact">Contact Me</a>
                </div>

            </div>
            <div className=" w-full flex justify-center">
                <img className=" rounded-full shadow-lg w-fit" src={Bannerimg} alt="" />

            </div>
        </div>
    )
}
export default Banner;