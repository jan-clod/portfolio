import s from './../header/Header.module.css'

export const Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={`${s.mainContainer} ${s.container}`}>
                <div >
                    <img className={s.mainPhoto} src="https://sun2.beltelecom-by-minsk.userapi.com/impf/c848620/v848620654/8881a/IrzF3m8iyrk.jpg?size=1080x607&quality=96&sign=5e380dd07ab2c15c9bc0f9adb561052b&type=album" alt="404" />
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