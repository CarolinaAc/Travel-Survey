import React, {Component} from 'react'

class Main extends Component{
    constructor(){
        super()
        this.state = {
          name: "",
          age: "",
          email: "",
          departure: "",
          format: "",
          reasons: {
            isPlaces: false,
            isTimes: false,
            isPeople: false,
            isAdventure: false,
            isOther: false
          },
          submited: false
        }
          this.handleChange = this.handleChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
      }
      
      handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
          this.setState(prevState => {
            return {
              reasons: {
                ...prevState.reasons,
                [name]: checked
              }
            }
          })
          : this.setState({[name]: value})
      }
      
      handleSubmit(event){
        event.preventDefault()
        this.setState(prevState =>{
          return {submited: !prevState.submited}
        })
        console.log(this.state.submited)
      }
      
      
      render() {
        return (
          <div className="App">
            <main>
              <form onSubmit={this.handleSubmit}>
                <div className="personal">
                <label>Name: </label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" required/>
                <label>Age: </label>
                <input type="number" name="age" value={this.state.age} onChange={this.handleChange} placeholder="Age" required/>
                <label>Email: </label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" required/><br/>
                </div>
                <ul style={{"listStyle": "none"}}>Do you want to travel... <i>(Select the option that applies to you)</i> 
                  <label><li><input type="radio" 
                  checked={this.state.departure === "today"} 
                  value="today" 
                  onChange={this.handleChange} 
                  name="departure" required
                  className="radio"/>Today</li></label>
      
                  <label><li><input type="radio" 
                  checked={this.state.departure === "this week"} 
                  value="this week" 
                  onChange={this.handleChange} 
                  name="departure" 
                  className="radio"/>This week</li></label>
      
                  <label><li><input type="radio" 
                  checked={this.state.departure === "next week"} 
                  value="next week"
                    onChange={this.handleChange} 
                  name="departure" 
                  className="radio"/>Next week</li></label>
      
                  <label><li><input type="radio" 
                  checked={this.state.departure === "next month"} 
                  value="next month" 
                  onChange={this.handleChange} 
                  name="departure" 
                  className="radio"/>Next month</li></label>
      
                  <label><li><input type="radio" 
                  checked={this.state.departure === "next year"} 
                  value="next year" 
                  onChange={this.handleChange} 
                  name="departure" 
                  className="radio"/>Next year</li></label>
                </ul>
                <div className="selection">
                <p>What do you prefer?</p> 
                <select name="format" value={this.state.format} onChange={this.handleChange} >
                  <option disabled value>Select an option</option>
                  <option value="travel through time">Travel through time</option>
                  <option value="travel through space">Travel through space</option>
                  <option value="travel through both time and space">Both</option>
                </select></div>
                <br/>
                <ul className="reasons" style={{"listStyle": "none"}} name="reason">Why do you want to travel?
                  <label><li><input type="checkbox" name="isPlaces" checked={this.state.reasons.isPlaces} 
                  onChange={this.handleChange} />To see different places</li></label>
                  <label><li><input type="checkbox" name="isTimes" checked={this.state.reasons.isTimes} 
                  onChange={this.handleChange} />To see different times</li></label>
                  <label><li><input type="checkbox" name="isPeople" checked={this.state.reasons.isPeople} 
                  onChange={this.handleChange} />To meet people</li></label>
                  <label><li><input type="checkbox" name="isAdventure" checked={this.state.reasons.isAdventure} 
                  onChange={this.handleChange} />To go on an adventure</li></label>
                  <label><li><input type="checkbox" name="isOther" checked={this.state.reasons.isOther} 
                  onChange={this.handleChange} />Other</li></label>
                </ul><br/>
                <button >Submit</button>
              </form>  
              <hr />
              {this.state.submited ? 
              <div>
              <h2>Entered information</h2>
              <p>I am <b>{this.state.name}</b> and I am <b>{this.state.age}</b>. My email address is <b>{this.state.email}</b> and I want to <b>{this.state.format}</b> with you <b>{this.state.departure}</b></p>
                {this.state.reasons.isPlaces || this.state.reasons.isTimes || this.state.reasons.isPeople || this.state.reasons.isAdventure || this.state.reasons.isOther ? 
                <div>
                <p>The reasons I want to travel with you are:</p> 
                <ul>
                  {this.state.reasons.isPlaces ? <li>To see different places</li> : null}
                  {this.state.reasons.isTimes ? <li>To see different times</li> : null}
                  {this.state.reasons.isPeople ? <li>To meet people</li> : null}
                  {this.state.reasons.isAdventure ? <li>To go on an adventure</li> : null}
                  {this.state.reasons.isOther ? <li>Other reasons</li> : null}
                </ul>
                </div>  : <h3>I really hope we can travel together soon!</h3>}
              </div>
                : null}
            </main>
          </div>
        )
      }
}

export default Main