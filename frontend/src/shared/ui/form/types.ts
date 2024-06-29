import { HTMLAttributes, ReactNode, FormEventHandler } from 'react';
import * as yup from 'yup';

export type FormProps = HTMLAttributes<HTMLFormElement> & {
	children: ReactNode;
	extraClass?: string;
	schema?: yup.AnyObjectSchema;
	onSubmit: FormEventHandler<HTMLFormElement>;
};