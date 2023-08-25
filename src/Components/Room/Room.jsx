import  './Room.css'
function Room() {
  const rooms = [
    {
      roomImg:"https://www.w3schools.com/w3images/room_single.jpg",
      roomCategory:"Single Room",
      price: 99,
      bedCategory:"Single bed",
      area:15
    },
    {
      roomImg:"https://www.w3schools.com/w3images/room_double.jpg",
      roomCategory:"Double Room",
      price: 149,
      bedCategory:"Queen-size bed",
      area:25
    },
    {
      roomImg:"https://www.w3schools.com/w3images/room_deluxe.jpg",
      roomCategory:"Deluxe Room",
      price: 199,
      bedCategory:"King-size bed",
      area:40
    },
  ]

  return (
    <>
    <section>
        <h2>Rooms</h2>
        <p>Make yourself at home is our slogan. We offer the best beds in the industry. Sleep well and rest well.</p>
        <div className="room-cards-container">
        {rooms.map((room) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="room-card">
              <img src={room.roomImg}></img>
                <div className="room-card-text">
              <h3>{room.roomCategory}</h3>
              <p id="gray-text">From ${room.price}</p>
              <p>{room.bedCategory}</p>
              <p>{room.area} m2</p>
              <button>Choose Room</button>
              </div>
              </div>
            )
          })}

     
        </div>
        
    </section>
    
    </>
  )
}

export default Room