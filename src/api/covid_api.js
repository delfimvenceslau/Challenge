import { api } from "../config/BaseURL"


export const getCountriesData = async () => {
    try {
        const response = await api.get('/countries');
        return response.data.data;
    } catch (error) {
        console.error('Erro ao obter os dados dos países:', error);
        throw error;
    }
};