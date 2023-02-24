import s from './../header/Header.module.css'
import 'animate.css';

export const Main = () => {
    let textHTML = `Мне 25 лет,живу в Беларуси и я начинающий frontend developer.`
    let textHTML2 = `По образованию: "дизайнер оформитель", учитель. Обучался как по платным курсам так и самостоятельно`
    let textHTML3 = `Обучался как по платным курсам так и самостоятельно`
    return (
        <div className={s.mainBlock}>
            <div className={`${s.mainContainer} `}>
                <div className={s.helloPage}>

                    <div className={s.mainPhoto}>
                        <img src="https://img.freepik.com/free-photo/blithesome-student-green-t-shirt-posing-with-laptop-indoor-photo-amazed-male-freelancer-isolated_197531-20164.jpg?w=1380&t=st=1675072958~exp=1675073558~hmac=d4eca9b6d3d3ce9ca8f79cd2844e761e48ed140e74e383fbb0ab6ddebc01e7a3" /* "https://sun9-41.userapi.com/impg/6rAvsatBEu70G57d0txaX6qbvOI95WuuyUEx-Q/fCNJ6hxaaiQ.jpg?size=1080x1080&quality=95&sign=b29d2018e9526de4828049c7bbb92c83&type=album" */ alt="404" />
                    </div>

                    <div className={s.mainInfo}>
                        <h2 className={` ${"animate__animated animate__zoomInRight"}`}>Тимофеев Ян Сергеевич</h2>
                        <h3 className={` ${"animate__animated animate__zoomInRight"}`}>Обо мне:</h3>
                        <p className={` ${"animate__animated animate__zoomInLeft"}`}>{textHTML}</p>
                        <p className={` ${"animate__animated animate__zoomInLeft"}`}>{textHTML2}</p>
                        <p className={` ${"animate__animated animate__zoomInLeft"}`}>{textHTML3}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}