import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Row, Col, Button, Toast  } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons"; // You can change this to another wheel-like icon


const Beneficiary = () => {
  const { id } = useParams();
  
  console.log("ID from URL:", id); // Debugging line

  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  let formContent;

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  if (id === 'Angsana') {
    formContent = (

      <form onSubmit={handleSubmit}>

          <Row>
          <Col>
          <Button onClick={toggleShowA} className="mb-2">
                Self-Service Computational <strong>Block</strong>
                </Button>
                <Toast show={showA} onClose={toggleShowA}>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Per Cap</strong>
                    <a href="https://freetrial.gorules.io/projects/4f1873b0-71ff-44b1-b3e3-55b4967bac75/decisions/96f20719-cc4b-4c16-a80a-3a200b79c036" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCog} spin />
                    </a>
                  </Toast.Header>
                  <Toast.Body>Norm Cost * Projected Muster </Toast.Body>
                </Toast>
          </Col>
          </Row>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>Projected Funding($)</Form.Label>
            <Form.Control placeholder="1,159,585.60"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>Norm Cost*</Form.Label>
            <Form.Control placeholder="2,376.20"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>Projected Muster*</Form.Label>
            <Form.Control placeholder="488"/>
            </Form.Group>
        </Row>

        <h3 className="text-xl font-semibold">Monthly Muster : </h3>
        <hr/>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>Apr-24</Form.Label>
            <Form.Control placeholder="161"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>May-24</Form.Label>
            <Form.Control placeholder="164"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Jun-24</Form.Label>
            <Form.Control placeholder="163"/>
            </Form.Group>
        </Row>

        <h3 className="text-xl font-semibold">Norm Cost :</h3>
        <hr/>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>EOM</Form.Label>
            <Form.Control placeholder="4,117,230.00"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>OOE (security)</Form.Label>
            <Form.Control placeholder="664,464.00"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>OOE (others)</Form.Label>
            <Form.Control placeholder="1,400,280.00"/>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>OOE - Business Continuity Supplies</Form.Label>
            <Form.Control placeholder="92,497.01"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>OOE - Environmental Sanitisation Programme</Form.Label>
            <Form.Control placeholder="62,048.09"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>Capacity</Form.Label>
            <Form.Control placeholder="200"/>
            </Form.Group>
        </Row>

        <h3 className="text-xl font-semibold">Adjust numbers above & submit</h3>
        <hr/>
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </form>
    );
  } else if (id === 'Banyan') {
    formContent = (

      <form onSubmit={handleSubmit}>

      <Row>
      <Col>
      <Button onClick={toggleShowA} className="mb-2">
            Self-Service Computational <strong>Block</strong>
            </Button>
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Per Cap</strong>
                <a href="https://freetrial.gorules.io/projects/4f1873b0-71ff-44b1-b3e3-55b4967bac75/decisions/96f20719-cc4b-4c16-a80a-3a200b79c036" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCog} spin />
                </a>
              </Toast.Header>
              <Toast.Body>Norm Cost * Projected Muster </Toast.Body>
            </Toast>
      </Col>
      </Row>

    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>Projected Funding($)</Form.Label>
        <Form.Control placeholder="955,625.00"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>Norm Cost*</Form.Label>
        <Form.Control placeholder="1,911.25"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>Projected Muster*</Form.Label>
        <Form.Control placeholder="500"/>
        </Form.Group>
    </Row>

    <h3 className="text-xl font-semibold">Monthly Muster : </h3>
    <hr/>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>Apr-24</Form.Label>
        <Form.Control placeholder="167"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
        <Form.Label>May-24</Form.Label>
        <Form.Control placeholder="166"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Jun-24</Form.Label>
        <Form.Control placeholder="167"/>
        </Form.Group>
    </Row>

    <h3 className="text-xl font-semibold">Norm Cost :</h3>
    <hr/>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>EOM</Form.Label>
        <Form.Control placeholder="3,554,401.50"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>OOE (security)</Form.Label>
        <Form.Control placeholder="00.00"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>OOE (others)</Form.Label>
        <Form.Control placeholder="1,400,280.00"/>
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>OOE - Business Continuity Supplies</Form.Label>
        <Form.Control placeholder="79,932.52"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>OOE - Environmental Sanitisation Programme</Form.Label>
        <Form.Control placeholder="62,048.09"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Capacity</Form.Label>
        <Form.Control placeholder="200"/>
        </Form.Group>
    </Row>

    <h3 className="text-xl font-semibold">Adjust numbers above & submit</h3>
    <hr/>
    <Button variant="primary" type="submit">
    Submit
  </Button>
  </form>
    
    );

  } else if (id === 'Infant Care') {


    formContent = (

      <form onSubmit={handleSubmit}>

      <Row>
      <Col>
      <Button onClick={toggleShowA} className="mb-2">
            Self-Service Computational <strong>Block</strong>
            </Button>
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Per Cap</strong>
                <a href="https://freetrial.gorules.io/projects/4f1873b0-71ff-44b1-b3e3-55b4967bac75/decisions/96f20719-cc4b-4c16-a80a-3a200b79c036" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCog} spin />
                </a>
              </Toast.Header>
              <Toast.Body>Base Grant Norm * Actual Enrolment</Toast.Body>
            </Toast>
      </Col>
      </Row>

    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>Programme Type</Form.Label>
        <Form.Control placeholder="Infant Care"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>Projected Funding($)</Form.Label>
        <Form.Control placeholder="24,0000"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>Base Grant Norms*</Form.Label>
        <Form.Control placeholder="300"/>
        <Form.Label>(*per child)</Form.Label>
        </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>Actual Enrolment*</Form.Label>
        <Form.Control placeholder="80"/>
        </Form.Group>
    </Row>
    
    <h3 className="text-xl font-semibold">Adjust numbers above & submit</h3>
    <hr/>
    <Button variant="primary" type="submit">
    Submit
  </Button>
  </form>
    
    );
   

  } else if (id === 'Child Care') {


    formContent = (

      <form onSubmit={handleSubmit}>

      <Row>
      <Col>
      <Button onClick={toggleShowA} className="mb-2">
            Self-Service Computational <strong>Block</strong>
            </Button>
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Fixed</strong>
                <a href="https://freetrial.gorules.io/projects/4f1873b0-71ff-44b1-b3e3-55b4967bac75/decisions/493bef2b-746a-4e13-b467-a62afccfdf69" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCog} spin />
                </a>
              </Toast.Header>
              <Toast.Body>Funding Norm * 50% Center License Capacity * 4 Months </Toast.Body>
            </Toast>
      </Col>
      </Row>

    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>Programme Type</Form.Label>
        <Form.Control placeholder="Child Care"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>Projected Funding($)</Form.Label>
        <Form.Control placeholder="120,000"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>Funding Norms*</Form.Label>
        <Form.Control placeholder="600"/>
        <Form.Label>(*per child per month)</Form.Label>
        </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>50% Capacity*</Form.Label>
        <Form.Control placeholder="50"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
        <Form.Label>Month</Form.Label>
        <Form.Control placeholder="4"/>
        </Form.Group>
    </Row>
    
    <h3 className="text-xl font-semibold">Adjust numbers above & submit</h3>
    <hr/>
    <Button variant="primary" type="submit">
    Submit
  </Button>
  </form>
    
    );
   

   
  } else if (id === 'Boys Town') {

    formContent = (

      <form onSubmit={handleSubmit}>

          <Row>
          <Col>
          <Button onClick={toggleShowA} className="mb-2">
                Self-Service Computational <strong>Block</strong>
                </Button>
                <Toast show={showA} onClose={toggleShowA}>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Per Cap</strong>
                    <a href="https://freetrial.gorules.io/projects/4f1873b0-71ff-44b1-b3e3-55b4967bac75/decisions/96f20719-cc4b-4c16-a80a-3a200b79c036" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCog} spin />
                    </a>
                  </Toast.Header>
                  <Toast.Body>Norm Cost * Projected Muster </Toast.Body>
                </Toast>
          </Col>
          </Row>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>Projected Funding($)</Form.Label>
            <Form.Control placeholder="1,159,585.60"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>Norm Cost*</Form.Label>
            <Form.Control placeholder="2,376.20"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>Projected Muster*</Form.Label>
            <Form.Control placeholder="488"/>
            </Form.Group>
        </Row>

        <h3 className="text-xl font-semibold">Monthly Muster : </h3>
        <hr/>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>Apr-24</Form.Label>
            <Form.Control placeholder="161"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>May-24</Form.Label>
            <Form.Control placeholder="164"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Jun-24</Form.Label>
            <Form.Control placeholder="163"/>
            </Form.Group>
        </Row>

        <h3 className="text-xl font-semibold">Norm Cost :</h3>
        <hr/>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>EOM</Form.Label>
            <Form.Control placeholder="4,117,230.00"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>OOE (security)</Form.Label>
            <Form.Control placeholder="664,464.00"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>OOE (others)</Form.Label>
            <Form.Control placeholder="1,400,280.00"/>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>OOE - Business Continuity Supplies</Form.Label>
            <Form.Control placeholder="92,497.01"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>OOE - Environmental Sanitisation Programme</Form.Label>
            <Form.Control placeholder="62,048.09"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
            <Form.Label>Capacity</Form.Label>
            <Form.Control placeholder="200"/>
            </Form.Group>
        </Row>

        <h3 className="text-xl font-semibold">Adjust numbers above & submit</h3>
        <hr/>
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </form>
    );
  
  }else {
    formContent = <p>Unknown ID. No form available.</p>;
  }

  return (

    <div className="container margin-top:50px;">
        <Row>
        <Col><h1 className="text-xl font-semibold">Projected Cost: {id}</h1></Col>
      </Row>
      <hr/>
      {formContent}
    </div>
  );
};

export default Beneficiary;
