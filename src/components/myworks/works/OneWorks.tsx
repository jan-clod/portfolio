import s from './../../header/Header.module.css'

type propsType = {
    name:string
    img: string
    text:string
}
export const OneWorks = (props:propsType) => {

    return (
        <div className={s.OneWorksBlock}>
            <img className={s.imgWork} src={props.img} alt="404" />
         
            <div className={`${s.OneWorksContainer}`}>
                <h2>{props.name}</h2>
                <p>{props.text}</p>
            </div>
        </div>

    )
}