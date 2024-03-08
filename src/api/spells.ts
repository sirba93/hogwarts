import { AxiosResponse } from "axios";
import { api } from ".";

export const getAllSpells = (): Promise<AxiosResponse> =>
    api.get('https://hp-api.onrender.com/api/spells')
