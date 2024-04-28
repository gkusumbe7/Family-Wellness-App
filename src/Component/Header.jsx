const Header = ()=>{
    return (
        <>
        <div className="flex flex-col">
            <div className="space-y-2">
                <h1 className="text-4xl text-pink-700 font-sans font-semibold" >Family Wellness</h1>
                <p className="text-gray-600 font-semibold">MASSAGE THERAPY</p>
            </div>
            <div className="flex  text-xl bg-gray-400 text-white font-semibold justify-around text-center">
                <a href="" className="hover:bg-pink-700 w-44 p-1">HOME</a>
                <a href="" className="hover:bg-pink-700 w-44 p-1">ABOUT</a>
                <a href="" className="hover:bg-pink-700 w-44 p-1">SERVICES</a>
                <a href="" className="hover:bg-pink-700 w-44 p-1">FAQ</a>
                <a href="" className="hover:bg-pink-700 w-44 p-1">CONTACT</a>
            </div>
        </div>
        </>
    );
}
export default Header;