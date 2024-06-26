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

interface Show {
  id: number;
  name: string;
  year: number;
  place: string;
}

interface Award {
  id: number;
  name: string;
}

export interface Author {
  id: number;
  name: string;
  gender: number;
  age: number;
  year_of_birth: number;
  show: Show;
  awards: Award;
  city_of_birth: string;
  city_live: string;
  education: string;
  professional_education: string;
  teaching_experience: string;
  personal_style: string;
  socials: string;
}
export interface ArtworkDetails {
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
  material: string;
  tablet_material: string;
  description: string;
  cost_category: number;
  end_cost: number;
  fair_cost: number;
  author: Author;
  similar_works: string;
  author_works: string;
}