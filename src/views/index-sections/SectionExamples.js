/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import ProfilePage from "../examples/ProfilePage";

// reactstrap components
import { Button, Container, Row, Col, NavLink } from "reactstrap";

import { Link } from "react-router-dom";

// core components

function SectionExamples() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a href="/landing-page">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/landing-page.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/landing-page"
                // onClick={ProfilePage()}
                
              >
                Landing Page
              </Button>
            </Col>
            <Col className="text-center" md="6">
              <NavLink to="/profile-page" tag={Link} data-placement="top">
              
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/profile-page.png")}
                  style={{ width: "100%" }}
                />
              </NavLink>
              
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/profile-page"
               
              >
                Profile Page
              </Button>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
