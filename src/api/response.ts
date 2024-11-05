import {  BaseResponseServer  } from "@/model/response";
import { AxiosResponse } from "axios";



export const handleBaseResponseServer = <T>(res: AxiosResponse<BaseResponseServer<T>>): Promise<BaseResponseServer<T>> => {
    return new Promise((resolve, reject) => {
        if (res.status === 200) {
            if (res.data) {
                resolve(res.data);
            } else {
                reject(new Error(res.data || "Unknown error occurred"));
            }
        } else {
            reject(new Error(`Request failed with status ${res.status}`));
        }
    });
};

