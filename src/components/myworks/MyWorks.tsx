import s from './../header/Header.module.css'
import { OneWorks } from './works/OneWorks'

let text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae, molestiae accusamus necessitatibus qui amet reprehenderit eius quod. Eaque excepturi rem mollitia numquam deleniti ea error provident molestias obcaecati dicta.'
let text2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae, molestiae accusamus necessitatibus qui amet reprehenderit eius quod. Eaque excepturi rem mollitia numquam deleniti ea error provident molestias obcaecati dicta.'
let text3 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae, molestiae accusamus necessitatibus qui amet reprehenderit eius quod. Eaque excepturi rem mollitia numquam deleniti ea error provident molestias obcaecati dicta.'

export const MyWorks = () => {

    return (
        <div className={s.myWorksBlock}>
            <div className={`${s.myWorksContainer} ${s.container}`}>
                <OneWorks name={'Social Network'} text={text1} img={'https://sun9-85.userapi.com/impg/Kbyn2xPSw3R2yejPt04BpNvXfbEN295_WmcFuQ/KI8DncS6zV0.jpg?size=1912x931&quality=95&sign=8b5cb714199a0e33891f2bf5609b94c7&type=album'} img2={'https://sun9-84.userapi.com/impg/bmCXxkzHKViLU0jpajB__F-GoAk4N6-EEwVTjg/ftntmpHSbFQ.jpg?size=1911x927&quality=95&sign=596333bf5bde9ca84b4040533e95be76&type=album'} img3={'https://sun9-31.userapi.com/impg/YiB1ZJ6pHKo3HgOXDqE9KnoXysOS7VvK8kMnUg/Dotw5fMt0dE.jpg?size=1890x931&quality=95&sign=8b88507bd3a6b26e1c5f64a53228d4a5&type=album'}/>
                <OneWorks name={'ToDoList'} text={text2} img={'https://sun9-33.userapi.com/impg/PogROw8a7Usr_THH1wSRx3y88SYcOSnEviCQig/997caiGaLig.jpg?size=1918x937&quality=95&sign=ce936b53f25db62943b98a8ede1be3ff&type=album'} />
                <OneWorks name={'Counter'} text={text3} img={'https://sun9-77.userapi.com/impg/xJFWR5t8TbmOxev89hHENOZqpNZ2kRv8NsL4qQ/Sjajfnadhsc.jpg?size=1920x1080&quality=95&sign=57bbc3e599e40b96178d646a458f8889&type=album'} />
            </div>
        </div>

    )
}