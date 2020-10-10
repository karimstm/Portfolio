import React from "react";
import { Row, Col } from "react-bootstrap";
import TitleHeader from "./TitleHeader";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Portfolio.css";
import items from "../resources/items.json";

function Portfolio(props) {
  return (
    <div>
      <TitleHeader title="My" coloredWord="Portfolio" titleBg="Works" />
      <section className="main-content">
        <div className="container-fluid">
          <Tabs>
            <Row className="text-center">
              <Col lg={12}>
                <div className="tablist-inner">
                  <TabList className="pv-tab-button text-center">
                    <Tab>
                      <span>All Demo</span>
                    </Tab>
                    <Tab>
                      <span>Agency</span>
                    </Tab>
                    <Tab>
                      <span>Corporate</span>
                    </Tab>
                    <Tab>
                      <span>Portfolio</span>
                    </Tab>
                    <Tab>
                      <span>Landing</span>
                    </Tab>
                    <Tab>
                      <span>Other</span>
                    </Tab>
                  </TabList>
                </div>
              </Col>
            </Row>
            <TabPanel className="text-left mx-5">
              <Row className="mx-3">
                {items.map((item, index) => (
                  <Col key={index} lg={4} md={6} sm={6} xs={12}>
                    <div className="single-demo">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.url}
                      >
                        <img src={item.img} alt={item.name} />
                        <h3 className="title">{item.name}</h3>
                        <p className="info">
                          <strong>Technologies: </strong>
                          <span>
                            {item?.technologies.map((t) => (
                              <>{t}</>
                            ))}
                          </span>
                        </p>
                      </a>
                    </div>
                  </Col>
                ))}
              </Row>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
