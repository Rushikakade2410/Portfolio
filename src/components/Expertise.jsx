import BnnerWallPaper from "../assets/banner_wallpaper.svg"
function Expertise(){
    return(
        <div className="main-container">
        <h1 className=" Font-bold text-center underline text-5xl pb-10">
            Expertise
        </h1>
        <div style={
            {
                backgroundImage: `url(${BnnerWallPaper})`,
                backgroundSize: "cover"
            }} className="box-container items-center flex mt-10 py-16">
            <div className="flex justify-center text-white">
            <div className=" w-2/3 text-center">
                <h1 className=" text-4xl font-bold">
                    I know this coding Tech
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quod accusamus nam nobis esse similique, perspiciatis voluptates, 
                </p>
                <button className="px-3 py-2 bg-orange-500 rounded-full shadow">Hire Me</button>
            </div>

            </div>
            <div className=" flex justify-center">
                <div className=" flex justify-center w-2/3 h-fit space-x-3 flex-wrap"> 
                <p className=" bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Asp.net</p>
                <p className=" bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">C#</p>
                <p className=" bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">SQL</p>
                <p className=" bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">HTML</p>
                <p className=" bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">CSS</p>
                <p className=" bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Asp.net</p>
                <p className=" bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">C#</p>
                <p className=" bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">SQL</p>
                <p className=" bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">HTML</p>
                <p className=" bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">CSS</p>
                </div>

            </div>
        </div>
        </div>
    )
}
export default Expertise;