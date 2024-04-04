import { Logo } from "../../assets/logo";
import { Button } from "../Button";
import { HeaderContainer } from "./style";
import { MagnifyingGlass } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <Logo/>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Category</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <div className="input-wrapper">
        <MagnifyingGlass size={24}/>
        <input type="text" placeholder="Search something here!" />
      </div>
      <Button content='Login'/>
    </HeaderContainer>
  )
}