import s from './Header.module.css'
import { Nav } from '../nav/Nav'

export const Header = () => {

    return (
        <div className={s.head}>
            <h1>
                _Jan_clod_
            </h1>
            <Nav />
        </div>

    )
}