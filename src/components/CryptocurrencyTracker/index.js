import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrenciesData()
  }

  getCryptocurrenciesData = async () => {
    const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      this.setState({cryptocurrenciesData: data, isLoading: false})
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({isLoading: false})
    }
  }

  render() {
    const {cryptocurrenciesData, isLoading} = this.state

    return (
      <div className="cryptocurrency-tracker">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="bg-image"
        />
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
