import React from 'react'
import { Link } from '@reach/router'
import { useNearScreen } from '../hooks/useNearScreen'

export const Country = (props) => {
  const [show, ref] = useNearScreen()

  const {
    name,
    population,
    region,
    capital,
    flag
  } = props

  return (
    <Link to={`/detail/${name}`}>
      <div className='card' ref={ref}>
        {
          show &&
            <>
              <figure className='card__image'>
                <img src={flag} alt={`${name} flag`} />
              </figure>
              <div className='card__details'>
                <h4 className='card__details__title'>{name}</h4>
                <p><strong>Population: </strong>{population}</p>
                <p><strong>Region: </strong>{region}</p>
                <p><strong>Capital: </strong>{capital}</p>
              </div>
            </>
        }
      </div>
    </Link>
  )
}
