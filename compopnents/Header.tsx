import Image from "next/image"

function Header() {
  return (
    <header>
      <Image src='/logo.png' width={100} height={100} alt="Logo"/>
      <h1>Киновтопку</h1>
    </header>
  )
}

export default Header