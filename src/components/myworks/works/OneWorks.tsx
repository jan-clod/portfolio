import s from './../../header/Header.module.css'

type propsType = {
    name: string
    img: string
    img2?: string
    img3?: string
    href?: string
    text: string
}
export const OneWorks = (props: propsType) => {

    return (
        <div className={s.OneWorksBlock}>
            <div className={s.NameOneWork}>
                <h2><a href={props.href}>{props.name}</a></h2>
            </div>

            <div className={s.blockImgText}>
                <div className={s.imgDivOneWork}>
                    <img className={s.imgWork} src={props.img} alt="404" />
                    {props.img2 && <img className={s.imgWork} src={props.img2} alt="404" />}
                    {props.img3 && <img className={s.imgWork} src={props.img3} alt="404" />}
                </div>

                <div className={`${s.DivTextOneWork}`}>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>

    )
}