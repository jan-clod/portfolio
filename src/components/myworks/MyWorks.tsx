import s from './../header/Header.module.css'
import { OneWorks } from './works/OneWorks'

let textSocialNetwork = `Во время обучения одним из серьезных проектов было создание социальной сети. За время разработки я освоил работу с различными библиотеками, такими как: Redux, redux-thunk, react-router-dom, Axios, materialUI, uuid, Yup, Formik. Приложение было написано с использованием TypeScript. На уровне обработки данных я использовал Redux. Данные, такие как пользователи, пользовательские сообщения, полученные с удаленного сервера с помощью API-запросов. Использовали библиотеку Axios для взаимодействия с сервером. Так же присутствует логинизация при разработке которой использовал библиотеку formik. При разработке использовался паттерн 'Presentational and Container Component Pattern' при котором презинтационные компоненты это компоненты, отвечающие за внешний вид пользовательского интерфейса. Они не имеют никаких зависимостей ни с одной частью приложения. Так же для избежания проблем с prop drilling использовалcя context из react-redux. Для роботы с url использовал browser-router. Использовались как функциональные компоненты так и классовые. Для оптимизации приложения использовались React.memo и хук useMemo. Nак же в этом прложении я работал с: Redux(connect, applyMiddleware, combineReducers, reducer), redux-thunk(thunkMiddleware), yup, React hook, uuid, MUI.  При разработке придерживался таких принципов, как: DRY, KISS, CRUD. Проэкт потключен к Git и синхронизирован с GitHub, так же залит на GitHubPages. Этот проект находится в разработке, но вы уже можете увидеть кликнув по названию проэкта (возможна некорректная работа api запросов так как залит на статический сервер)`
let hrefSocialNetwork = 'https://jan-clod.github.io/tsx-social-network-41week/'
let textToDoList = 'Приложение разработано на реакт совместно с использованием typescript. Так же в приложении используются такие библиотеки как uuid и MUI. Структура приложения была разбита на универсальные компонеты для возможности многократного использования. Адаптивная верстка реализована с помощью mui-grid. Так же далее планируется всю работу с данными перенести на redux'
let textAimGame = 'Написан на чистом java scipt. Суть игры: выбрать в меню продолжительность игры и на время нажимать на рандомно появляющиеся круги. В конце инры выводится счет и кнопка начать занаво. Для разработки использовался функциональный подход. При котором я лучше научился навешивать события на элементы а так же поработол со стилями'
let a = `${textSocialNetwork} qwe`
let sn1img = 'https://sun9-71.userapi.com/impg/iPUq8P-Sjt0gzF2sNR549OFF9-2PriFgrgsD9g/wHImQdAYK_o.jpg?size=1915x920&quality=95&sign=52e5366292b033ef4c3b73fe90774504&type=album'
let aim1img = 'https://sun9-73.userapi.com/impg/YGQKv1VPfGZNxtU0xpjvhLD_QVSjX05uDU51yQ/JAQYhZrIzZg.jpg?size=1920x935&quality=95&sign=cd781e1f059f1a31ea7ffec80de18940&type=album'
let aim2img = 'https://sun9-79.userapi.com/impg/kj8Fd5Txp6lt6g0vjf52B6IGwtZEH1puo8I82g/PFhiPTrBlRo.jpg?size=1916x931&quality=95&sign=8227f17a5b48a0f2efede99c0f657638&type=album'
let aim3img = 'https://sun9-8.userapi.com/impg/yj6jrVtad9bhN0NgUqMpygrLpoi1lg9PfNIZVw/4GercVpaCSQ.jpg?size=1909x929&quality=95&sign=a420d53eee41efac89f1a57418025781&type=album'
let aim4img = 'https://sun9-29.userapi.com/impg/NGWpBY6S84ikAzg2V5H-mPAdptDC1JlxQCvQwA/AGBzXtvZeBw.jpg?size=1920x930&quality=95&sign=9cd2be2e60e2078010bda49ba7d85bdb&type=album'

export const MyWorks = () => {

    const ev = (event:any) => {
        console.log(window.pageYOffset);
    }
    /* console.log(); */

    return (
        <div className={s.myWorksBlock}>
            <div className={`${s.myWorksContainer} ${s.container}`}>
                <h1 onClick={(event)=>ev(event)} >Mои работы</h1>

                <OneWorks
                    name={'Social Network'}
                    text={textSocialNetwork}
                    href={hrefSocialNetwork}
                    img={sn1img}
                    img2={'https://sun9-84.userapi.com/impg/bmCXxkzHKViLU0jpajB__F-GoAk4N6-EEwVTjg/ftntmpHSbFQ.jpg?size=1911x927&quality=95&sign=596333bf5bde9ca84b4040533e95be76&type=album'}
                    img3={'https://sun9-31.userapi.com/impg/YiB1ZJ6pHKo3HgOXDqE9KnoXysOS7VvK8kMnUg/Dotw5fMt0dE.jpg?size=1890x931&quality=95&sign=8b88507bd3a6b26e1c5f64a53228d4a5&type=album'}
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