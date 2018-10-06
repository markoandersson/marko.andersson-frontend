import axios from 'axios'

export const getResumeAsJson = async () => {
  let response = await axios.get(process.env.VUE_APP_RESUME_URL)

  return response.data
}

export const getReadBooks = async () => {
  let response = await axios.get(process.env.VUE_APP_BOOKS_URL)

  return response.data

}
