import s from './../header/Header.module.css'

export const Nav = () => {
    const click = ( num:number) => {
        window.scrollTo({
            top: num,
            behavior: 'smooth'
        })
    }

    
    return (
        <div className={s.nav}>
            <p onClick={()=>click(0)}>Главная</p>
            <p onClick={()=>click(850)}>Скилы</p>
            <p onClick={()=>click(1900)}>Проекты</p>
            <p onClick={()=>click(8100)}>Контакты</p>
        </div>

    )
}