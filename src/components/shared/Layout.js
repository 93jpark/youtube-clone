import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import { useState } from 'react';

const Layout = ({ children, activeMenu }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const switchMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className={styles.container}>
                <Header switchMenuOpen={switchMenuOpen}/>
                <div className={styles.layout}>
                    {isMenuOpen ? <Menu activeMenu={activeMenu} /> : ''}
                    {isMenuOpen ? <div className={styles.contents}>{children}</div> : <div className={styles.contentsNoMargin}>{children}</div>}
                    
                </div>
            </div>
        </>
    )
}

export default Layout;