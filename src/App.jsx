// Fetch tours from https://course-api.com/react-tours-project using useEffect
// Store in state: tours, loading, error
// If loading is true, display "Loading..."
// If error, display an error message
// Else, render Gallery with tour data
// If no tours are left, show a "Refresh" button to refetch the data
import { useState, useEffect } from 'react'
import Gallery from './components/Gallery'

const [tours, setTours] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

const fetchTours = async () => {
  try {
    setLoading(true)
    const response = await fetch('https://course-api.com/react-tours-project')
    if (!response.ok) {
      throw new Error('Failed to fetch tours')
    }
    const data = await response.json()
    setTours(data)
    setError(null)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

useEffect(() => {
  fetchTours()
}, [])

if (loading) {
  return <h2>Loading...</h2>
}

if (error) {
  return <h2>Error: {error}</h2>
}

if (tours.length === 0) {
  return (
    <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={fetchTours}>
          refresh
        </button>
      </div>
    </main>
  )
}

return <Gallery tours={tours} removeTour={removeTour} />
