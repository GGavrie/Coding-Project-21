// Create a gallery that maps over the tours array and renders TourCard for each

import TourCard from './TourCard'

const Gallery = ({ tours, removeTour }) => {
  return (
    <section className="tours">
      {tours.map((tour) => {
        return <TourCard key={tour.id} {...tour} removeTour={removeTour} />
      })}
    </section>
  )
}

export default Gallery
