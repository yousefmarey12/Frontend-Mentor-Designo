import { Quality } from "../../contexts/home";
import QualityCSS from "./quality.module.css"
export function QualityComponent({ quality }) {
    return (
        <div className={QualityCSS.quality + " text-align-center"}>
            <div className={QualityCSS.image} style={{ backgroundImage: 'url(' + quality.pictureUrl + ')' }}>

            </div>
            <div className={QualityCSS.oval} style={{ transform: 'translate(-50%, -50%) rotate(' + quality.rotation + 'deg)' }}>

            </div>

            <h1 className="h3-jost-medium" style={{ color: '#333136' }}>
                {quality.title}
            </h1>
            <p className="body-jost-text" style={{ color: '#333136' }}>
                {quality.description}
            </p>
        </div>
    )
}