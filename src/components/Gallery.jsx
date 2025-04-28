import TourCard from './TourCard';

// Create a gallery that maps over the tours array and renders TourCard for each
const Gallery = ({ tours, onRemove }) => {
  return (
    // Container for the gallery grid
    <div className="gallery">
      {/* Map through tours array and render a TourCard component for each tour */}
      {tours.map((tour) => (
        // Pass tour data and the remove function (renamed to match TourCard prop)
        <TourCard key={tour.id} {...tour} removeTour={onRemove} />
      ))}
    </div>
  );
};

export default Gallery;
