import { ButtonContainer } from "./style";
import { CaretRight, Play } from '@phosphor-icons/react'
export function Button({content, isMore, isView}){
  return(
    <ButtonContainer
      isMore={isMore}
      isView={isView}>
      {content}
      <CaretRight weight="bold" size={14}/>
      <Play size={16}/>
    </ButtonContainer>
  )
}