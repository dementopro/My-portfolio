/** @format */

import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactID from '../assets/img/contact-img.svg';
export const Contact = () => {
  const formInitialDetail = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetail, setformDetail] = useState(formInitialDetail);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setformDetail({
      ...formDetail,
      [category]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...")
    let response= await fetch("http://localhost:5000/contact",{
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8"
      },
      body: JSON.stringify(formDetail)
    });
    setButtonText("send")
    let result =response.json();
    setformDetail(formInitialDetail)
    if(result.code === 200 ){
      setStatus({success: true, message:"Message send success"})
    }else{
      setStatus({
        success: false, message: "Something went Wrong, PLease try again latter .  "

      })
    }

  };

  return (
    <section className='contact' id='contact'>
      <Container>
        <Row className='aligns-items-center'>
          <Col md={6}>
            <img src={contactID} alt='Contact us' />
          </Col>
          <Col md={6}>
            <h2 className='hi'>Get in touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetail.firstName}
                    placeholder='First Name'
                    onChange={(e) => {
                      onFormUpdate('firstName', e.target.value);
                    }}
                    name=''
                    id=''
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetail.lastName}
                    placeholder='Last Name'
                    onChange={(e) => {
                      onFormUpdate('lastName', e.target.value);
                    }}
                    name=''
                    id=''
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='email'
                    value={formDetail.email}
                    placeholder='Email Adress'
                    onChange={(e) => {
                      onFormUpdate('email', e.target.value);
                    }}
                    name=''
                    id=''
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='tel'
                    value={formDetail.phone}
                    placeholder='Phone number'
                    onChange={(e) => {
                      onFormUpdate('phone', e.target.value);
                    }}
                    name=''
                    id=''
                  />
                </Col>
                <Col className='px-1'>
                  <textarea
                    row='6'
                    value={formDetail.message}
                    placeholder='Message'
                    onChange={(e) => {
                      onFormUpdate('message', e.target.value);
                    }}></textarea>
                  <button type='submit'>
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? 'danger' : 'success'
                      }>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
