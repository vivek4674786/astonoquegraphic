import { Children } from "react";

export default function Card({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
        {children}
      </div>
    </>
  )
}
