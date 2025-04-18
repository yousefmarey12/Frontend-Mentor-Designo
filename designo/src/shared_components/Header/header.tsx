import HeaderCSS from "./header.module.css"

// should be staticlly rendered
export function Header() {
    return (
        <>
            <nav className={HeaderCSS.navigation}>
                <div className={HeaderCSS.navigation__logo}>
                    <div className={HeaderCSS.navigation__icon}></div>
                    <h1 className={HeaderCSS.navigation__text}>DESIGNO</h1>
                </div>
                <svg className="navigation__hamburger" version="1.1" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" x2="24" y1="4" y2="4" stroke="#000" stroke-width="4"></line>
                    <line x1="0" x2="24" y1="12" y2="12" stroke="#000" stroke-width="4"></line>
                    <line x1="0" x2="24" y1="20" y2="20" stroke="#000" stroke-width="4"></line>
                </svg>
            </nav>
        </>
    )
}