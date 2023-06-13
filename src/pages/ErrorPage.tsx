import { FC } from 'react';
import { Api } from '../api/Api';

import { Header } from '../components/Header/Header';
import { NotFound } from '../components/NotFound/NotFound';
import { AllSneakers } from '../components/AllSneakers/AllSneakers';
import { Footer } from '../components/Footer/Footer';

export const ErrorPage: FC = () => {
    Api();
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <NotFound />
            <AllSneakers />
            <Footer />
        </>
    );
};
