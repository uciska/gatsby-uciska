import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang='en' {...this.props.htmlAttributes}>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          {this.props.headComponents}

          {/* Snipcart */}
          <script
            defer
            src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js'
          />
          <script
            defer
            src='https://cdn.snipcart.com/scripts/2.0/snipcart.js'
            id='snipcart'
            data-api-key={process.env.SNIPCART_API_KEY}
          />
          <link
            href='https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css'
            type='text/css'
            rel='stylesheet'
          />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={'body'}
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
