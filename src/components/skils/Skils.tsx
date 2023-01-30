import s from './../header/Header.module.css'
import { Skill } from './skill/Skill'
import {text,text2,link,link2,link3,link4,link5} from './../../value.js'

export const Skils = () => {
    return (
        <div className={`${s.skillsBlock} `}>
                <h1 className={s.skillTitle}>skills</h1>
            <div className={`${s.skilsContainer} ${s.container}`}>
                <Skill name={'react '} body={'i leern react '} img={link} />
                <Skill name={'js '} body={text2} img={link2} />
                <Skill name={'html '} body={text} img={link3} />
                <Skill name={'html '} body={text} img={link4} />
                <Skill name={'react '} body={'i leern react '} img={link5} />
            </div>
        </div>
    )
}