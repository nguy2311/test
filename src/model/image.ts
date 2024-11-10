export interface Image {
    "id": string;
    "slug": string;
    "created_at": string;
    "updated_at": string;
    "promoted_at": string;
    "width": number;
    "height": number;
    "color": string;
    "blur_hash": string;
    "description": string;
    "alt_description": string;
    "breadcrumbs":  Array<any>;
    "urls": {
        "raw": string;
        "full": string;
        "regular": string;
        "small": string;
        "thumb": string;
        "small_s3": string;
    },
    "links": {
        "self": string;
        "html": string;
        "download": string;
        "download_location": string;
    },
    "likes": number;
    "liked_by_user": boolean;
    "current_user_collections": Array<any> ;
    "sponsorship": string;
    "topic_submissions": {
        "travel": {
            "status": string;
        },
        "street-photography": {
            "status": string;
        }
    },
    "asset_type": string;
    "user": {
        "id": string;
        "updated_at": string;
        "username": string;
        "name": string;
        "first_name": string;
        "last_name": string;
        "twitter_username": string;
        "portfolio_url": string;
        "bio": string;
        "location": string;
        "links": {
            "self": string;
            "html": string;
            "photos": string;
            "likes": string;
            "portfolio": string;
            "following": string;
            "followers": string;
        },
        "profile_image": {
            "small": string;
            "medium": string;
            "large": string;
        },
        "instagram_username": string;
        "total_collections": number;
        "total_likes":number;
        "total_photos": number;
        "total_promoted_photos":number;
        "total_illustrations": number;
        "total_promoted_illustrations": number;
        "accepted_tos": boolean;
        "for_hire": boolean;
        "social": {
            "instagram_username": string;
            "portfolio_url": string;
            "twitter_username": string;
            "paypal_email": string;
        }
    }
}

export interface ImageDetails {
    id: string;
    slug: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    urls: {
      raw: string;
    };
    exif: {
        make?: string;
        model?: String;
        name?: string;
        exposure_time?: string;
        aperture?: string;
        focal_length?: string;
        iso?: number;
    },
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship: null | object;
    topic_submissions: {
      travel?: {
        status: string;
        approved_on: string;
      };
      wallpapers?: {
        status: string;
        approved_on: string;
      };
    };
    asset_type: string;
    user: {
      id: string;
      username: string;
      name: string;
      portfolio_url: string;
      bio: string;
      location: string;
      profile_image: {
        small: string;
        medium: string;
        large: string;
      };
      instagram_username: string;
      accepted_tos: boolean;
      for_hire: boolean;
      social: {
        instagram_username: string;
        portfolio_url: string;
        twitter_username: string | null;
        paypal_email: string | null;
      };
    };
    location: {
      name: string;
      city: string | null;
      country: string;
      position: {
        latitude: number;
        longitude: number;
      };
    };
    meta: {
      index: boolean;
    };
    public_domain: boolean;
    tags: {
      type: string;
      title: string;
    }[];
    views: number;
    downloads: number;
    topics: {
      id: string;
      title: string;
      slug: string;
      visibility: string;
    }[];
  }
  

export interface ImageSearchResponse{
    results: Image[];
    total: number;
    total_pages: number;
}