export const base_url = 'https://sagaart.bounceme.net/api/';

const mainPage = '/';
const loginPage = '/signin';
const registerPage = '/signup';
const resetPassPage = '/reset-password';
const subscriptionPage = '/subscription';
const resetPassEmailPage = '/reset-password/:email';
const profilePage = '/profile';
const feedbackPage = '/feedback';
const reviewPage = '/review';
const profileProductCardPage = '/profile/:productId';
const catalogPage = '/products';
const productCardPage = '/products/:productId';
const newPasswordSubmitionPage = '/new-password-submition/:uid/:token';
const resetPassSubmissionPage = '/reset-password-submition';

export const RoutePathname = {
    mainPage,
    loginPage,
    registerPage,
    subscriptionPage,
    resetPassPage,
    profilePage,
    resetPassEmailPage,
    feedbackPage, 
    reviewPage,
    profileProductCardPage,
    catalogPage,
    productCardPage,
    newPasswordSubmitionPage,
    resetPassSubmissionPage
};