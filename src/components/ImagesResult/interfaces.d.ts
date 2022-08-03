import { Ref } from 'react'

interface Image {
  id: number
  type: string
  tags: string
  previewURL: string
  previewWidth: number
  previewHeight: number
  views: number
  likes: number
  comments: number
  pageURL: string
}

export interface ImageCardPros {
  imageItem: Image
}

export interface ImagesResultProps {
  data:
    | {
        hits: Image[]
        total: number
        totalHits: number
      }
    | undefined
  isLoading: boolean
  isError: boolean
  lastItemRef: Ref | undefined
}
