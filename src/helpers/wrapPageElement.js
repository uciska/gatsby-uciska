import React from 'react'
import Transition from '../components/transition/transition'

const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>
}

export default wrapPageElement
