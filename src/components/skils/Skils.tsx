import s from './../header/Header.module.css'
import { Skill } from './skill/Skill'
import {  textHTML, textJS, textTS, textREACT, textREDUX, textGIT, textALL, textCSS, linkREDUX, linkJS, linkGIT, linkALL, linkCSS, linkHTML, linkREACT, linkTS } from './../../value.jsx'

export const Skils = () => {
    return (
        <div className={`${s.skillsBlock} `}>
            <h1 className={s.skillTitle}>skills</h1>
            <div className={`${s.skilsContainer} ${s.container}`}>
                <Skill name={'html '} body={textHTML} img={linkHTML} />
                <Skill name={'css '} body={textCSS} img={linkCSS} />
                <Skill name={'js '} body={textJS} img={linkJS} />
                <Skill name={'ts '} body={textTS} img={linkTS} />

                <Skill name={'react '} body={textREACT} img={linkREACT} />
                <Skill name={'git '} body={textGIT} img={linkGIT} />
                <Skill name={'redux '} body={textREDUX} img={linkREDUX} />
                <Skill name={'all '} body={textALL} img={linkALL} />
            </div>
        </div>
    )
}   