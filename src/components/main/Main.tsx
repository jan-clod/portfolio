import s from './../header/Header.module.css'
import 'animate.css';
import img from './img.png'

export const Main = () => {
    let textHTML = `Мне 25 лет,живу в Беларуси и я начинающий frontend developer.`
    let textHTML2 = `По образованию: "дизайнер оформитель", учитель.`
    let textHTML3 = `Обучался как по платным курсам так и самостоятельно`
    return (
        <div className={`${s.mainContainer} `}>
            <div className={s.helloPage}>

                <div className={s.mainPhoto}>
                    <img src={img}/* "https://sun9-44.userapi.com/impg/Sq29-pVTbSAcKECj4Jpb2mnlsux7rw9ea6dZEA/V91ChBkB6kQ.jpg?size=1318x876&quality=95&sign=0264c40db691ef4bdbba1bb87585ffe7&type=album"  */ alt="404" />
                </div>

                <div className={s.mainInfo}>

                    <h1 className={`${s.mainH1} ${"animate__animated animate__zoomInRight"}`}>HI MY NAME IS YAN </h1>
                    <h1 className={` ${s.mainH2} ${"animate__animated animate__zoomInRight"}`}>I'M BEGINER FRONTEND DEVELOPER</h1>
                    <p className={` ${"animate__animated animate__zoomInLeft"}`}>{'I am 25 years old, I live in Belarus and I am a beginner frontend developer.'}</p>
                    <p className={` ${"animate__animated animate__zoomInLeft"}`}>{'By education: "Grapfic Designer", teacher. Studied both in paid courses and independently'}</p>
                    <p className={`${s.mainH5} ${"animate__animated animate__zoomInLeft"}`}>🔗<a href='https://drive.google.com/file/d/1-VPf9TSOvgWOey7P-WHZOSP9CVCT7nWs/view?usp=share_link'>my resume</a></p>
                </div>

            </div>

        </div>
    )
}

/* I am 25 years old, I live in Belarus and I am a beginner
frontend developer.
By education: "Grapfic Designer", teacher.
Studied both in paid courses and independently */