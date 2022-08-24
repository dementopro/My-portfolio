
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProjectCard = ({ imgUrl, title, describtion }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt='' />
    
      <div className=" proj-txtx ">
        <h4>{title}</h4>
        <span>{describtion}</span>
      </div>
      </div>
    </Col>
  );
};
