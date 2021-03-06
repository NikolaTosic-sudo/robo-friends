import React, {Component} from 'react'
import axios from 'axios'
import "../assets/Chuck.css"


class Chuck extends Component {
    state = {
        quote: ''
    }

    componentDidMount(){
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => {
                this.setState({
                    quote: res.data.value
                })
            })
    }

    getNewFact = () => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => {
                this.setState({
                    quote: res.data.value
                })
            })
    }

    render () {
        return(
            <div className='chuck'>
                <h1>Chuck Norris Facts</h1>
                <p>{this.state.quote}</p>
                <button className="btn" onClick={this.getNewFact}>Get New Fact</button>
            </div>
        )
    }
}

export default Chuck