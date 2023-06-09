import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';

import styles from './AirJordanBlock.module.scss';

export const AirJordanBlock: FC = () => {
    const airJordan = useSelector((state: RootState) => state.sneakersDataSlice.airJordanData);

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>AIR JORDAN</h2>
            <ul className={styles.previewGroupe}>
                {airJordan &&
                    airJordan.map((sneaker) => (
                        <Link to={`/details/${sneaker.id}`} key={sneaker.id} className={styles.previewProduct}>
                            <img className={styles.img} src={sneaker.images[0]} alt='image' />
                            <div className={styles.info}>
                                <span className={styles.subTitle}>{sneaker.brand}</span>
                                <p className={styles.text}>{sneaker.title}</p>
                            </div>
                        </Link>
                    ))}
            </ul>

            <button className={styles.btn}>SHOP AIR JORDAN</button>
        </section>
    );
};
