import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
    // <h2 className={styles.[`postItem`]}>Header</h2>
}

export default Header;
