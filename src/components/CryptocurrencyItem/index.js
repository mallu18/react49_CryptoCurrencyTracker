// Write your JS code here
import './index.css'

const CryptocurrencyItem = ({currency}) => {
  const {currency_name, usd_value, euro_value, currency_logo} = currency

  return (
    <li className="Cryptocurrency-Item">
      <div className="currency-details">
        <img
          src={currency_logo}
          alt={currency_name}
          className="currency-logo"
        />
        <p className="currency-name">{currency_name}</p>
      </div>
      <p className="currency-usd">{usd_value}</p>
      <p className="currency-euro">{euro_value}</p>
    </li>
  )
}

export default CryptocurrencyItem
