import React from 'react'
import BodyCssClass from './BodyCssClass'

const ContactText = () => (
  <div>
    <BodyCssClass cssClass="page-green"/>
    <p>This is the nested component that overwrites the page class again to green.</p>
  </div>
)

export default ContactText