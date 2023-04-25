import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3
    }
  ];
  return (
    <section className="project " id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              quidem laboriosam possimus doloribus consequatur recusandae
              praesentium explicabo repellat minima magnam repudiandae
              consequuntur perspiciatis similique cupiditate quos, ad quia
              sapiente tempora?
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"> Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="whatever"
      />
    </section>
  );
}
