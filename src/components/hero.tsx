import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero: React.FC = () => {
  return (
    <div style={{ display: 'grid' }}>
      <StaticImage
        style={{
          gridArea: '1/1',
          height: '100vh',
        }}
        layout="fullWidth"
        aspectRatio={16 / 9}
        alt=""
        src={'../images/henry-portrait.jpg'}
        formats={['auto', 'webp', 'avif']}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: '1/1',
          position: 'relative',
          // This centers the other elements inside the hero component
          placeItems: 'center',
          display: 'grid',
        }}
      >
        <h2>I am Henry</h2>
      </div>
    </div>
  )
}

export default Hero
