import s from './../header/Header.module.css'
import { OneWorks } from './works/OneWorks'

let text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae, molestiae accusamus necessitatibus qui amet reprehenderit eius quod. Eaque excepturi rem mollitia numquam deleniti ea error provident molestias obcaecati dicta.'
let text2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae, molestiae accusamus necessitatibus qui amet reprehenderit eius quod. Eaque excepturi rem mollitia numquam deleniti ea error provident molestias obcaecati dicta.'
let text3 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae, molestiae accusamus necessitatibus qui amet reprehenderit eius quod. Eaque excepturi rem mollitia numquam deleniti ea error provident molestias obcaecati dicta.'

export const MyWorks = () => {

    return (
        <div className={s.myWorksBlock}>
            <div className={`${s.myWorksContainer} ${s.container}`}>
                <OneWorks name={'Social Network'} img={''} text={text1}/>
                <OneWorks name={'ToDoList'} img={''} text={text2}/>
                <OneWorks name={'Counter'} img={''} text={text3}/>
            </div>
        </div>

    )
}