import s from './../../header/Header.module.css'

type propsType = {
    name: string
    img: string
    img2?: string
    img3?: string
    img4?: string
    href?: string
    text: string
    props?: any
    
}
export const OneWorks: React.FC<propsType> = ({name,img,img2,img3,img4,text,href,...props}) => {

    return (
        <div className={s.OneWorksBlock}>
            <div className={'🔗' + s.NameOneWork}>
                <h2><a href={href}>{name}</a></h2>
            </div>

            <div className={s.blockImgText}>
                <div className={s.imgDivOneWork}>
                    <img className={s.imgWork} src={img} alt="404" />
                    {img2 && <img className={s.imgWork} src={img2} alt="404" />}
                    {img3 && <img className={s.imgWork} src={img3} alt="404" />}
                    {img4 && <img className={s.imgWork} src={img4} alt="404" />}
                </div>
                {props.props}
                <div className={`${s.DivTextOneWork}`}>
                    <p>{text}</p>
                </div>
            </div>
        </div>

    )
}