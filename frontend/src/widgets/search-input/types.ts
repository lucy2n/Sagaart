export enum SearchInputType {
	header = 'header',
	footer = 'footer',
}

export type SearchInputProps = {
	place: SearchInputType;
}