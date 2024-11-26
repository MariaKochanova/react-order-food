import styles from './tab.module.css'
import classNames from 'classnames/bind'

export const Tab = ({ title, onClick, isActive, viewVariant }) => {
    return (
        <button
            disabled={isActive}
            onClick={onClick}
            className={classNames(styles.tab, {
                [styles.active]: isActive && viewVariant === 'active',
                [styles.default]: viewVariant === 'default',
            })}>
            {title}
        </button>
    )
}