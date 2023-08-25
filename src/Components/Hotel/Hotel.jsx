import './Hotel.css'

function Hotel() {
  return (
    <>
       <section className="hotel">
        <h2>Our Hotels</h2>
        <p>You can find our hotels anywhere in the world:</p>

        <div className="img-container">
            <div id="cinque-terre"></div>
            <div id="new-york"></div>
            <div id="san-francisco"></div>
            <div id="pisa"></div>
            <div id="paris"></div>

        </div>
       </section>
    </>
  )
}

export default Hotel