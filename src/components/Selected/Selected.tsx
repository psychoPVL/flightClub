import { FC } from 'react';
import { TypeOptions } from './TypeSelected';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setCurrentSort } from '../../redux/allSneakers/allSneakersSlice';
import Select from 'react-select';

import styles from './Selected.module.scss';

export const Selected: FC = () => {
    const currentSort = useSelector((state: RootState) => state.allSneakersSlice.CurrentSort);
    const dispatch = useDispatch();

    const options: TypeOptions[] = [
        { value: 'relevance', label: 'Relevance' },
        { value: 'asc', label: 'Price low' },
        { value: 'desc', label: 'Price high' },
    ];

    const getValue = () => (currentSort ? options.find((item) => item.value === currentSort) : '');
    const handlerChange = (newValue: any) => {
        dispatch(setCurrentSort(newValue.value));
    };

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>Sort By:</span>
            <Select options={options} onChange={handlerChange} value={getValue()} isSearchable={false} />
        </div>
    );
};