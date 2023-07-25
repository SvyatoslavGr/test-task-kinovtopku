import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto py-2 px-2 sm:px-4 flex">
        <Link className="flex items-center" href={'/'}>
          <div className="sm:mr-4 mr-2 sm:w-[100px] sm:h-[100px] w-[60px] h-[60px]">
            <Image className="object-cover object-center w-full h-full" src='/logo.png' width={100} height={100} alt="Logo"/>
          </div>
          <h1 className="sm:text-3xl text-xl uppercase text-white">Киновтопку</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header