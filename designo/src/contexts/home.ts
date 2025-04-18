import { createContext } from "react";
import { OfferBlock } from "../shared_components/offer-blocks/offer-blocks";
export interface Quality {
    title: string,
    pictureUrl: string,
    description: string,
    rotation: string
}
export let offers: { qualities: Quality[], offers: OfferBlock[] } =

{
    offers: [
        {
            pictureUrl: 'https://res.cloudinary.com/dnvjn55ti/image/upload/v1744372385/image-web-design_aaes6g.jpg',
            link: '',
            title: 'Web Design'
        },
        {
            pictureUrl: 'https://res.cloudinary.com/dnvjn55ti/image/upload/v1744372377/image-app-design_clhwzs.jpg',
            link: '',
            title: 'App Design'
        },
        {
            pictureUrl: 'https://res.cloudinary.com/dnvjn55ti/image/upload/v1744372380/image-graphic-design_nyewpm.jpg',
            link: '',
            title: 'Graphic Design'
        }
    ],
    qualities: [
        {
            title: 'PASSIONATE',
            pictureUrl: 'https://res.cloudinary.com/dnvjn55ti/image/upload/v1744382557/illustration-passionate_shluz7.svg',
            description: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
            rotation: '180'
        },
        {
            title: 'RESOURCEFUL',
            pictureUrl: 'https://res.cloudinary.com/dnvjn55ti/image/upload/v1744382553/illustration-resourceful_txzwfa.svg',
            description: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
            rotation: '90'
        },
        {
            title: 'FRIENDLY',
            description: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
            rotation: '270',
            pictureUrl: 'https://res.cloudinary.com/dnvjn55ti/image/upload/v1744382563/illustration-friendly_tqodvt.svg'
        },
    ]

}


export let homeContext = createContext(offers)