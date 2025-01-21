import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: 30.0444, // Latitude for Cairo, Egypt
  lng: 31.2357, // Longitude for Cairo, Egypt
}
const Map = () => {
  return (
    <section className="section py-5">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </section>
  )
}

export default Map
