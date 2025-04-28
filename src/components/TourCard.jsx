import { useState } from 'react'

// TourCard component displays individual tour information and allows removal
const TourCard = ({ id, name, info, image, price, removeTour }) => {
  // State to manage whether the full tour info is shown or truncated
  const [readMore, setReadMore] = useState(false)

  return (
    // Article element representing the tour card
    <article className="tour-card">
      {/* Container for the tour image and price overlay */}
      <div className="tour-img-container">
        <img src={image} alt={name} className="tour-img" />
        <div className="tour-price">${price}</div>
      </div>
      {/* Container for the tour information */}
      <div className="tour-info">
        {/* Tour name */}
        <h4>{name}</h4>
        {/* Tour description with read more/show less functionality */}
        <p>
          {/* Conditionally render full info or truncated info */}
          {readMore ? info : `${info.substring(0, 200)}...`}
          {/* Button to toggle read more state */}
          <button
            className="read-more-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        {/* Button to remove the tour */}
        <button
          className="btn btn-danger delete-btn"
          onClick={() => removeTour(id)} // Call removeTour function passed as prop with the tour's id
        >
          Not Interested
        </button>
      </div>
    </article>
  )
}

export default TourCard
