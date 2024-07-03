/** @format */

import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleteing, setIsDeleteing] = useState(false);
  const toRotate = ['Front-end developer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleteing
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);
    if (isDeleteing) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleteing && updateText === fullText) {
      setIsDeleteing(true);
      setDelta(period);
    } else if (isDeleteing && updateText === '') {
      setIsDeleteing(false);
      setDelta(500);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({isVisible})=> 
              <div className={isVisible ? "animate__animated animate__fadeIn " : ""}>
                <span className='tagline'>Welcome to my Portfolio</span>
                <h1>
                  {`Hi I'm Torn Vyrack`}<br /> <span className='wrap'>{text}</span>
                </h1>
                <p>
                  <strong>Torn</strong> is a skilled software developer with a broad and versatile coding skill set. He quickly helps startups and enterprises with
                  prototypes and ideas by efficiently building those things into reality. His expertise lies in building MVPs, apps, enterprise software, 
                  scalable microservices, web crawlers, REST and Socket APIs, infrastructure modeling, AWS and deployments.
                  Torn is the go-to guy for any of your development needs.
                </p>
                <button
                  onClick={() =>
                    console.log('this is the banner console .log')
                  }>
                  Let's connect <ArrowRightCircle size={25} />
                </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='header image' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
