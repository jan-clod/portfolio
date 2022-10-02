import s from './../header/Header.module.css'

export const Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={`${s.mainContainer} ${s.container}`}>
                <div >
                    <img className={s.mainPhoto} src="https://sun9-41.userapi.com/impg/6rAvsatBEu70G57d0txaX6qbvOI95WuuyUEx-Q/fCNJ6hxaaiQ.jpg?size=1080x1080&quality=95&sign=b29d2018e9526de4828049c7bbb92c83&type=album" alt="404" />
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