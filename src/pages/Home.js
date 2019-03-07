import React, { Component } from 'react'
import Layout from '../components/Layout'
import withRoutesHistory from '../hocs/withRoutesHistory'

class Home extends Component {
  componentDidMount() {
    console.log(this.props.routesHistory)
  }
  render() {
    return (
      <Layout>
        <h1>Home Page</h1>
      </Layout>
    )
  }
}

export default withRoutesHistory(Home)