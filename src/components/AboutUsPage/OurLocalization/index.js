import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

const CustomizedMarker = ({ position, name, phone, street }) => (
  <Marker position={position}>
    <Popup>
        <div className="flex flex-col items-center">
            <div className="font-bold text-lg text-center">{name}</div>
            <div>Endereço: {street}</div>
            <div>Telefone: {phone}</div>
        </div>
    </Popup>
  </Marker>
)

const OurLocalization = () => {
    const initialMarkerPosition = [-23.562516,-46.6552123]

    const markers = [
        {
          name: "Yola Studio Avenida Paulista",
          position: [-23.562516,-46.6552123],
          street: "Rua Xablau, 94",
          phone: "(11) 4002-8922"
        },
        {
          name: "Yola Studio Liberdade",
          position: [-23.5653114,-46.6426809],
          street: "Rua Xablau, 94",
          phone: "(11) 4002-8922"
        },
        {
          name: "Yola Studio Paraíso",
          position: [-23.5756634,-46.6563361],
          street: "Rua Xablau, 94",
          phone: "(11) 4002-8922"
        },
        {
          name: "Yola Studio Consolação",
          position: [-23.5511917,-46.6540466],
          street: "Rua Xablau, 94",
          phone: "(11) 4002-8922"
        },
        {
          name: "Yola Studio Vila Olímpia",
          position: [-23.5991862,-46.6933917],
          street: "Rua Xablau, 94",
          phone: "(11) 4002-8922"
        },
        {
          name: "Yola Studio Itaim Bibi",
          position: [-23.584086,-46.6862679],
          street: "Rua Xablau, 94",
          phone: "(11) 4002-8922"
        },
    ]

    return (
        <div className="pb-20">
            <div
              className="pb-6"
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-duration="800"
            >
                <h2 className="h2 text-center">
                    Nossa localização
                </h2>
            </div>
            <div
              className="w-[90%] lg:w-[70%] mx-auto"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1200"
            >
                <MapContainer
                    center={initialMarkerPosition}
                    zoom={13}
                    style={{
                      height: '500px', width: '100%' 
                  }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {markers.map((marker, index) => (
                        <CustomizedMarker
                            key={index}
                            position={marker.position}
                            name={marker.name}
                            street={marker.street}
                            phone={marker.phone}
                        />
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}

export default OurLocalization