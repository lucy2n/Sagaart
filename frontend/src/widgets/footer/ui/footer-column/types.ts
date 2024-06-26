export interface Link {
	linkTitle: string;
	url: string;
}

export interface Column {
	columnTitle: string;
	column: Link[];
}

export interface FooterColumnProps {
	columns: Column;
}