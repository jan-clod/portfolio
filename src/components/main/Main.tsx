import s from './../header/Header.module.css'

export const Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={`${s.mainContainer} `}>
                <div className={s.helloPage}>

                    <div className={s.mainPhoto}>
                        <img src="https://img.freepik.com/free-photo/blithesome-student-green-t-shirt-posing-with-laptop-indoor-photo-amazed-male-freelancer-isolated_197531-20164.jpg?w=1380&t=st=1675072958~exp=1675073558~hmac=d4eca9b6d3d3ce9ca8f79cd2844e761e48ed140e74e383fbb0ab6ddebc01e7a3" /* "https://sun9-41.userapi.com/impg/6rAvsatBEu70G57d0txaX6qbvOI95WuuyUEx-Q/fCNJ6hxaaiQ.jpg?size=1080x1080&quality=95&sign=b29d2018e9526de4828049c7bbb92c83&type=album" */ alt="404" />
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
        </div>
    )
}