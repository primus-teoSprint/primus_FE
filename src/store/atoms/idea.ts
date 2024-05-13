import { typeDatas } from '@/constants/idea'
import { atom } from 'jotai'

export const selectedIdeaTypeAtom = atom(typeDatas[0])
