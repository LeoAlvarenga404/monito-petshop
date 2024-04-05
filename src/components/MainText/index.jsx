import { Button } from "../Button";
import { MainTextContainer } from "./style";

export function MainText(){
  return(
    <MainTextContainer>
      <div>
        <h1>One More Friend</h1>
        <h2>Thousands More Fun!</h2>
      </div>
      <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
      <div className="button-wrapper">
        <Button isMore content={'View Intro'}/>
        <Button content={'Explore Now'}/>
      </div>
    </MainTextContainer>
  )
}