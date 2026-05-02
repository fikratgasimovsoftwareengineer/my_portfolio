import React, { useState } from "react";
import { Container, Col ,Row,Card, Button,Badge } from "react-bootstrap";
import {} from "react-bootstrap";
import {} from "react-bootstrap";
import { certificationsData } from "../data/certificationsData";
// react pdf
import {pdfjs,Document,Page} from "react-pdf";
import CreadlyBadge from "./CreadlyBadge";

import { FaShieldAlt, FaAws, FaExpand, FaDownload } from "react-icons/fa";



pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const Certificates = () =>{


  const [filter, setFilter] = useState("All");
    
  const filteredCerts = filter === "all" 
    ? certificationsData
    :certificationsData.filter(cert=>cert.category===filter);


  return (

    <>
<div className="d-flex justify-content-end mb-4" style={{ paddingRight: '60px', marginTop: '100px' }}>
  <div style={{ 
    width: 'fit-content',
    filter: 'drop-shadow(0 0 8px rgba(0, 242, 255, 0.6))',
    borderRadius: '8px',
    textAlign: 'center'
  }}>
    {/* Label ISC2 visibile sopra */}
    <div style={{
      color: '#00f2ff',
      fontWeight: 'bold',
      fontSize: '0.85rem',
      letterSpacing: '2px',
      marginBottom: '4px',
      textShadow: '0 0 8px #00f2ff'
    }}>
      ISC2 CERTIFIED
    </div>

    <CreadlyBadge />

    {/* "Provided by Credly" luminoso sotto */}
    <div style={{
      color:' #d0ff35',
      fontSize: '0.7rem',
      marginTop: '4px',
      textShadow: '0 0 6px #d0ff35',
      letterSpacing: '1px'
    }}>
      ✦ PROVIDED BY CREDLY ✦
    </div>
  </div>
</div>
    
    <div className="certificates-section">
      <Container className="py-5">
        <div className="text-align: right;">
          <h2 className="section-heading">
            <span style={{color: '#00f2ff'}}>&lt;</span> CERTIFICATIONS <span style={{color: '#00f2ff'}}>/&gt;</span>
          </h2>
          <p className="text-muted">My verified skills and professional achievements</p>
        </div>

        {/* Bottoni Filtro */}
        <div className="d-flex justify-content-center mb-5  gap-3 flex-wrap">
            <Button 
              variant={filter === "all" ? "info" : "outline-info"} 
              onClick={() => setFilter("all")}
              className="btn-filter"
            >
              ALL
            </Button>

            <Button 
              variant={filter === "ai_security" ? "info" : "outline-info"} 
              onClick={() => setFilter("ai_security")}
              className="btn-filter"
            >
              <FaShieldAlt className="mr-2" /> AI SECURITY
            </Button>
           

            <Button
              variant={filter==="coursera"?"info?":"outline-info"}
              onClick={()=>setFilter("coursera")}
              className="btn-filter"
            >
               <FaShieldAlt className="mr-2" /> AI Coursera
            </Button>


            <Button 
              variant={filter === "aws" ? "info" : "outline-info"} 
              onClick={() => setFilter("aws")}
              className="btn-filter"
            >
            <FaAws className="mr-2" /> AWS
          </Button>



        </div>
        

        {/* Griglia Certificati */}
        <Row>
          {filteredCerts.map((cert) => (
            <Col key={cert.id} lg={4} md={6} className="mb-4">
              <Card className="cert-card-v2 h-100">
                <div className="cert-img-wrapper">
                  {cert.type==="image" ? (
                    <Card.Img 
                    variant="top" 
                    src={cert.image} 
                    alt={cert.title} 
                    className="cert-img-custom"
                  /> 
                  
              ):(<embed 
                  src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0`}
                  type="application/pdf"
                  className="cert-pdf-embed" />)}


                  <div className="cert-overlay">
                    <a href={cert.image} target="_blank" rel="noreferrer" className="overlay-icon">
                       <FaExpand size={25} />
                    </a>
                  </div>
                </div>
                
                <Card.Body className="d-flex flex-column bg-dark-custom">
                  <Badge bg="secondary" className="mb-2 category-badge">
                    {cert.category.replace('_', ' ').toUpperCase()}
                  </Badge>
                  <Card.Title className="cert-title-v2">{cert.title}</Card.Title>
                  
                  <div className="mt-auto pt-3 d-flex justify-content-between">
                    <Button variant="outline-light" size="sm" href={cert.image} target="_blank">
                       View File
                    </Button>
                    <Button variant="outline-info" size="sm" href={cert.image} download>
                       <FaDownload />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

    </>
  )
};
export default Certificates;