import React, { memo } from 'react';
import { FooterSection, FooterElement, FooterAddress } from './style'

const Footer = memo(() => {
    return (
      <FooterSection>
          <FooterElement>
              <li>Terms of Use</li>
              <li>privacy policy</li>
              <li>Cookie Policy</li>
              <li>accessibility</li>
              <li>advertising information</li>
          </FooterElement>
         <FooterAddress> &copy; {new Date().getFullYear()} Twitter_Clone Portfolio </FooterAddress>
      </FooterSection>
    )
  })

export default Footer