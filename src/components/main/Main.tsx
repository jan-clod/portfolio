import s from './../header/Header.module.css'

export const Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={`${s.mainContainer} ${s.container}`}>
                <div className={s.mainPhoto}>
                    <img src="https://www.google.com/search?q=developer&sxsrf=ALiCzsZmAkDWlNjuG32NG_lBkUEfPXIFJw:1661341525741&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjV6ve7s9_5AhVKnKQKHR4FA7IQ_AUoAXoECAMQAw&biw=1745&bih=852&dpr=1.1#imgrc=R_3CI3ihviVCWM" alt="404" />
                </div>
                <div className={s.mainInfo}>
                    <h1>Тимофеев Ян Сергеевич</h1>
                    <ul>
                        <li>Беларусь г.Пинск</li>
                        <li>+375 29 364 83 53</li>
                        <li>25 лет, родился: 7 июля 1997</li>
                        <li>почта: fia.yan@mail.ru</li>
                        <li>готов как к перезду так и к удаленной работе</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}