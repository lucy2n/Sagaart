interface Category {
    id: number;
    name: string;
}

interface Style {
    id: number;
    name: string;
}

interface Genre {
    id: number;
    name: string;
}

interface Author {
    id: number;
    name: string;
}

export interface Artwork {
    id: number;
    name: string;
    image: string;
    additional_image: string;
    category: Category;
    style: Style;
    genre: Genre;
    size_category: number;
    size: string;
    country: string;
    city_sale: string;
    year: number;
    cost_category: number;
    end_cost: number;
    author: Author;
}

export interface ArtworksResponse {
    count: number, 
    next: null,
    previous: null,
    results: Artwork[]
}