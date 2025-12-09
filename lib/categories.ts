export interface Category {
    name: string
    slug: string
    count: string
    image: string
}

export const categories: Category[] = [
    {
        name: 'Paper Plates',
        slug: 'paper-plates',
        count: '24 items',
        image: '/paper-plates-black-and-white.jpg',
    },
    {
        name: 'Cake Boxes',
        slug: 'cake-boxes',
        count: '18 items',
        image: '/images/CAKE_BOXES_img2.jpeg',
    },
    {
        name: 'Gift Wrapping Paper',
        slug: 'gift-wrapping-paper',
        count: '32 items',
        image: '/images/8SHEET_SOLID_img1.jpeg',
    },
    {
        name: 'Gift Tissue Paper',
        slug: 'gift-tissue-paper',
        count: '45 items',
        image: '/images/TISSUE_PAPERS_img2.jpeg',
    },
    {
        name: 'Crinkle Cut Paper',
        slug: 'crinkle-cut-paper',
        count: '20 items',
        image: '/crinkle-cut-paper-black-and-white.jpg',
    },
    {
        name: 'Streamers',
        slug: 'streamers',
        count: '15 items',
        image: '/images/1-PK_STREAMERS_img2.jpeg',
    },
    {
        name: 'Gift Boxes',
        slug: 'gift-boxes',
        count: '25 items',
        image: '/images/GIFT_BOXES_img1.jpeg',
    },
]

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((category) => category.slug === slug)
}
