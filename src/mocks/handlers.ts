import { HttpResponse, http } from 'msw'

export const handlers = [
  http.get('*/test', () => {
    return HttpResponse.json({ message: 'hello' })
  }),
]
