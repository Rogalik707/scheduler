import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://scheduler.kb-molotov.ru/api/v1/',
})


export async function createHub(params) {
  try {
    return await axiosInstance.post('/hubs', params)
  } catch (error) {
    console.log('createHub error', error)
  }
}

export async function getHubs() {
  try {
    return await axiosInstance.get('/hubs')
  } catch (error) {
    console.log('getHub error', error)
  }
}

export async function deleteHub(id) {
  try {
    return await axiosInstance.delete(`/hubs/${id}`)
  } catch (error) {
    console.log('deleteHub error', error)
  }
}

