import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Navbar from '../components/Navbar'
import AssetQuoteForm from './AssetQuoteForm';
import * as actions from '../actions/assetActions';
import { changeLayout } from '../actions/layoutActions';
import AssetService from '../services/AssetService';
import RegisterPage from '../components/RegisterPage';
// import AddAsset from '../components/AddAsset';
// import { fetchAssetData } from '../actions/assetDataActions'

class AssetDeck extends Component {

  constructor(props) {
    super(props)
    this.props.history.push('/assets/quote')
    this.state = { userAssets: [] }
  }

  componentDidMount() {
    AssetService.fetchUserAssets()
      .then(userAssets => this.setState({ userAssets }))
  }

  handleLayoutChange = (newLayout) => {
    const currentLayout = this.props.layout
    if (currentLayout !== newLayout) {
      this.props.changeLayout(newLayout, currentLayout)
    }
  }

  addAsset = (asset) => {
    debugger
    // AssetService.createAsset(asset).then(asset => this.setState({
    //   assets: this.state.userAssets.concat(asset)
    // }))
  }

  render() {
    console.log(this.state.userAssets)
    return (
      <div>
        <Navbar
          changeLayout={this.handleLayoutChange.bind(this)}
          currentLayout={this.props.layout}
         />
         <RegisterPage />
        <div className='asset-deck'>
          <AssetQuoteForm />
        </div>
        <div className="rails">
          {/* <AddAsset addAsset={this.addAsset} /> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    assets: state.assets,
    layout: state.changeLayout.layout,
    fetchingData: state.fetchingData,
    assetData: state.assetData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    assetActions: bindActionCreators(actions, dispatch),
    changeLayout: bindActionCreators(changeLayout, dispatch),
    // fetchAssetData: bindActionCreators(fetchAssetData, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AssetDeck));
