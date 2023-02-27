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
        <div className={`${s.blockDown}`}>

            <ul>

                <li><img src={mail} alt='404'></img><span>my mail: fia.yan@mail.ru</span></li>
                <li><img src={telega} alt='404'></img> my <a href='https://t.me/jan_cl0d'> telegram</a> </li>
                <li><img src={git} alt='404'></img>my  <a href="https://github.com/jan-clod/">gitHub</a></li>
                <li>Belarus Pinsk</li>
                <li>+375 29 364 83 53</li>
                {/*                 <li>width screen:_{wind}</li>
                <li >height screen:_{height}</li> */}
            </ul>
            <h1 className={`${s.h1Y} + ${"animate__animated animate__backInLeft"}`}>
                _Jan_clod_
            </h1>
        </div>

    )
}