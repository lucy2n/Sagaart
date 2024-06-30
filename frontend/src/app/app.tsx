import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../widgets/header';
import Footer from '../widgets/footer';
import Catalog from '../pages/catalog/ui/catalog';
import Main from '../pages/main/ui/main';
import Subscription from '../pages/subscription/ui/subscription';
import ProductCard from '../pages/product-card/ui/product-card';
import SignUp from '../pages/sign-up/ui/sign-up';
import SignIn from '../pages/sign-in/ui/sign-in';
import Profile from '../pages/profile/ui/personal';
import UploadingAnObject from '../pages/uploading-an-object/ui/uploading-an-object';
import ResetPassword from '../pages/reset-password/ui/reset-password';
import ResetPasswordSubmition from '../pages/reset-password-submition/ui/reset-password-submition';
import NewPasswordSubmition from '../pages/new-password-submition/ui/new-password-submition';
import Feedback from '../pages/feedback/ui/feedback';
import ScrollToTop from '../features/scroll-to-top';
import { useAppSelector, useAppDispatch } from '../shared/utils/hooks';
import { closeModal } from '../store/slices/modalSlice';
import { loggedIn, loggedOut, setName, setEmail, setTelephone } from '../store/slices/userSlice';
import { Xmark } from '@gravity-ui/icons';
import { Icon, Button } from '@gravity-ui/uikit';
import { clsx } from 'clsx';
import style from './app.module.css';
import { useNavigate } from 'react-router-dom';
import { getUserInformation } from '../shared/api/user';
import { IUser } from '../shared/entities/user';


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeading,
    DialogClose
} from '../shared/ui/dialog/dialog';

function App() {
    const isOpen = useAppSelector(state => state.modal.isOpen);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleClose = () => {
        dispatch(closeModal());
    };

    useEffect(()=> {
		if (localStorage.getItem('token')) {
			getUserInformation()
            .then(({email, user_name, telephone}:IUser)=>{
                dispatch(loggedIn());
                dispatch(setEmail(email));
                dispatch(setName(user_name??''));
                dispatch(setTelephone(telephone??''));
            })
            .catch((err) => {
                dispatch(loggedOut());
                localStorage.removeItem('token');
                console.error(err);
            });
        }
    },[]);

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
                <Route path='/profile/:productId' element={<ProductCard />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/review' element={<UploadingAnObject />} />
                <Route path='/reset-password' element={<ResetPassword />} />
                <Route path='/new-password-submition/:uid/:token' element={<NewPasswordSubmition />} />
                <Route path='/feedback' element={<Feedback />} />
                <Route path='/reset-password-submition' element={<ResetPasswordSubmition />} />
            </Routes>
            <Footer />
            <Dialog open={isOpen} onOpenChange={handleClose}>
                <DialogContent className={style.dialog}>
                    <DialogHeading className={style.heading}>Успешно</DialogHeading>
                    <DialogDescription className={style.description}>
                        <div className={style.description__body}>
                            <p className={style.description__line}>Ваш запрос отправлен на модерацию.</p>
                            <p className={style.description__line}>Вы получите результаты в течении часа,</p>
                            <p className={style.description__line}>они будут отражены в личном кабинете</p>
                            <p className={style.description__line}>в разделе «результаты оценки»</p>
                        </div>
                        <div className={style.buttons}>
                            <Button
                                size='xl'
                                view='normal'
                                width='max'
                                className={clsx(style.button, style.button__left)}
                                onClick={() => {
                                    navigate('/review');
                                    handleClose();
                                }}
                            >
                                Оценить еще
                            </Button>
                            <Button
                                size='xl'
                                view='normal'
                                width='max'
                                className={clsx(style.button, style.button__right)}
                                onClick={() => {
                                    navigate('/profile');
                                    handleClose();
                                }}
                            >
                                В личный кабинет
                            </Button>
                        </div>
                    </DialogDescription>
                    <DialogClose className={style.close}>
                        <Icon data={Xmark} size={16} />
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default App;
