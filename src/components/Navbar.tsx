'use client'
import Link from "next/link";
import Image from "next/image";
import { routes } from "../../constants";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname();
  const isLoggedIn = true;

  return (
    <header className='bg-l_orange'>
      <div className="container h-20 flex justify-between items-center">
        {/* LOGO CONTAINER  */}
        <div className="cursor-pointer">  
          <Image src={'/Frame 18.png'} alt="" width={170} height={70}/>
        </div>
        {/* CENTER CONTAINER  */}
        <div className="hidden md:flex items-center justify-between gap-8 ">
          {
            routes.map((e) => {  
              return (
                <Link href={e.path} className={`font-semibold hover:text-black ${e.path === pathname ? "text-black" : "text-font-gray" }`}>
                  { e.label }
                </Link>
              )
            })
          }
        </div>
        {/* RIGHT CONTAINER  */}
        <div className="hidden md:flex gap-4 items-center">
          {/* <SearchInput/> */}
          <div className="">
            {
              isLoggedIn == true ? 
                <Button className="" variant={'primary'}>
                  Login
                </Button>
              :
              <div className="hidden md:flex gap-2">
                <Image src={'/user.svg'} width={40} height={40} alt='avatar' className=' cursor-pointer w-[40px] h-[40px] ring-2 ring-primary rounded-full p-1'/>
                <div className="size-[40px] p-1.5 rounded-full cursor-pointer ring-2 ring-primary">
                  <Image src={'/shopping-cart.svg'} width={40} height={40} alt="" className='size-full object-contain'/>
                </div>
              </div>
            }
          </div>
        </div>
        {/* MOBILE CONTAINER  */}
        <div className="md:hidden">
          <Image src={'/menu.svg'} width={50} height={50} alt="" className='size-[35px] cursor-pointer'/> 
        </div>
      </div>
    </header>
  )
}

export default Navbar
