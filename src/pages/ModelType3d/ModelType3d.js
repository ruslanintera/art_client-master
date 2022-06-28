
import React, { useContext, useEffect, useState } from "react";

import { Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { fetchModelType3d, fetchModelType3dCreate } from "../../http/commAPI";
import ModelType3dList from "./ModelType3dList";
import PagesModelType3d from "./PagesModelType3d";
import { MODEL_ROUTE } from "../../utils/consts";

const ModelType3d = observer(() => {
  const { device } = useContext(Context);
  const history = useHistory();
  const [oneValue, setOneValue] = useState({ name: "" });

  useEffect(() => {
    fetchModelType3d({
      page: device.getModelType3dPage,
      limit: device.getModelType3dLimit,
    }).then((data) => {
      device.setModelType3d(data.rows);
      device.setModelType3dTotal(data.count);
    });
  }, [device.getModelType3dPage]);

  async function CREATE(event) {
    const data = await fetchModelType3dCreate(oneValue); //
    history.push(MODEL_ROUTE + "/" + data.id);
  }

  return (
    <div className="work_page navbar1 ">
      <Container>
        <Tabs
          className="mt-3"
          defaultActiveKey="tab_page_1"
          id="uncontrolled-tab-example"
        >
          <Tab className="p-1" eventKey="tab_page_1" title="ModelType3d">
            <h4>
              <strong>3D Модели/</strong>
            </h4>

            <Row className="mt-2">
              <Col md={12}>
                <PagesModelType3d />
                <ModelType3dList />
              </Col>
            </Row>
          </Tab>
          <Tab className="p-1" eventKey="tab_page_2" title="Profile">
            <Container>
            
            </Container>
          </Tab>
          <Tab className="p-1" eventKey="tab_page_3" title="Contact">
y
          </Tab>
        </Tabs>
      </Container>

      <Button className="mt-1 ml-1 danger" onClick={(e) => CREATE(e)}>
        CREATE
      </Button>
    </div>
  );
});

export default ModelType3d;
