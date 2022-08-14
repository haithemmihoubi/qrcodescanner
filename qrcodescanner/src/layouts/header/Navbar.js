import {Link} from "react-router-dom";

export function Navbar()  {

    return (
      <div className="navbar" >
          <nav className="flex justify-center space-x-4 bg-blue-500 shadow-md p-3" >
              <Link to="/"  class="font-me px-3 py-2 text-white font-bold rounded-lg hover:bg-slate-100 hover:text-slate-900" >Generate Qr code</Link>
              <Link to="/scan" class="font-me px-3 py-2 text-white font-bold rounded-lg hover:bg-slate-100 hover:text-slate-900" >Scan Qr code</Link>
          </nav>
      </div>
);

}