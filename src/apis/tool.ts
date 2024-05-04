import { instance } from '@/libs/api'

export const getToolList = async () => {
  const response = await instance.get(`/list`)
  return response.data
}
