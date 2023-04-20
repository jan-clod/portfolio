import s from './../header/Header.module.css'
import rectImg from './reactImg.png'
import jsImg from './jsImg.png'
import tsImg from './tsImg.png'
import cssImg from './cssImg.png'
import reduxImg from './reduxImg.png'
import gitImg from './gitImg.png'
import htmlImg from './htmlImg.png'
import allImg from './allImg.png'
import { Skill } from './skill/Skill'
import {  textHTML, textJS, textTS, textREACT, textREDUX, textGIT, textALL, textCSS, } from './../../value.jsx'

export const Skils = () => {
    return (
        <div className={`${s.skillsBlock} `}>
            <h1 className={s.skillTitle}>Skills</h1>
            <div className={`${s.skilsContainer} ${s.container}`}>
                <Skill name={'html '} body={textHTML} img={htmlImg} />
                <Skill name={'css '} body={textCSS} img={cssImg} />
                <Skill name={'js '} body={textJS} img={jsImg} />
                <Skill name={'ts '} body={textTS} img={tsImg} />

                <Skill name={'react '} body={textREACT} img={rectImg} />
                <Skill name={'git '} body={textGIT} img={gitImg} />
                <Skill name={'redux '} body={textREDUX} img={reduxImg} />
                <Skill name={'all '} body={textALL} img={allImg} />
            </div>
        </div>
    )
}   