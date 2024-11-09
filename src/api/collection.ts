
import { Collection } from '@/model/colection';
import axios from "axios";
export interface fetchPhotosParam {
    page: number,
    size: number,
}
const client_id = '1pLUy5DMN19cEHmGfGH_XK13LY_7KDJo_zCz8xGV3G8';

export const fetchColections = async (params: fetchPhotosParam): Promise<Array<Collection>> => {
    try {
        const queryParam = {
            page: params.page,
            per_page: params.size,
        };


        const response = await axios.get<Collection[]>(
            'https://api.unsplash.com/collections',
            {
                params: queryParam,
                headers: {
                    Authorization: `Client-ID ${client_id}`
                },
                validateStatus: () => true
            }
        );
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch credentials: ${error}`);
    }
}


export const PhotoAPI={
    fetchColections
}