import './Subscription.css'

function Subscription() {
  return (
    <>
       <section className="subscription-form">
        <h2>Get the best offers first</h2>
        <p>Join our newsletter.</p>

        <form>
            <label>E-mail</label>
            <input type="email" placeholder="Your Email address" id="email-input" />
            <input type="submit" value="Subscribe" id="submit-button"/>
        </form>
       </section>
    </>
  )
}

export default Subscription