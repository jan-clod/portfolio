import s from './../header/Header.module.css'
import 'animate.css';

export const DownBack = () => {
    let wind = window.screen.width
    let height = window.screen.height
    return (
        <div className={`${s.blockDown}`}>

            <ul>
                <li>Беларусь г.Пинск</li>
                <li>+375 29 364 83 53</li>
                <li>25 лет, родился: 7 июля 1997</li>
                <li>почта:fia.yan@mail.ru</li>
                <li>мой  <a href="https://github.com/jan-clod/">gitHub</a></li>
                <li>width screen:_{wind}</li>
                <li>height screen:_{height}</li>
            </ul>
            <h1 className={`${s.h1Y} + ${"animate__animated animate__backInLeft"}`}>
                _Jan_clod_
            </h1>

        </div>

    )
}