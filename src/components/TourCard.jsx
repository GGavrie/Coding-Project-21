// Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked

import { useState } from 'react'

const TourCard = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button 
            className="info-btn" 
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button 
          className="btn btn-block delete-btn" 
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  )
}

export default TourCard
