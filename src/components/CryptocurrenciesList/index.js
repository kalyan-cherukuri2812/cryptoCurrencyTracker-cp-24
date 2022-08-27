// Write your JS code here
import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {loading: true, data: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responseData = await response.json()
    console.log(responseData)
    const dataList = responseData.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    console.log(dataList)
    this.setState({data: dataList, loading: false})
  }

  render() {
    const {data, loading} = this.state
    return (
      <div className="card">
        <h1 className="main-h">Cryptocurrency Tracker</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="list-div">
          <div className="list-card">
            <h3 className="h3-1">Coin Type</h3>
            <h3 className="h3-2">USD</h3>
            <h3 className="h3-3">EURO</h3>
          </div>
          {loading === true ? (
            <div testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            <ul>
              {data.map(each => (
                <CryptocurrencyItem key={each.id} data={each} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
