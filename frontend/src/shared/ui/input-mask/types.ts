import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	name: string;
	labelName?: string;
	error?: string;
	maska: string;
	maskPlaceholder:string;

};