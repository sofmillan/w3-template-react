function SearchForm() {
  return (
    <>
    <form className="room-form">
        <div>
        <label>Check In</label>
        <input type="text" placeholder="DD MM YYYY"></input>
        </div>

        <div>
        <label>Check Out</label>
        <input type="text" placeholder="DD MM YYYY"></input>
        </div>

        <div>
        <label>Adults</label>
        <input type="number" placeholder="1"></input>
        </div>

        <div>
        <label>Kids</label>
        <input type="number" placeholder="0"></input>
        </div>

        <div>
        <label>Search</label>
        <input type="submit" id="room-submit" value="Search"></input>
        </div> 
        </form>
    </>
  )
}

export default SearchForm


