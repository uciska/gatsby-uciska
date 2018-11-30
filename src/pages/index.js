import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout/layout'
import Box from '../components/box/box'
import Title from '../components/title/title'
import Gallery from '../components/gallery/gallery'
import IOExample from '../components/io-example/io-example'
import Modal from '../containers/modal/modal'
import { graphql } from 'gatsby'
import { Button } from 'antd'

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <Button type='primary' onClick={this.handleClick}>
          {loading ? 'Loading...' : 'Call Lambda'}
        </Button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as='h2' size='large'>
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Modal>
        <video
          src='https://i.imgur.com/gzFqNSW.mp4'
          playsInline
          loop
          autoPlay
          muted
        />
      </Modal>
      <LambdaDemo />
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
    <IOExample />
  </Layout>
)

Index.propTypes = {
  data: PropTypes.object.isRequired
}

export default Index

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
