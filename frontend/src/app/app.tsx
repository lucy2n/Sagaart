import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../widgets/header';
import Footer from '../widgets/footer';
import Catalog from '../pages/catalog/ui/catalog';
import Main from '../pages/main/ui/main';
import Subscription from '../pages/subscription/ui/subscription';
import ProductCard from '../pages/product-card/ui/product-card';
import SignUp from '../pages/sign-up/ui/sign-up';
import SignIn from '../pages/sign-in/ui/sign-in';
import Personal from '../pages/personal/ui/personal';
import UploadingAnObject from '../pages/uploading-an-object/ui/uploading-an-object';
import ResetPassword from '../pages/reset-password/ui/reset-password';
import ResetPasswordSubmition from '../pages/reset-password-submition/ui/reset-password-submition';
import NewPasswordSubmition from '../pages/new-password-submition/ui/new-password-submition';
import Feedback from '../pages/feedback/ui/feedback';
import ScrollToTop from '../features/scroll-to-top';

function App() {

    return (
        <>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path='/products' element={<Catalog />} />
                <Route path='/products/:productId' element={<ProductCard />} />
                <Route path='/' element={<Main />} />
                <Route path='/subscription' element={<Subscription />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/profile' element={<Personal />} />
                <Route path='/review' element={<UploadingAnObject />} />
                <Route path='/reset-password' element={<ResetPassword />} />
                <Route path='/new-password-submition' element={<NewPasswordSubmition />} />
                <Route path='/feedback' element={<Feedback />} />
                <Route path='/reset-password-submition' element={<ResetPasswordSubmition />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
