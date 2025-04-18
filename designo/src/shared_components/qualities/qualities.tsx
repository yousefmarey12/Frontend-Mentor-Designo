import { useContext } from "react";
import { homeContext } from "../../contexts/home";
import { QualityComponent } from "./quality";
import QualitiesCSS from "./qualities.module.css"
export default function Qualities() {
    let home = useContext(homeContext)
    return (
        <div className={QualitiesCSS.qualities}>
            {home.qualities.map((val, i) => {
                return <QualityComponent quality={val} key={i}></QualityComponent>
            })}
        </div>

    )
}