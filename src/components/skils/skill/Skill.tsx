import s from './../../header/Header.module.css'

type SkillType = {
    name: string
    body: any
    img: string
}

export const Skill = (props: SkillType) => {

    return (
        <div className={`${s.skilContainer} `}>
            <div>
                <img className={s.icon} src={props.img} alt="404" />
            </div>
            <h3>{props.name}</h3>
            <span>{props.body}</span>
        </div>

    )
}