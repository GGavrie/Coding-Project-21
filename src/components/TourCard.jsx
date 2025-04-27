// Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked

import { useState } from 'react'

const TourCard = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} alt={name} className="tour-img" />
        <div className="tour-price">${price}</div>
      </div>
      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button 
            className="read-more-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button 
          className="btn btn-danger delete-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  )
}

export default TourCard
