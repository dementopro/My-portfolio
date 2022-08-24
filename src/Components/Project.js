/** @format */

import { Col, Container, Row, Tab } from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from 'react-on-screen';

export const Project = () => {
  const projects = [
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
                  <h2>Projects</h2>
                </div>
              )}
            </TrackVisibility>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              exercitationem dignissimos quidem commodi tempore quos nobis
              deserunt tenetur fugiat dolores porro, omnis quasi explicabo in
              quia eligendi incidunt tempora repellendus!
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Enim eos quas ipsa facere culpa magni. Quia, quaerat. Aliquam,
                  quae ullam eius tenetur eligendi voluptatibus aperiam,
                  inventore atque quisquam aspernatur beatae?\
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error enim adipisci eos inventore atque obcaecati. Saepe, sint
                  nulla? Et adipisci modi quae, velit aperiam quidem ducimus
                  quia tempora temporibus quaerat!
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
