import React, { Component } from 'react'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: '',
      email: '',
      departure: '',
      format: '',
      reasons: {
        isPlaces: false,
        isTimes: false,
        isPeople: false,
        isAdventure: false,
        isOther: false,
      },
      submited: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === 'checkbox'
      ? this.setState((prevState) => {
          return {
            reasons: {
              ...prevState.reasons,
              [name]: checked,
            },
          }
        })
      : this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState((prevState) => {
      return { submited: !prevState.submited }
    })
    console.log(this.state.submited)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label id='name-label' for='name'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='form-control'
            value={this.state.name}
            onChange={this.handleChange}
            placeholder='Enter your name'
            required
          />
        </div>
        <div className='form-group'>
          <label id='email-label' for='email'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='form-control'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='Enter your Email'
            required
          />
        </div>
        <div className='form-group'>
          <label id='number-label' for='number'>
            Age<span className='clue'>(optional)</span>
          </label>
          <input
            type='number'
            name='age'
            id='number'
            min='10'
            max='99'
            className='form-control'
            value={this.state.age}
            onChange={this.handleChange}
            placeholder='Age'
          />
        </div>
        <div className='form-group'>
          <p>What do you prefer?</p>
          <select
            name='format'
            value={this.state.format}
            onChange={this.handleChange}
            className='form-control'
            required
          >
            <option disabled selected value>
              Select an option
            </option>
            <option value='travel through time'>Travel through time</option>
            <option value='travel through space'>Travel through space</option>
            <option value='travel through both time and space'>Both</option>
          </select>
        </div>
        <div className='form-group'>
          <p> Do you want to travel...</p>
          <label>
            <input
              type='radio'
              value='today'
              checked={this.state.departure === 'today'}
              onChange={this.handleChange}
              name='departure'
              className='input-radio'
            />
            Today
          </label>
          <label>
            <input
              type='radio'
              value='this week'
              checked={this.state.departure === 'this week'}
              onChange={this.handleChange}
              name='departure'
              className='input-radio'
            />
            This week
          </label>

          <label>
            <input
              type='radio'
              value='next week'
              checked={this.state.departure === 'next week'}
              onChange={this.handleChange}
              name='departure'
              className='input-radio'
            />
            Next week
          </label>

          <label>
            <input
              type='radio'
              value='next month'
              checked={this.state.departure === 'next month'}
              onChange={this.handleChange}
              name='departure'
              className='input-radio'
            />
            Next month
          </label>

          <label>
            <input
              type='radio'
              value='next year'
              checked={this.state.departure === 'next year'}
              onChange={this.handleChange}
              name='departure'
              className='input-radio'
            />
            Next year
          </label>
        </div>
        <div className='form-group'>
          <p>
            Why do you want to travel?{' '}
            <span className='clue'>(Check all that apply)</span>
          </p>

          <label>
            <input
              type='checkbox'
              name='isPlaces'
              checked={this.state.reasons.isPlaces}
              onChange={this.handleChange}
              className='input-checkbox'
            />
            To see different places
          </label>
          <label>
            <input
              type='checkbox'
              name='isTimes'
              checked={this.state.reasons.isTimes}
              onChange={this.handleChange}
              className='input-checkbox'
            />
            To see different times
          </label>
          <label>
            <input
              type='checkbox'
              name='isPeople'
              checked={this.state.reasons.isPeople}
              onChange={this.handleChange}
              className='input-checkbox'
            />
            To meet people
          </label>
          <label>
            <input
              type='checkbox'
              name='isAdventure'
              checked={this.state.reasons.isAdventure}
              onChange={this.handleChange}
              className='input-checkbox'
            />
            To go on an adventure
          </label>
          <label>
            <input
              type='checkbox'
              name='isOther'
              checked={this.state.reasons.isOther}
              onChange={this.handleChange}
              className='input-checkbox'
            />
            Other
          </label>
        </div>
        <div className='form-group'>
          <p>Your Motto?</p>
          <textarea
            className='input-textarea'
            name='motto'
            placeholder="Allon's y!? Geronimo!?"
          ></textarea>
        </div>
        <div class='form-group'>
          <button type='submit' id='submit' class='submit-button'>
            Submit
          </button>
        </div>
      </form>
    )
  }
}

export default Main
