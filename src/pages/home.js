import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb } from "react-bootstrap";
import {Container,Row,Col,Image} from 'react-bootstrap';
import React from 'react';
import { Button, ButtonGroup, Card,Form } from 'react-bootstrap';

import ComntPagin from "../components/pagination";

const Home = () => {
  const [likeCount, setLikeCount] = useState(2);
  const [loveCount, setLoveCount] = useState(6);
  const [angryCount, setAngryCount] = useState(1);
  const [sadCount, setSadCount] = useState(1);
  const [selectedReaction, setSelectedReaction] = useState(null);

  const totalReactions = likeCount + loveCount + angryCount + sadCount;

  const getPercentage = (count) => {
    if (totalReactions > 0) {
        return Math.round((count / totalReactions) * 100);
    }
    return 0;
  };
  const handleClick= (reaction)=>{
    if (selectedReaction === reaction) {
      switch (reaction) {
        case 'like':
          setLikeCount((prev) => Math.max(0, prev - 1));
          break;
        case 'love':
          setLoveCount((prev) => Math.max(0, prev - 1));
          break;
        case 'angry':
          setAngryCount((prev) => Math.max(0, prev - 1));
          break;
        case 'sad':
          setSadCount((prev) => Math.max(0, prev - 1));
          break;
        default:
          break;
      }
      setSelectedReaction(null);
    } else {
      // Deselect previous
      switch (selectedReaction) {
        case 'like':
          setLikeCount((prev) => Math.max(0, prev - 1));
          break;
        case 'love':
          setLoveCount((prev) => Math.max(0, prev - 1));
          break;
        case 'angry':
          setAngryCount((prev) => Math.max(0, prev - 1));
          break;
        case 'sad':
          setSadCount((prev) => Math.max(0, prev - 1));
          break;
        default:
          break;
      }

      // Select new
      switch (reaction) {
        case 'like':
          setLikeCount((prev) => prev + 1);
          break;
        case 'love':
          setLoveCount((prev) => prev + 1);
          break;
        case 'angry':
          setAngryCount((prev) => prev + 1);
          break;
        case 'sad':
          setSadCount((prev) => prev + 1);
          break;
        default:
          break;
      }
      setSelectedReaction(reaction);
    }
  };
  const totalComments = 6;
  const [comments, setComments] = useState([
    { name: 'User1', date: '29 July 2025', comment: 'Saiman did a fantastic job with the article about meerkats!', like: 12, dislike: 1,clicked:false ,clicked1:false },
    { name: 'User2', date: '29 July 2025', comment: 'If not car why car shaped.', like: 12, dislike: 1,clicked:false,clicked1:false  },
    { name: 'User3', date: '29 July 2025', comment: 'Meerkats are soo cute.', like: 12, dislike: 1 ,clicked:false,clicked1:false },
    { name: 'User4', date: '29 July 2025', comment: 'I never knew meerkats were so complex and social', like: 12, dislike: 1,clicked:false,clicked1:false  },
    { name: 'User5', date: '29 July 2025', comment: 'Saiman clearly put a lot of effort into researching this topic—brilliant work!', like: 12, dislike: 1,clicked:false,clicked1:false  },
    { name: 'User6', date: '29 July 2025', comment: 'Now I want one.', like: 12, dislike: 1,clicked:false ,clicked1:false },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const handleLike = (index) => {
    const updated = [...comments];
    if(!updated[index].clicked  && !updated[index].clicked1){
        updated[index].clicked = true;
        updated[index].like++;
        setComments(updated);
    }

  };

  const handleDislike = (index) => {
    const updated = [...comments];
      if(!updated[index].clicked && !updated[index].clicked1){
        updated[index].clicked1 = true;
        updated[index].dislike++;
        setComments(updated);
    }
  };

  let displayed = [];
  if (currentPage === 1) 
    displayed = [0, 1];
  else if (currentPage === 2) 
    displayed = [2, 3];
  else if (currentPage === 3) 
    displayed = [4, 5];

  const [replying, setReplyingTo] = useState(false);
  const reply = true;
  const handleReplyClick = (reply) => {
    setReplyingTo(replying == reply ? false : reply);
};


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
    <div className="d-flex justify-content-center">
      <Card style={{ width: '20rem' }} className="m-3">
      <Card.Body>
        <Card.Title>Reactions</Card.Title>
        <ButtonGroup className="mb-3">
          <Button
            variant={selectedReaction === 'like' ? 'secondary' : 'outline-secondary'}
            onClick={() => handleClick('like')}
          >
            Like {getPercentage(likeCount)}%
          </Button>
          <Button
            variant={selectedReaction === 'love' ? 'secondary' : 'outline-secondary'}
            onClick={() => handleClick('love')}
          >
            Love {getPercentage(loveCount)}%
          </Button>
          <Button
            variant={selectedReaction === 'angry' ? 'secondary' : 'outline-secondary'}
            onClick={() => handleClick('angry')}
          >
            Angry {getPercentage(angryCount)}%
          </Button>
          <Button
            variant={selectedReaction === 'sad' ? 'secondary' : 'outline-secondary'}
            onClick={() => handleClick('sad')}
          >
            Sad {getPercentage(sadCount)}%
          </Button>
        </ButtonGroup>
        <Card.Text>Total reactions: {totalReactions}</Card.Text>
      </Card.Body>
    </Card>
    </div>
    
     <Container className="p-4" style={{ backgroundColor: '#ebeef3ff', borderRadius: '10px' }}>
      <h6 className="text-center">{totalComments} Comments</h6>
      <hr className="text-center" />

      <Form className="d-flex mb-3">
        <Form.Control type="text" placeholder="Write your comment.." className="me-2" />
        <Button variant="light">→</Button>
      </Form>
      
    <div className="text-start">
      {displayed.map((i) => (
        <Card className="mb-3 p-3" style={{ backgroundColor: '#ffffffff', border: 'none' }}>
          <Row>
            <Col xs="auto">
              <i className="bi bi-person-circle" style={{ fontSize: '2rem' }}></i>
            </Col>
            <Col>
              <div><b>{comments[i].name}</b>, {comments[i].date} 
              </div>
              <div>{comments[i].comment}</div>
              <div className="mt-2">
                <Button variant="outline-none" onClick={() => handleLike(i)} style={{ fontWeight: comments[i].clicked ? "bold" : "normal" }}>Like {comments[i].like}</Button>
                <Button variant="outline-none" onClick={() => handleDislike(i)} style={{ fontWeight: comments[i].clicked1 ? "bold" : "normal" }}>Dislike {comments[i].dislike}</Button>
                <Button variant="outline-none" onClick={()=>handleReplyClick(reply)}>Reply</Button>
              </div>
              {replying && (
              <Form className="d-flex mt-3">
                <Form.Control 
                  type="text" 
                  placeholder="Write your reply..." 
                  className="me-2" 
                />
                <Button variant="light">→</Button>
              </Form>
            )}
            </Col>
          </Row>
        </Card>
      ))}
    </div>
      

      <ComntPagin currentPage={currentPage} onPageChange={setCurrentPage} />
    </Container> 
    
     
    
      
    </div>
  );
};

export default Home;
