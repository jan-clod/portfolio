import s from './Header.module.css'
import { Nav } from '../nav/Nav'

export const Header = () => {

    return (
        <div className={s.head}>
            Header
            <Nav />
        </div>

    )
}