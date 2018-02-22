import React, { Component } from 'react';
import { formatNumber, decimalToPercentage, addPlus } from '../lib/formatNumber'

export default class Financials extends Component {

handleEditClick = (asset, event) => {
  this.props.onUpdateAsset(asset);
}

handleRemoveClick = (asset, event) => {
  this.props.removeAsset(asset.id);
}

  render() {
    const assetsList = this.props.assets.map((asset, index) => {
      return (
        <tr key={asset.id} className='table-row-data'>
          <td>{asset.quote.symbol}</td>
          <td>{asset.quote.companyName}</td>
          <td>$ {asset.quote.open}</td>
          <td>$ {asset.quote.close}</td>
          <td>$ {asset.quote.latestPrice}</td>
          <td>{addPlus(asset.quote.change)}</td>
          <td>{decimalToPercentage(asset.quote.changePercent)}</td>
          <td>{asset.quote.sector ? asset.quote.sector : ' - '}</td>
          <td>{}</td>
          <td className='no-background'>
            <button
              className='update-button'
              data-id={asset.id}
              onClick={(event) => this.handleEditClick(asset, event)}>
              Update
            </button>
          </td>
          <td className='no-background'>
            <button
              className='remove-button'
              data-id={asset.id}
              onClick={(event) => this.handleRemoveClick(asset, event)}>
              Remove
            </button>
          </td>
        </tr>
      );
    })
    const anyAssets = assetsList.length > 0;
    let tableHeader;
    if (anyAssets) {
      tableHeader =
        <tr>
          <th><strong>Symbol</strong></th>
          <th><strong>Name</strong></th>
          <th><strong>Open</strong></th>
          <th><strong>Close</strong></th>
          <th><strong>Latest</strong></th>
          <th><strong>Change</strong></th>
          <th><strong>Change %</strong></th>
          <th><strong>Sector</strong></th>
          <th><strong>Time or Date</strong></th>
        </tr>
    }

    return (
      <div className="assets-list">
        <h2>Financials</h2>
        <table>
          <thead>
            {tableHeader}
          </thead>

          <tbody>
            {assetsList}
          </tbody>
        </table>
      </div>
    );
  }
}