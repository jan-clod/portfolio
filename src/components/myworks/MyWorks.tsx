import s from './../header/Header.module.css'
import { OneWorks } from './works/OneWorks'


let textSocialNetwork = `Во время обучения одним из серьезных проектов было создание социальной сети. За время разработки я освоил работу с различными библиотеками, такими как: Redux, redux-thunk, react-router-dom, Axios, materialUI, uuid, Yup, Formik. Приложение было написано с использованием TypeScript. На уровне обработки данных я использовал Redux. Данные, такие как пользователи, пользовательские сообщения, полученные с удаленного сервера с помощью API-запросов. Использовали библиотеку Axios для взаимодействия с сервером. Так же присутствует логинизация при разработке которой использовал библиотеку formik. При разработке использовался паттерн 'Presentational and Container Component Pattern' при котором презинтационные компоненты это компоненты, отвечающие за внешний вид пользовательского интерфейса. Они не имеют никаких зависимостей ни с одной частью приложения. Так же для избежания проблем с prop drilling использовалcя context из react-redux. Для роботы с url использовал browser-router. Использовались как функциональные компоненты так и классовые. Для оптимизации приложения использовались React.memo и хук useMemo. Так же в этом прложении я работал с: Redux(connect, applyMiddleware, combineReducers, reducer), redux-thunk(thunkMiddleware), yup, React hook, uuid, MUI.  При разработке придерживался таких принципов, как: DRY, KISS, CRUD. Проект подключен к Git и синхронизирован с GitHub, так же залит на GitHubPages. Этот проект находится в разработке, но вы уже можете увидеть кликнув по названию проекта (возможна некорректная работа api запросов так как залит на статический сервер)`
let hrefSocialNetwork = 'https://jan-clod.github.io/tsx-social-network-41week/'
let textToDoList = 'Приложение разработано на реакт совместно с использованием typescript. Так же в приложении используются такие библиотеки как uuid и MUI. Структура приложения была разбита на универсальные компонеты для возможности многократного использования. Адаптивная верстка реализована с помощью mui-grid. '
let textAimGame = 'Написан на чистом java scipt. Суть игры: выбрать в меню продолжительность игры и на время нажимать на рандомно появляющиеся круги. В конце инры выводится счет и кнопка начать занаво. Для разработки использовался функциональный подход. При котором я лучше научился навешивать события на элементы а так же поработол со стилями'
let chatText ='Разработал чат-приложение с использованием WebSocket и api-itIncubator. Верстка адаптирована под размеры меньше 500px(mobile) и свыше (desktop). Для верстки использовал препроцессор scss. При запуске приложения необходимо авторизоваться. Во вкладке профиль с сервера загружаются данные о пользователе и там же можно изменить их (т.е. put-запросом обновить данные) Использовал БЭМ-методологию. Во вкладке профиля если мы будем изменять к примеру статус и отключился интернет, запрос каждые три секунды будет рекурсивным способом отправляться, пока не отправится успешно на сервер. Во вкладке чат при потере соединения будет изменен статус WebSocket-канала и каждые три секунды будет выполняться функция создания нового канала пока он успешно не создастся'
let chatImg1 = 'https://sun9-71.userapi.com/impg/Zf3ZvmzsYFCeFfiBu_sDas8No5872tOamfnlyA/SQOpbUJLmIo.jpg?size=1918x926&quality=95&sign=f53d05899b0fedc3a814e153a5502c3e&type=album';
let chatImg2 = 'https://sun9-55.userapi.com/impg/bpD5DeV4w1ohx0GVo_j13nS1V0YyVn4Q0DcZmw/NL0ORCGiO0w.jpg?size=1918x928&quality=95&sign=e15c15bb1b4530e5e0db33e28b9f53dc&type=album';
let chatImg3 = 'https://sun9-17.userapi.com/impg/iE59y02Nxpl1i1Ad128s51gq7B2k-mqc7xoZUw/45Zy7YT2UYk.jpg?size=389x845&quality=95&sign=ac5f8e9fdcb3487ff2e9bef44b808cc8&type=album';
let a = `${textSocialNetwork} qwe`
let sn1img = 'https://sun9-36.userapi.com/impg/K7I-zIGOXeSGTu0CEsN0UlKoA3PnJHKuMQkh1A/4WFT-nZPa_Y.jpg?size=1916x936&quality=95&sign=40bd4924d2ee282ed90483e51b543290&type=album'
let aim1img = 'https://sun9-73.userapi.com/impg/YGQKv1VPfGZNxtU0xpjvhLD_QVSjX05uDU51yQ/JAQYhZrIzZg.jpg?size=1920x935&quality=95&sign=cd781e1f059f1a31ea7ffec80de18940&type=album'
let aim2img = 'https://sun9-79.userapi.com/impg/kj8Fd5Txp6lt6g0vjf52B6IGwtZEH1puo8I82g/PFhiPTrBlRo.jpg?size=1916x931&quality=95&sign=8227f17a5b48a0f2efede99c0f657638&type=album'
let aim3img = 'https://sun9-8.userapi.com/impg/yj6jrVtad9bhN0NgUqMpygrLpoi1lg9PfNIZVw/4GercVpaCSQ.jpg?size=1909x929&quality=95&sign=a420d53eee41efac89f1a57418025781&type=album'
let aim4img = 'https://sun9-29.userapi.com/impg/NGWpBY6S84ikAzg2V5H-mPAdptDC1JlxQCvQwA/AGBzXtvZeBw.jpg?size=1920x930&quality=95&sign=9cd2be2e60e2078010bda49ba7d85bdb&type=album'

