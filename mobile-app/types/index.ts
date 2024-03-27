import { ReactElement } from "react"

export type SlideProps = {
  slideHeader: ReactElement
  slideImage: ReactElement
  buttonText?: string
  imageFooter?: string
  isImageUp?: boolean
}
