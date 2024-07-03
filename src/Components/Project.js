/** @format */

import { Col, Container, Row, Tab } from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/Skisites.png';
import projImg5 from '../assets/img/mtg.png';
import projImg6 from '../assets/img/mwc.png';
import projImg7 from '../assets/img/luna.png';
import projImg8 from '../assets/img/Zark.png';
import projImg9 from '../assets/img/ads.png';
import projImg10 from '../assets/img/max.png';
import projImg11 from '../assets/img/Fintelli.png';
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from 'react-on-screen';

export const Project = () => {
  const webs = [
    {
      title: 'Bussniss Startup ',
      description: 'Desgin & Develope',
      imgUrl: projImg1,
    },
    {
      title: 'Bussniss Startup ',
      description: 'Desgin & Develope',
      imgUrl: projImg2,
    },
    {
      title: 'Bussniss Startup ',
      description: 'Desgin & Develope',
      imgUrl: projImg3,
    },
    {
      title: 'Ski_Website ',
      description: 'Development',
      imgUrl: projImg4,
    },
    {
      title: 'Fintech Startup ',
      description: 'Development',
      imgUrl: projImg5,
    },
    {
      title: 'ModernWineClub ',
      description: 'Development',
      imgUrl: projImg6,
    },
    {
      title: 'Lunagens Blockchain Platform',
      description: 'Development',
      imgUrl: projImg7,
    },
    {
      title: 'ZarkParking',
      description: 'Development',
      imgUrl: projImg8,
    },
    {
      title: 'AdsGency',
      description: 'Development',
      imgUrl: projImg9,
    }
  ];

  const mobiles = [
    {
      title: 'New Way to Manage Your Money',
      describtion: 'Desgin & Develop',
      imgUrl: projImg11,
    },
    {
      title: 'ZarkParking',
      describtion: 'Desgin & Develop',
      imgUrl: projImg8,
    },
    {
      title: 'MaxRewards',
      describtion: 'Desgin & Develop',
      imgUrl: projImg10,
    }
  ];

  const certificates = [
    {
      title: 'Bussniss Startup ',
      describtion: 'Desgin & Develope',
      imgUrl: projImg1,
    },
    {
      title: 'Bussniss Startup ',
      describtion: 'Desgin & Develope',
      imgUrl: projImg2,
    },
    {
      title: 'Bussniss Startup ',
      describtion: 'Desgin & Develope',
      imgUrl: projImg3,
    },
    {
      title: 'Bussniss Startup ',
      describtion: 'Desgin & Develope',
      imgUrl: projImg1,
    },
    {
      title: 'Bussniss Startup ',
      describtion: 'Desgin & Develope',
      imgUrl: projImg2,
    },
  ];
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated  animate__slideInUp ' : ''
                  }>
                  <h2>Projects & Certificates</h2>
                </div>
              )}
            </TrackVisibility>
            <p>
              Here are my <b>Achievements</b> and <b>Certificates</b> from Hackerrank.
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Web</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Mobile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Certificates</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {webs.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Row>
                    {mobiles.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <Row>
                    {certificates.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        alt='colorSharp'
        className='background-image-right'
      />
    </section>
  );
};
