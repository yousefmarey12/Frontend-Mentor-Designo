import ButtonCSS from "./button.module.css"
export type ButtonTypeTheme = "dark" | "light"
export type ButtonTypeFunc = "submit" | "button" | "reset"
export function Button({
    btnTheme,
    btnType,
    btnContent
}) {
    btnTheme as ButtonTypeTheme
    btnType as ButtonTypeFunc
    btnContent as string
    return (
        <div >
            <div >
                <button className={btnTheme == 'dark' ? ButtonCSS.btn__dark : ButtonCSS.btn__light} type={btnType}>
                    {btnContent}
                </button>
            </div>'
        </div>
    )
}