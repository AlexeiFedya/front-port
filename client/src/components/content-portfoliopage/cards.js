import React from 'react';
import {CardsItem} from './cards-item'



export const Cards = ({cards}) => {
    
    return (
        <>
            {
                cards.map ((cards) => {
                    return (
                        <CardsItem cards={cards} key={cards.id} />
                    )
                })
            }
        </>
    )
}