import styles from './Header.module.css';
import youtube_logo from '../../data/youtube_logo.png';
import { FiMenu } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { useState } from 'react';

const Header = ({ switchMenuOpen }) => {
    const [value, setValue] = useState('');

    const onClick = () => {
        console.log(value);
        setValue('');
    }

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className={styles.header}>
            <div className={styles.tab}>
                <FiMenu className={styles.icon} onClick={switchMenuOpen} />
                <img src={youtube_logo} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles['center-tab']}>
                <input className={styles.input} onChange={onChange} value={value} />
                <IoSearchOutline className={styles['search-icon']} onClick={onClick}/>
            </div>
            <div className={styles.tab}>
                <BsGrid3X3Gap className={styles.icon} />
                <HiOutlineDotsVertical className={styles.icon} />
            </div>
        </div>
    )
}

export default Header;