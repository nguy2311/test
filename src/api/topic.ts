
import {Topic} from '../model/topic'
import axios from "axios";
export interface fetchPhotosParam {
    size: number,
}
const client_id = '1pLUy5DMN19cEHmGfGH_XK13LY_7KDJo_zCz8xGV3G8';

export const fetchTopics = async (): Promise<Array<Topic>> => {
    try {
        const queryParam = {
            per_page: 24,
        };


        const response = await axios.get<Topic[]>(
            'https://api.unsplash.com/topics',
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

export const getTopic = async (slug: string): Promise<Topic> => {
    try {
        const response = await axios.get<Topic>(
            `https://api.unsplash.com/topics/${slug}`,
            {
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
    fetchTopics,
    getTopic
}