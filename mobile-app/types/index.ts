import { ReactElement } from "react"

export type SlideProps = {
  defaultSlide?: DefaultSlide
  successSlide?: ReactElement | false
}

type DefaultSlide = {
  slideHeader: ReactElement
  slideImage: ReactElement
  buttonText: string
  imageFooter?: string
}
