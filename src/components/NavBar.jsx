import burgerMenu from '../assets/images/icon-menu.svg'

export const NavBar = () => {
  return (
    <>
      <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:items-center sm:text-[16px] text-DarkGrayishBlue font-Inter">
        <li className='hover:text-SoftRed'>
          <a href="#">Home</a>
        </li>
        <li className='hover:text-SoftRed'>
          <a href="#">New</a>
        </li>
        <li className='hover:text-SoftRed'>
          <a href="#">Popular</a>
        </li>
        <li className='hover:text-SoftRed'>
          <a href="#">Trending</a>
        </li>
        <li className='hover:text-SoftRed'>
          <a href="#">Categories</a>
        </li>
      </ul>
      <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt="Menu hamburguesa" />
    </>
  );
};