export const MyWorks = () => {
    const ev = (event: any) => {
        console.log(window.pageYOffset);
    }
    return (
        <div className={s.myWorksBlock}>
            <div className={`${s.myWorksContainer} ${s.container}`}>
                <h1 onClick={(event) => ev(event)} >My works</h1>
                <OneWorks
                    name={'Social Network'}
                    text={textSocialNetwork}
                    href={hrefSocialNetwork}
                    img={'https://sun9-36.userapi.com/impg/K7I-zIGOXeSGTu0CEsN0UlKoA3PnJHKuMQkh1A/4WFT-nZPa_Y.jpg?size=1916x936&quality=95&sign=40bd4924d2ee282ed90483e51b543290&type=album'}
                    img2={'https://sun9-20.userapi.com/impg/uH5mUA_I9UYK66I5YENTbkBJtDeqtWsiAeBd5w/_E5p_-hQJD0.jpg?size=1903x938&quality=95&sign=035d793fd8ef90a45eca32c2ebcc3d2c&type=album'}
                    img3={'https://sun9-61.userapi.com/impg/GOq-BTeNDW7tC55RS4Cl2z2kEcgikMa0r1giIQ/yg71sIjt0I4.jpg?size=1915x878&quality=95&sign=2312260c629a35d2af5651e8154ab660&type=album'}
                    img4={'https://sun9-2.userapi.com/impg/2UVR3dRodoBtAHkOe739_KBEphbvVVUhkVSnUQ/J0r7IGoTCU4.jpg?size=1897x936&quality=95&sign=40ed613b3fa63e8d5933352043853167&type=album'}
                    img5={'https://sun9-59.userapi.com/impg/wA_OWSNmNWA3tK3a0VStPeDCAeynuJUskN8MZA/G4rZ2Bb_beE.jpg?size=389x845&quality=95&sign=c1edab262b91fce3883b953d76d65b42&type=album'}
                    img6={'https://sun9-78.userapi.com/impg/_Oxep4b9TWbm7Z-6Pi6x4Q5lVvbEiHhS1mAKYQ/ni0O66G5wxk.jpg?size=388x843&quality=95&sign=9cb90ab1c1a84b023ff507ba3cca1706&type=album'}
                />
                <OneWorks
                    name={'ToDoList'}
                    text={textToDoList}
                    href={'https://jan-clod.github.io/git-hub-pages/'}
                    img2={'https://sun9-33.userapi.com/impg/aYtbC_JIs9hp2G8VVjzFkjh6DQJ4NwP6O5CnYg/xzgSCjhRtKI.jpg?size=357x739&quality=95&sign=6e16ef381a86b6c46aa35d6124dcb511&type=album'}
                    img={'https://sun9-33.userapi.com/impg/PogROw8a7Usr_THH1wSRx3y88SYcOSnEviCQig/997caiGaLig.jpg?size=1918x937&quality=95&sign=ce936b53f25db62943b98a8ede1be3ff&type=album'}
                />

                <OneWorks
                    name={'Chat'}
                    text={chatText}
                    href={'https://github.com/jan-clod/chat_websocket'}
                    img={chatImg1}
                    img2={chatImg2}
                    img3={chatImg3}
                />
                <div className={`${s.myWorksContainer_OtherWorks} `}>
                    <h1> Other works:</h1>

                    <div className={`${s.OtherWorks_one} `}>
                        <h2> <a href={'https://jan-clod.github.io/lending_test/'} >Lending</a></h2>
                        <div>
                            <p>Одностраничный сайт. Выполнен на нативном js и css. Разработан с помощью методологии БЭМ и семантической верстки. Адаптив сайта выполнен спомощью флексов и медиа-запросов. </p>
                        </div>
                    </div>

                    <div className={`${s.OtherWorks_one} `}>
                        <h2><a href={'https://jan-clod.github.io/counter/'} >Counter</a></h2>
                        <div>
                            <p>Счетчик разработан на react. При выполнении использовался компонентный подход.</p>
                        </div>
                    </div>
                    <div className={`${s.OtherWorks_one} `}>
                        <h2><a href={'https://github.com/jan-clod/aim_game'} >Aim game</a></h2>
                        <div>
                            <p>{textAimGame}</p>
                        </div>
                    </div>
                    <div className={`${s.OtherWorks_one} `}>
                        <h2><a href={'https://jan-clod.github.io/Countdown-Clock/'} >Countdown-Clock</a></h2>
                        <div>
                            <p>Счетчик обратного отсчета, разработан на js.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
} //
