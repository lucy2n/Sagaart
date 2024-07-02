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

export interface IShow {
  id: number;
  name: string;
  year: number;
  place: string;
}

interface IAward {
  id: number,
  name: string,
  year: number,
  place: string
}

export interface IAuthor {
  id: number;
  name: string;
  gender: number;
  age: number;
  birth_date: number;
  show: IShow[];
  awards: IAward[];
  city_of_birth: string;
  city_live: string;
  education: string;
  professional_education: string;
  teaching_experience: string;
  personal_style: string;
  socials: string;
}

export interface IWork {
  id: number, 
  image: string
}


export interface IArtworkDetails {
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
  material: string;
  tablet_material: string;
  description: string;
  cost_category: number;
  end_cost: number;
  fair_cost: number;
  author: IAuthor;
  similar_works: IWork[];
  author_works: IWork[];
}