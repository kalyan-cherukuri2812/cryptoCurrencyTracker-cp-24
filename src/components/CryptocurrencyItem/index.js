import './index.css'

const CryptocurrencyItem = props => {
  const {data} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = data
  return (
    <li className="li-div">
      <div className="type-div">
        <img className="l-img" src={currencyLogo} alt={currencyName} />
        <p className="p1">{currencyName}</p>
      </div>
      <p className="p2">{usdValue}</p>
      <p className="p3">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
