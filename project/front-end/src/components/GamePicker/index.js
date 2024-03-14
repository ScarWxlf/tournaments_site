import React, {useEffect} from "react";

function MegaMenuDefault(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Функция для переключения видимости меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  return (
    <div className="flex justify-center">
    <div className="relative flex justify-center menu-container">
      <button
        onClick={toggleMenu}
        data-ripple-light="true"
        data-popover-target="menu"
        className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Games filters
      </button>
        <ul
          role="menu"
          data-popover="menu"
          data-popover-placement="top"
          style={{width: "400px"}}
          className={`${!isMenuOpen ? "hidden" : ""} flex gap-1 flex-wrap top-9 mt-2  absolute z-10  rounded-md border border-blue-gray-50 text-black bg-white p-1 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none`}
        >
          {props.navListMenuItems.map((item, index) => {
            return (
              <li
                key={index}
                role="menuitem"
                className="flex items-center border border-black w-48 justify-start px-2 py-2 text-sm font-normal text-blue-gray-500 rounded-md transition-all hover:bg-blue-gray-50"
              >
                <div className="flex justify-center items-center p-2">
                  {item.icon}
                </div>
                <div className="flex flex-col items-start">
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
        </div>
    </div>
  );
}

export default MegaMenuDefault;
