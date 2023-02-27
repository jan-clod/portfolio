import s from './../header/Header.module.css'
import 'animate.css';

export const Main = () => {
    let textHTML = `Мне 25 лет,живу в Беларуси и я начинающий frontend developer.`
    let textHTML2 = `По образованию: "дизайнер оформитель", учитель.`
    let textHTML3 = `Обучался как по платным курсам так и самостоятельно`
    let textHTML4 = `Обучался как по платным курсам так и самостоятельно`
    return (
        <div className={s.mainBlock}>
            <div className={`${s.mainContainer} `}>
                <div className={s.helloPage}>

                    <div className={s.mainPhoto}>
                        <img src="https://sun9-5.userapi.com/impg/t29WpcYNLJt0kjnoX1RWBGd-SlmDNRaVsx2_sg/5tV5lWmX3kE.jpg?size=1318x876&quality=95&sign=d218b62d7a63398beadc47961701ef62&type=album" alt="404" />
                    </div>

                    <div className={s.mainInfo}>
                        <h2 className={` ${"animate__animated animate__zoomInRight"}`}>Тимофеев Ян Сергеевич</h2>
                        <h3 className={` ${"animate__animated animate__zoomInRight"}`}>Обо мне:</h3>
                        <p className={` ${"animate__animated animate__zoomInLeft"}`}>{textHTML}</p>
                        <p className={` ${"animate__animated animate__zoomInLeft"}`}>{textHTML2}</p>
                        <p className={` ${"animate__animated animate__zoomInLeft"}`}>{textHTML3}</p>
                        <p className={` ${"animate__animated animate__zoomInLeft"}`}>🔗<a href='https://docs.google.com/document/d/1ENr1YUgJ9ekScVZl6guCHrCRxcJYLFA5/edit?usp=sharing&ouid=100583517082982250182&rtpof=true&sd=true'>моё резюме</a></p>
                    </div>

                </div>

            </div>
        </div>
    )
}