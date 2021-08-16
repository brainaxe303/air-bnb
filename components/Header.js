import Image from "next/image";

import{
  GlobalAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
  GlobeAltIcon
}from '@heroicons/react/solid';
function Header(){
  return(
    <header className='sticky top-0 z-50 shadow-md grid py-5 px-5 md:px-10 grid-cols-3'>
      {/* left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto '>
        <Image
         src="https://links.papareact.com/qd3"
         layout="fill"
         objectFit="contain" 
         objectPosition="left"

         />

      </div>

      {/* middle */}
      <div className=" flex items-center
       md:border-2 rounded-full py-2
        md:shadow-sm " >
        <input className="flex-grow pl-5
         bg-transparent outline-none text-gray-600 text-sm placeholder-gray-400" 
         type="text" 
         placeholder="Start Your Search" 

         />
        <SearchIcon className="md:mx-2 hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />

      </div>

      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
       <p className="hidden md:inline">Become a host</p>
       <GlobeAltIcon className="h-6 cursor-pointer"/>

       <div className=" flex items-center space-x-2 border-2 p-2 rounded-full">
         <MenuIcon className="h-6"/>
         <UserCircleIcon className="h-6"/>
       </div>

      </div>
    </header>
  );
}
export default Header;