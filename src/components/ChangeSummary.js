import React, { Component } from 'react';
import { decimalToPercentage } from '../lib/formatNumber'

export default class ChangeSummary extends Component {

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
          <td>{decimalToPercentage(asset.fundamentals.day5ChangePercent)}</td>
          <td>{decimalToPercentage(asset.fundamentals.month1ChangePercent)}</td>
          <td>{decimalToPercentage(asset.fundamentals.month3ChangePercent)}</td>
          <td>{decimalToPercentage(asset.fundamentals.month6ChangePercent)}</td>
          <td>{decimalToPercentage(asset.fundamentals.ytdChangePercent)}</td>
          <td>{decimalToPercentage(asset.fundamentals.year1ChangePercent)}</td>
          <td>{decimalToPercentage(asset.fundamentals.year2ChangePercent)}</td>
          <td>{decimalToPercentage(asset.fundamentals.year5ChangePercent)}</td>
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
          <th><strong>5 Day</strong></th>
          <th><strong>1 Month</strong></th>
          <th><strong>3 Month</strong></th>
          <th><strong>6 Month</strong></th>
          <th><strong>YTD</strong></th>
          <th><strong>1 Year</strong></th>
          <th><strong>2 Year</strong></th>
          <th><strong>5 year</strong></th>
        </tr>
    }

    return (
      <div className="assets-list">
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