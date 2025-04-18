import OfferBlockCSS from "./offer-block.module.css"


export function OfferBlock({ link, pictureUrl, title }) {
    return (<div className={OfferBlockCSS.block} style={{ backgroundImage: 'url(' + pictureUrl + ')' }}>
        <h1 className={"h1-jost-medium " + OfferBlockCSS.h1}>{title}</h1>
        <h2 className={"h2-jost-medium " + OfferBlockCSS.h2}>View Projects <span style={{ paddingLeft: '8px' }}><svg width="8" height="8"
            version="1.1" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="4" y2="4" stroke="#E7816B" stroke-width="2"></line>
            <line x1="4" y1="4" x2="0" y2="8" stroke="#E7816B" stroke-width="2"></line>
        </svg></span></h2>
    </div>)
}