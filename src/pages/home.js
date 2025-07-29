import { useState } from "react";
import { Link } from "react-router-dom";
import Pagin from "../components/pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb } from "react-bootstrap";
import {Container,Row,Col,Image} from 'react-bootstrap';
import React, { useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';


const Home = () => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);


  
  

  return (
    <div>
      <Container className="mt-4 text-start">
      
      <p style={{ fontSize: '1rem' }}>Section &gt; Sub-section</p>

      <h4><b>Meerkat</b></h4>
      
      <p className="text-muted">
        The meerkat (Suricata suricatta) or suricate is a small mongoose found in southern Africa. It is characterised by a broad head, large eyes, a pointed snout, long legs, a thin tapering tail, and a brindled coat pattern. The head-and-body length is around 24–35 cm (9.4–13.8 in), and the weight is typically between 0.62 and 0.97 kg (1.4 and 2.1 lb).
      </p>
      
      <div className="my-3">
        <Image src="/meerkat.jpg" alt="Post" fluid />
      </div>
      
      <p>Meerkats are highly social, and form packs of two to 30 individuals each that occupy home ranges around 5 km2 (1.9 sq mi) in area. </p>

      
      <Row className="align-items-center my-3">
       <hr /> 
        <Col xs="auto">
          <i className="bi bi-person-circle" style={{ fontSize: '2rem' }}></i>
        </Col>
        
        <Col>
          <Link to="/profile" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>
            MD. Saiman Ullah
          </Link>
          <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>29 July 2025</p>
        </Col>
      </Row>

      <p>
        This is an informative article about meerkats.
      </p>

      <hr />
    </Container>
  
      <Link to="/profile">Profile</Link>

     

      <Pagin
        
      />
    </div>
  );
};

export default Home;
