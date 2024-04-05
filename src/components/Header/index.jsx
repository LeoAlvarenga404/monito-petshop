
import { LogoMonito } from "../logo";
import { Button } from "../Button";
import { HeaderContainer } from "./style";
import { MagnifyingGlass, List } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <List size={32} className="menubar"/>
      <LogoMonito/>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="input-wrapper">
        <MagnifyingGlass size={24} fill='#5a5f64'/>
        <input type="text" placeholder="Search something here!" />
      </div>
      <Button content='Login'/>
    </HeaderContainer>
  )
}
