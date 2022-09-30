import s from './../../header/Header.module.css'

type SkillType = {
    name: string
    body: string
    img: string
}

export const Skill = (props: SkillType) => {

    return (
        <div className={`${s.skilContainer} `}>
            <div className={s.icon}>
            <img src={props.img} alt="404" /></div>
            <h3>{props.name}</h3>
            <span>{props.body}</span>
        </div>

    )
}