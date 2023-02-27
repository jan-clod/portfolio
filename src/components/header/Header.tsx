import s from './Header.module.css'
import 'animate.css';
import { Nav } from '../nav/Nav'

export const Header = () => {

    return (
        <div className={s.head}>
            <h1 className={` ${"animate__animated animate__zoomInLeft"}`}>
                Yan Timofeev
            </h1>
            <Nav />
        </div>

    )
}