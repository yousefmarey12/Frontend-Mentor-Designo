import { useContext } from "react"
import { homeContext } from "../../contexts/home"
import { OfferBlock } from "./offer-block"
import OfferBlocksCSS from "./offer-blocks.module.css"
export type OfferBlock = {
    pictureUrl: string,
    link: string,
    title: string
}

export function OfferBlocks() {
    let home = useContext(homeContext)
    return (
        <div className={OfferBlocksCSS.offer_blocks} >
            {home.offers.map((val, i) => {
                return <OfferBlock key={i} pictureUrl={val.pictureUrl} title={val.title} link={val.link} />
            })}

        </div >
    )
}