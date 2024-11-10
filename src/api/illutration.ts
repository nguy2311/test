
import {Illustration} from '../model/illustration'
import axios from "axios";
export interface fetchPhotosParam {
    page: number,
    size: number,
    query?: string,
    order_by?: string,
    collections?: string,
    orientation?: string,
}
const client_id = '1pLUy5DMN19cEHmGfGH_XK13LY_7KDJo_zCz8xGV3G8';

export const fetchIllustrations = async (params: fetchPhotosParam): Promise<Array<Illustration>> => {
    try {
        const queryParam = {
            page: params.page,
            per_page: params.size,
        };


        const response = await axios.get<Illustration[]>(
            'https://unsplash.com/napi/illustrations',
            {
                params: queryParam,
                // headers: {
                //     Authorization: `Client-ID ${client_id}`
                // },
                // validateStatus: () => true
            }
        );
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch credentials: ${error}`);
    }
}

// export const fetchDetail = async (slug: string): Promise<ImageDetails> => {
//     try {
//         const response = await axios.get<ImageDetails>(
//             `https://api.unsplash.com/photos/${slug}`,
//             {
//                 headers: {
//                     Authorization: `Client-ID ${client_id}`
//                 },
//                 validateStatus: () => true
//             }
//         );
//         return response.data;
//     } catch (error) {
//         throw new Error(`Failed to fetch credentials: ${error}`);
//     }
// }

// export const searchPhotos = async (params: fetchPhotosParam): Promise<ImageSearchResponse> => {
//     try {
//         const queryParam = {
//             page: params.page,
//             per_page: params.size,
//             query: params.query,
//             order_by: params.order_by,
//             collections: params.collections,
//             orientation: params.orientation
//         };


//         const response = await axios.get<ImageSearchResponse>(
//             'https://api.unsplash.com/search/photos',
//             {
//                 params: queryParam,
//                 headers: {
//                     Authorization: `Client-ID ${client_id}`
//                 },
//                 validateStatus: () => true
//             }
//         );
//         return response.data;
//     } catch (error) {
//         throw new Error(`Failed to fetch credentials: ${error}`);
//     }
// }

export const PhotoAPI={
    fetchIllustrations,
}