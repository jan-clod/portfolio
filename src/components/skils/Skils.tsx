import s from './../header/Header.module.css'
import { Skill } from './skill/Skill'

export const Skils = () => {
    let text = 'Lorem ipsum dolor Lorem i situr adipisicis? Voluptatibustium sunt?  psum dolor situr adipisicis? Volup'
    let text2 = 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic ratione repellendus quod ea facilis aut expedita, incidunt totam aspernatur non corrupti, nihil optio consequatur voluptate sint atque eligendi accusantium. situr adipisicis? Voluptatibustium sunt?  psum dolor situr adipisicis? Volup'
    return (
        <div className={`${s.skillsBlock} `}>
                <h1 className={s.skillTitle}>skills</h1>
            <div className={`${s.skilsContainer} ${s.container}`}>
                <Skill name={'react '} body={'i leern react '} img={'https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/react-tutorial/9oI3y6pGdIOlO0cYhTeldDBqpWu1?avatarupdatetimestamp=undefined'} />
                <Skill name={'js '} body={text2} img={'https://kursosliv.com/wp-content/uploads/2022/07/udemy-sovremennyj-javascript-s-nulya-na-realnyh-proektah-denis-meshheryakov_62db46f3becee.png'} />
                <Skill name={'html '} body={text} img={'https://www.clipartmax.com/png/full/171-1719778_html5-html5-logo-png.png'} />
            </div>
        </div>

    )
}