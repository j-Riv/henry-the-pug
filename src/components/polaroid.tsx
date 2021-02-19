import React from 'react'
import styled from 'styled-components'

const PolaroidPhoto = styled.div`
  /* font-family: 'Permanent Marker', cursive; */
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 2em;
  text-align: center;
  border: 1px solid darkgrey;
  background-color: white;
  padding: 15px 15px 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`
const Polaroid: React.FC = (children) => {
  return <PolaroidPhoto>{children}</PolaroidPhoto>
}
