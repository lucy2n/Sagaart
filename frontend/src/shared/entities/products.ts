interface ICategory {
    id: number;
    name: string;
}

interface IStyle {
    id: number;
    name: string;
}

interface IGenre {
    id: number;
    name: string;
}

interface IAuthor {
    id: number;
    name: string;
}

export interface IArtwork {
    id: number;
    name: string;
    image: string;
    additional_image: string;
    category: ICategory[];
    style: IStyle[];
    genre: IGenre[];
    size_category: number;
    size: string;
    country: string;
    city_sale: string;
    year: number;
    cost_category: number;
    end_cost: number;
    author: IAuthor;
}

export interface IArtworksResponse {
    count: number, 
    next: null,
    previous: null,
    results: IArtwork[]
}