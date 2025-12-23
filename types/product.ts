export interface SEO {
    metaTitle?: string;
    metaDescription?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImageUrl?: string;
}

export interface Product {
    title: string;
    slug: string;
    description: string;
    price: number;
    currency: string;
    imageUrl?: string;
    availability?: string;
    seo?: SEO;
}
