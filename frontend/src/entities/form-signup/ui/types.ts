export type FormSignupProps = {
	serverErrorText?: string;
	serverEmailError?: string;
	serverPasswordError?: string;
	setServerEmailError: (arg0: string) => string;
	setServerPasswordError: (arg0: string) => string;
	clearServerErrorText: () => void;
};