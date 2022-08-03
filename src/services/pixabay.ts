import axios from 'axios'

const pixabayInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  params: {
    key: import.meta.env.VITE_API_KEY
  }
})

export async function getImagesByQuery(params: {
  searchText: string
  pageNumber: number
}) {
  if (!params.searchText) return { hits: [], total: 0, totalHits: 0 }
  try {
    const response = await pixabayInstance.get('/', {
      params: {
        q: params.searchText,
        image_type: 'photo',
        page: params.pageNumber,
        per_page: 30
      }
    })
    return response.data
  } catch (error) {
    return error
  }
}

// TODO: Filter by cateogory
export async function getImagesByCategory() {
  return ''
}
