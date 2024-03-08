import { AxiosResponse } from 'axios'
import { api } from '.'
import { CharacterType } from './types'

export const getAllCharacters = (): Promise<AxiosResponse> => 
    api.get(`https://hp-api.onrender.com/api/characters`)

export const getCharacters = (characterType: CharacterType): Promise<AxiosResponse> => 
    api.get(`https://hp-api.onrender.com/api/characters/${characterType}`)

export const getCharacterById = (characterID: string): Promise<AxiosResponse> => 
    api.get(`https://hp-api.onrender.com/api/character/${characterID}`)

export const getCharactersByHouse = (house: string): Promise<AxiosResponse> => 
    api.get(`https://hp-api.onrender.com/api/characters/house/${house}`)