import s from './../../header/Header.module.css'

type SkillType = {
    name: string
    body: string[]
    img: string
}

export const Skill = ({ name, body, img }: SkillType) => {

    return (
        <div className={`${s.skilContainer} `}>
            <div>
                <img className={s.icon} src={img} alt="404" />
            </div>
            <h3>{name}</h3>
            <ul>
                {body.map((el) => {
                    return <li> {el}</li>
                })}
            </ul>
            <span>{ }</span>
        </div>

    )
}