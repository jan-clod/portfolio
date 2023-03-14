import s from './../header/Header.module.css'
import { OneWorks } from './works/OneWorks'


let textSocialNetwork = `Во время обучения одним из серьезных проектов было создание социальной сети. За время разработки я освоил работу с различными библиотеками, такими как: Redux, redux-thunk, react-router-dom, Axios, materialUI, uuid, Yup, Formik. Приложение было написано с использованием TypeScript. На уровне обработки данных я использовал Redux. Данные, такие как пользователи, пользовательские сообщения, полученные с удаленного сервера с помощью API-запросов. Использовали библиотеку Axios для взаимодействия с сервером. Так же присутствует логинизация при разработке которой использовал библиотеку formik. При разработке использовался паттерн 'Presentational and Container Component Pattern' при котором презинтационные компоненты это компоненты, отвечающие за внешний вид пользовательского интерфейса. Они не имеют никаких зависимостей ни с одной частью приложения. Так же для избежания проблем с prop drilling использовалcя context из react-redux. Для роботы с url использовал browser-router. Использовались как функциональные компоненты так и классовые. Для оптимизации приложения использовались React.memo и хук useMemo. Nак же в этом прложении я работал с: Redux(connect, applyMiddleware, combineReducers, reducer), redux-thunk(thunkMiddleware), yup, React hook, uuid, MUI.  При разработке придерживался таких принципов, как: DRY, KISS, CRUD. Проэкт потключен к Git и синхронизирован с GitHub, так же залит на GitHubPages. Этот проект находится в разработке, но вы уже можете увидеть кликнув по названию проэкта (возможна некорректная работа api запросов так как залит на статический сервер)`
let hrefSocialNetwork = 'https://jan-clod.github.io/tsx-social-network-41week/'
let textToDoList = 'Приложение разработано на реакт совместно с использованием typescript. Так же в приложении используются такие библиотеки как uuid и MUI. Структура приложения была разбита на универсальные компонеты для возможности многократного использования. Адаптивная верстка реализована с помощью mui-grid. Так же далее планируется всю работу с данными перенести на redux'
let textAimGame = 'Написан на чистом java scipt. Суть игры: выбрать в меню продолжительность игры и на время нажимать на рандомно появляющиеся круги. В конце инры выводится счет и кнопка начать занаво. Для разработки использовался функциональный подход. При котором я лучше научился навешивать события на элементы а так же поработол со стилями'
let a = `${textSocialNetwork} qwe`
let sn1img = 'https://sun9-36.userapi.com/impg/K7I-zIGOXeSGTu0CEsN0UlKoA3PnJHKuMQkh1A/4WFT-nZPa_Y.jpg?size=1916x936&quality=95&sign=40bd4924d2ee282ed90483e51b543290&type=album'
let aim1img = 'https://sun9-73.userapi.com/impg/YGQKv1VPfGZNxtU0xpjvhLD_QVSjX05uDU51yQ/JAQYhZrIzZg.jpg?size=1920x935&quality=95&sign=cd781e1f059f1a31ea7ffec80de18940&type=album'
let aim2img = 'https://sun9-79.userapi.com/impg/kj8Fd5Txp6lt6g0vjf52B6IGwtZEH1puo8I82g/PFhiPTrBlRo.jpg?size=1916x931&quality=95&sign=8227f17a5b48a0f2efede99c0f657638&type=album'
let aim3img = 'https://sun9-8.userapi.com/impg/yj6jrVtad9bhN0NgUqMpygrLpoi1lg9PfNIZVw/4GercVpaCSQ.jpg?size=1909x929&quality=95&sign=a420d53eee41efac89f1a57418025781&type=album'
let aim4img = 'https://sun9-29.userapi.com/impg/NGWpBY6S84ikAzg2V5H-mPAdptDC1JlxQCvQwA/AGBzXtvZeBw.jpg?size=1920x930&quality=95&sign=9cd2be2e60e2078010bda49ba7d85bdb&type=album'

export const MyWorks = () => {
    const ev = (event:any) => {
        console.log(window.pageYOffset);
    }
    return (
        <div className={s.myWorksBlock}>
            <div className={`${s.myWorksContainer} ${s.container}`}>
                <h1 onClick={(event)=>ev(event)} >Mои работы</h1>
                <OneWorks
                    name={'Social Network'}
                    text={textSocialNetwork}
                    href={hrefSocialNetwork}
                    img={'https://sun9-36.userapi.com/impg/K7I-zIGOXeSGTu0CEsN0UlKoA3PnJHKuMQkh1A/4WFT-nZPa_Y.jpg?size=1916x936&quality=95&sign=40bd4924d2ee282ed90483e51b543290&type=album'}
                    img2={'https://sun9-20.userapi.com/impg/uH5mUA_I9UYK66I5YENTbkBJtDeqtWsiAeBd5w/_E5p_-hQJD0.jpg?size=1903x938&quality=95&sign=035d793fd8ef90a45eca32c2ebcc3d2c&type=album'}
                    img3={'https://sun9-61.userapi.com/impg/GOq-BTeNDW7tC55RS4Cl2z2kEcgikMa0r1giIQ/yg71sIjt0I4.jpg?size=1915x878&quality=95&sign=2312260c629a35d2af5651e8154ab660&type=album'}
                    img4={'https://sun9-2.userapi.com/impg/2UVR3dRodoBtAHkOe739_KBEphbvVVUhkVSnUQ/J0r7IGoTCU4.jpg?size=1897x936&quality=95&sign=40ed613b3fa63e8d5933352043853167&type=album'}
                />
                <OneWorks
                    name={'ToDoList'}
                    text={textToDoList}
                    href={'https://jan-clod.github.io/git-hub-pages/'}
                    img2={'https://sun9-40.userapi.com/impg/fsZIjMivjFZPxqAnG3V9S2XX7M4Z7SIVQFem4A/zkgx98oAaaQ.jpg?size=646x933&quality=95&sign=5aa5237380c2892e0d2054d524db6b97&type=album'}
                    img={'https://sun9-33.userapi.com/impg/PogROw8a7Usr_THH1wSRx3y88SYcOSnEviCQig/997caiGaLig.jpg?size=1918x937&quality=95&sign=ce936b53f25db62943b98a8ede1be3ff&type=album'}
                />

                <OneWorks
                    name={'Dots game'}
                    text={textAimGame}
                    img={aim1img}
                    img2={aim2img}
                    img3={aim3img}
                    img4={aim4img}
                />
            </div>
        </div>

    )
} 