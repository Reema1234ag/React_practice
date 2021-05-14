import React from 'react'

function Hero({heroname}) {
    if(heroname=='Joker'){
        throw new Error('Not hero')
    }
    return (
        <div>
          {heroname}  
        </div>
    )
}

export default Hero
