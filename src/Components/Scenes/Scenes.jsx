import React, {useEffect} from 'react'
import france from '../../Assets/img/france.jpg'
import dubai from '../../Assets/img/dubai.jpg'
import london from '../../Assets/img/london.jpg'
import venice from '../../Assets/img/venice.jpg'
import plus from '../../Assets/img/plus.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const scenes = [
  {
    id: 1,
    destinationImage: france,
    sceneName: 'PARIS',
    moreDetail: plus,
    inCountry: '~Capital of FRANCE~'
  },
 
  {
    id: 2,
    destinationImage: dubai,
    sceneName: 'DUBAI',
    moreDetail: plus,
    inCountry: '~Symbol of UAE~'
  },
  
  {
    id: 3,
    destinationImage: london,
    sceneName: 'LONDON',
    moreDetail: plus,
    inCountry: '~Capital of United Kingdom~'
  },

  {
    id: 4,
    destinationImage: venice,
    sceneName: 'VENICE',
    moreDetail: plus,
    inCountry: '~Aunt of the sea, Italy~'
  },
]


const Scenes = () => {

useEffect(() =>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='scenes container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top Scenes of This Month !
        </h2>

        <div className="scenesContainer grid">

          {
            scenes.map(({id, destinationImage, sceneName, inCountry, moreDetail}) => {
              return (
                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleScene">
                  <img src={destinationImage} className='destinationImage' />
                  <div className="sceneDetails">
                    <div className="moreInfo">
                      <img src={moreDetail} className='moreDetail' />
                    </div>
                    <div className="sceneName">
                      <span>{sceneName}</span>
                      <p>{inCountry}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Scenes