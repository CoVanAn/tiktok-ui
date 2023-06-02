import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c1eee8a692b34023a2606a2ede714464~c5_300x300.webp?x-expires=1685030400&x-signature=A42UFf5oVY%2FlBkmiQ3nqdRpM9BM%3D"
                alt="Thanh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Cao Thanh Thanh</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('checkicon')} />
                </h4>
                <span className={cx('username')}>caothanhthanh</span>
            </div>
        </div>
    );
}

export default AccountItem;
