export interface Collection {
    "id": string;
    "title": string;
    "user": {
        "id": string;
        "name": string;
    },
    "cover_photo": {
        "id": string;
        "urls": {
            "raw": string;
            "small": string;
        },
        "alt_description": string;
    },
}

