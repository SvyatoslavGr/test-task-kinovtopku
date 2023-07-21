import Image from "next/image"

function Header() {
  return (
    <header>
      <Image src='/logo.png' width={200} height={200} alt="Logo"></Image>
      <h1>Киновтопку</h1>
    </header>
  )
}

export default Header