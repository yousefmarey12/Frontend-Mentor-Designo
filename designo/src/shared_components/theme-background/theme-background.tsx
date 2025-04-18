import { Children } from "react"
import ThemeBackgroundCSS from "./theme-background.module.css"

export interface OvalInterface {
    position: {
        left: string,
        top: string,
    },
    padding: {
        left: string,
        right: string,
        top: string,
        bottom: string
    },
    margin: {
        left: string,
        right: string,
        top: string,
        bottom: string
    },
    diameter: string
    rotation: '0' | '90' | '180' | '270',
}
export function ThemeBackground({ className = '', children, ovals }) {
    ovals = ovals as OvalInterface[]

    let ovalStyles: {
        transform: string,
        left: string,
        top: string
        margin: string
        padding: string,
        diameter: string
    }[] = ovals.map((val, i) => {
        return {
            transform: `rotate(${val.rotation}deg)`,
            left: `${val.position.left}%`,
            top: `${val.position.top}%`,
            margin: `${val.margin.top}px ${val.margin.right}px ${val.margin.bottom}px ${val.margin.left}px`,
            padding: `${val.padding.top}px ${val.padding.right}px ${val.padding.bottom}px ${val.padding.left}px`,
            diameter: `${val.diameter}px`
        }
    })
    return (
        <>




            <div style={{ padding: ovalStyles[0].padding }} className={ThemeBackgroundCSS.container + ' ' + className}>
                <div>
                    {children}
                </div>
                {ovalStyles.map((val, i) => {
                    return (<div style={{
                        transform: val.transform,
                        left: val.left,
                        top: val.top,
                        width: val.diameter,
                        height: val.diameter
                    }} className={ThemeBackgroundCSS.oval} key={i} >

                    </div>)
                })}

            </div>


        </>
    )
}