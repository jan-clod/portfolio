import s from './../header/Header.module.css'
import 'animate.css';

export const Main = () => {
    let textHTML = `Мне 25 лет,живу в Беларуси и я начинающий frontend developer.`
    let textHTML2 = `По образованию: "дизайнер оформитель", учитель.`
    let textHTML3 = `Обучался как по платным курсам так и самостоятельно`
    return (
        <div className={s.mainBlock}>
            <div className={`${s.mainContainer} `}>
                <div className={s.helloPage}>

                    <div className={s.mainPhoto}>
                        <img src="https://sun9-44.userapi.com/impg/Sq29-pVTbSAcKECj4Jpb2mnlsux7rw9ea6dZEA/V91ChBkB6kQ.jpg?size=1318x876&quality=95&sign=0264c40db691ef4bdbba1bb87585ffe7&type=album" alt="404" />
                    </div>

                    <div className={s.mainInfo}>
                        <h2 className={` ${"animate__animated animate__zoomInRight"}`}>Тимофеев Ян Сергеевич</h2>
                        <h3 className={` ${"animate__animated animate__zoomInRight"}`}>Обо мне:</h3>
                        <p className={` ${"animate__animated animate__zoomInLeft"}`}>{textHTML}</p>
                        <p className={` ${"animate__animated animate__zoomInLeft"}`}>{textHTML2}</p>
                        <p className={` ${"animate__animated animate__zoomInLeft"}`}>{textHTML3}</p>
                        <p className={` ${"animate__animated animate__zoomInLeft"}`}>🔗<a href='https://drive.google.com/file/d/1-VPf9TSOvgWOey7P-WHZOSP9CVCT7nWs/view?usp=share_link'>моё резюме</a></p>
                    </div>

                </div>

            </div>
        </div>
    )
}