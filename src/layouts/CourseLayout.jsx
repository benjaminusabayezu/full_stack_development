import { useState } from "react";
import { Menu ,X } from "lucide-react";

const CourseLayout = ({ children, sidebar }) => {

  const [isToggleMenuOpen,SetIsToogleMenOpen] =useState(false)
  return (
    <>
      <button
        className="fixed top-10 right-8 z-50 md:hidden bg-zinc-800 p-3 shadow-2xl rounded-full text-yellow-500
        cursor-pointer
    "
        onClick={() => SetIsToogleMenOpen((prev) => !prev)}
      >
        {isToggleMenuOpen ? (
          <X className="w-3 h-3" />
        ) : (
          <Menu className="w-4 h-4" />
        )}
      </button>
      <div
        className="
        grid grid-cols-1
        md:grid-cols-12
        min-h-[calc(100vh-64px)] gap-2 
      "
      >
        <main
          className="
          
          col-span-8
          border-r
          border-zinc-800 
        "
        >
          {children}
        </main>

        <aside
          className="
         
         hidden md:block
         md:col-span-4
        
         
        "
        >
          {sidebar}
        </aside>
      </div>
      {/* //mobile sidebar toggle */}
      {isToggleMenuOpen && (
        <>
          <div
            className={`fixed inset-0 bg-black/50 z-40 md:hidden
            transition-opacity duration-500  ${isToggleMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            onClick={() => SetIsToogleMenOpen(false)}
          >
            <aside
              className={`fixed top-0 right-0 h-full w-72 max-w-[85vw]
        bg-zinc-900/60 backdrop-blur-2xl z-50 p-4 overflow-y-auto md:hidden 
        ${isToggleMenuOpen ? "translate-x-0" :"-translate-x-full"} 
        transform transition-transform duration-500 ease-in-out hide-scrollbar`}
            >
              {sidebar}
            </aside>
          </div>
        </>
      )}
    </>
  );
};

export default CourseLayout;
