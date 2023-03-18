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
            <p onClick={()=>click(0)}>Top</p>
            <p onClick={()=>click(850)}>Skills</p>
            <p onClick={()=>click(1900)}>Projects</p>
            <p onClick={()=>click(9000)}>Contacts</p>
        </div>

    )
}