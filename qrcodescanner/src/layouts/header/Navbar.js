import {useState} from "react";
export function Navbar()  {

    return (
      <div className="navbar">

          <nav className="flex justify-center space-x-4">
              <a href="/dashboard"
                 className="font-me px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Generate Qr code</a>
              <a href="/team"
                 className="font-me px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Scan QrCode</a>
          </nav>
      </div>
);

}