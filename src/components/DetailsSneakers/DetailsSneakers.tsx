import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { AccordionMUI } from '../Accordion/AccordionMUI';
import { setBrand, setImageCarousel } from '../../redux/sneakersData/sneakersDataSlice';
import { Carousel } from '../Carousel/Carousel';

import styles from './DetailsSneakers.module.scss';

export const DetailsSneakers: FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const detailsSneakers = useSelector((state: RootState) => state.sneakersDataSlice.sneakersData).filter((item) => item.id === +id!);

    const brand = detailsSneakers.length > 0 && detailsSneakers[0].brand;
    typeof brand === 'string' && dispatch(setBrand(brand));

    const images = detailsSneakers.length > 0 && detailsSneakers[0].images;
    Array.isArray(images) && dispatch(setImageCarousel(images));

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {detailsSneakers &&
                    detailsSneakers.map((item) => (
                        <div className={styles.wrap} key={item.id}>
                            <Carousel />

                            <div className={styles.infoWrap}>
                                <span className={styles.brand}>{item.brand}</span>
                                <h2 className={styles.title}>{item.title}</h2>
                                <p className={styles.selectSize}>SELECT US SIZE</p>
                                <div className={styles.sizeWrap}>
                                    {item.sizes.map((size, index) => (
                                        <button className={styles.size} key={index}>
                                            {size}
                                        </button>
                                    ))}
                                </div>
                                <p className={styles.buy}>BUY NOW</p>
                                <button className={styles.btn}>${item.price}</button>
                                <div className={styles.line}></div>
                                <div className={styles.about}>ABOUT THIS PRODUCT</div>
                                <div className={styles.InfoProduct}>{item.InfoProduct}</div>
                                <div className={styles.article}>{item.article}</div>

                                <AccordionMUI />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
