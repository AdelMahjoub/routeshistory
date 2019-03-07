import React, { Component } from 'react'
import Layout from '../components/Layout'
import withRoutesHistory from '../hocs/withRoutesHistory'

class About extends Component {
  componentDidMount() {
    console.log(this.props.routesHistory)
  }
  render() {
    return (
      <Layout>
        <h1>About page</h1>
      </Layout>
    )
  }
}

export default withRoutesHistory(About)
