import s from './../header/Header.module.css'
import telega from './telega.png'
import mail from './mail.png'
import git from './github.png'
import 'animate.css';

export const DownBack = () => {
    let wind = window.screen.width
    let height = window.screen.height
    /*     console.log(window.pageYOffset); */

    return (
        <div className={`${s.blockDown}`} >

            <ul>

                <li><span><img src={mail} alt='404'></img></span></li>
                <li><a href='https://t.me/jan_cl0d'> <img src={telega} alt='404'></img></a> </li>
                <li><a href="https://github.com/jan-clod/"><img src={git} alt='404'></img></a></li>
            </ul>
            <p>+375 29 364 83 53</p>
            <p>fia.yan@mail.ru</p>
            <h1 className={`${s.h1Y} + ${"animate__animated animate__backInLeft"}`}>
                _Jan_clod_
            </h1>
        </div>

    )
}