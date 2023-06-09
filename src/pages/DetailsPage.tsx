import { FC } from 'react';

import { Header } from '../components/Header/Header';
import { DetailsSneakers } from '../components/DetailsSneakers/DetailsSneakers';
import { RecommendedBlock } from '../components/RecommendedBlock/RecommendedBlock';
import { Footer } from '../components/Footer/Footer';
import { Api } from '../api/Api';

export const DetailsPage: FC = () => {
    Api();
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <DetailsSneakers />
            <RecommendedBlock />
            <Footer />
        </>
    );
};
