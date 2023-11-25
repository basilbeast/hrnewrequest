function Nav() {
    return (
      <nav className="w-[100%] h-[50px] bg-orange-500 absolute top-0 left-0 flex items-center justify-between px-5">
        <h1 className="text-[18px] font-bold text-slate-50">HR user requester</h1>
        <ul className="flex items-center gap-3">
          <li className="bg-black text-slate-50 text-[15px] rounded-xl p-2 focus:outline-none">
            <a className="w-[100%] h-full" href="/">Recent Changes</a>
          </li>
          <li className="bg-black text-slate-50 text-[15px] rounded-xl p-2 focus:outline-none">
            <a className="w-[100%] h-full" href="/Approvals">Approvals</a>
          </li>
          <li className="bg-black text-slate-50 text-[15px] rounded-xl p-2 focus:outline-none">
            <a className="w-[100%] h-full" href="/NewForm">New Form</a>
          </li>
        </ul>
      </nav>
    )
  }
  
  export default Nav