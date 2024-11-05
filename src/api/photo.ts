import {BaseResponseServer} from '../model/response'
import {Image} from '../model/image'
import axios from "axios";
import {listPhotoAPI} from "./base";
import { handleBaseResponseServer } from "./response";
export interface fetchPhotosParam {
    page: number,
    size: number,
    query?: string,
    order_by?: string,
    collections?: string,
    orientation?: string,
    client_id: string
}

const pagination = async (params: fetchPhotosParam) : Promise<BaseResponseServer<Array<Image> | null>> => {
    const { page = 1, size = 12, client_id ='1pLUy5DMN19cEHmGfGH_XK13LY_7KDJo_zCz8xGV3G8' } = params;
    const queryParam = {
        page,
        per_page: size,
        client_id,
        query: params.query,
        order_by: params.order_by,
        collections: params.collections,
        orientation: params.orientation
    };

    const res = await axios.get(listPhotoAPI, { params: queryParam });
    return handleBaseResponseServer(res);
}

export const PhotoAPI={
    pagination
}