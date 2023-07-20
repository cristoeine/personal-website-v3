import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import {
  container,
  vl,
  indexName,
  divWriting,
  indexColPicture,
  indexPicture,
  indexSocmed,
  iconEffect,
  pictureSet,
  svgClass
} from './index.module.css'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <>
      <div className={container}>
        <div className={vl}>
          <Container>
            <Row>
              {/* name + intro */}
              <Col lg={8}>
                <div className={divWriting}>
                  <h2 className={indexName}>Cristine Ferlly Wiyanto</h2><br />
                  <p>
                  I am a passionate girl in data world and also machine learning. Trying my best to give out something to the world with my ability in data and machine learning.In addition, I am just a woman who loves learning (basically all, such as languages, new things, etc) and build up my experience. I am also a structured thinking and doing my best to be better each day. <br/><br/>
                  You can contact me through my email or LinkedIn and check my projects through git. Let’s connect!
                  </p><br />
                  <Row className={indexSocmed}>
                    <Col><span><Link to='mailto:ferlly.wiyanto@gmail.com' target='blank'><FontAwesomeIcon icon={faEnvelope} size='xl' style={{ color: "#F0DDBC", }} className={iconEffect} /></Link></span></Col>
                    {/* <Col><span><Link to=''><FontAwesomeIcon icon={faInstagram} size='xl' style={{color: "#F0DDBC",}}/></Link></span></Col> */}
                    <Col><span><Link to='www.linkedin.com/in/ferlly-wiyanto' target='blank'><FontAwesomeIcon icon={faLinkedin} size='xl' style={{ color: "#F0DDBC", }} className={iconEffect} /></Link></span></Col>
                    <Col><span><Link to='https://github.com/cristoeine' target='blank'><FontAwesomeIcon icon={faGithub} size='xl' style={{ color: "#F0DDBC", }} className={iconEffect} /></Link></span></Col>
                  </Row>
                </div>
              </Col>
              {/* photo */}
              <Col lg={4} className={indexColPicture}>
                <div className={indexPicture}>
                  <StaticImage src="../images/profile_photo.png" alt='Hi, it is me!' layout='constrained' class={pictureSet}></StaticImage>
                </div>
                <div className={svgClass}>
                  <svg width="500" height="510">
                    <rect width="400" height="400" x={45} y={40} fill='transparent' stroke='#F0DDBC' strokeWidth='5' />
                  </svg>
                </div>
              </Col>
            </Row>
          </Container>
          <footer>
            <hr></hr>
            <center>Copyright Ⓒ 2023 Cristine Ferlly Wiyanto</center>
          </footer>
        </div>
      </div>
    </>
  )
}


export default IndexPage