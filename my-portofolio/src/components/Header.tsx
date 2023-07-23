

const Header = () => {
  return (
    <div className="flex justify-between item-center">
      <p className="font-bold text-2xl text-black/70 cursor-pointer">SHEBA</p>
      <nav>
        <ul className="flex gap-5 text-semibold text-black text-lg ">
            <li className="hover:border-b-2 hover:border-purple-800 cursor-pointer">Home</li> 
            <li className="hover:border-b-2 hover:border-purple-800 cursor-pointer">About</li>
            <li className="hover:border-b-2 hover:border-purple-800 cursor-pointer">Projects</li>
            <li className="hover:border-b-2 hover:border-purple-800 cursor-pointer">Contact</li>
        </ul>
      </nav>
      <button className="bg-purple-800 text-white text-lg px-5 py-1 rounded-xl font-semibold hover:bg-purple-700 hover:border-2">Resume</button>
    </div>
  )
}

export default Header
