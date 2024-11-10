interface PreviewPhoto {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  blur_hash: string;
  asset_type: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
}

type SocialLinks = {
    instagram_username: string | null;
    portfolio_url: string | null;
    twitter_username: string | null;
    paypal_email: string | null;
};

type ProfileImage = {
    small: string;
    medium: string;
    large: string;
};

type Links = {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
};

export type Contributor = {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string | null;
    portfolio_url: string | null;
    bio: string;
    location: string | null;
    links: Links;
    profile_image: ProfileImage;
    instagram_username: string | null;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    total_illustrations: number;
    total_promoted_illustrations: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: SocialLinks;
};


export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  visibility: string;
  featured: boolean;
  total_photos: number;
  status: string;
  preview_photos: PreviewPhoto[];
  top_contributors: Contributor[];
}
