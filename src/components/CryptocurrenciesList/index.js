// Write your JS code here
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = ({cryptocurrenciesData}) => {
  return (
    <div className="cryptocurrencies-list">
      <div className="list-header">
        <p>Cryptocurrency</p>
        <p>USD</p>
        <p>EURO</p>
      </div>
      <ul className="list-items">
        {cryptocurrenciesData.map(currency => (
          <CryptocurrencyItem key={currency.id} currency={currency} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
