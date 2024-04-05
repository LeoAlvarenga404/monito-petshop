import { Header } from "../../components/Header";
import { MainText } from "../../components/MainText";
import { Container, BackgroundHeaderAndHero, ContentHero } from "./style";
import imghero from '../../assets/img-hero.svg'
export function Home() {
  return (
    <Container>
      <BackgroundHeaderAndHero>
        <Header/>
        <ContentHero>
          <MainText/>
          <img src={imghero} alt="Imagem de uma mulher feliz segurando um cachorro" />
        </ContentHero>
      </BackgroundHeaderAndHero>
    </Container>
  )
}

