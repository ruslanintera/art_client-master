import React, { useContext, useEffect, useState } from "react"
import { Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { Context } from "../../index"
import { fetchPhotoVideo, fetchPhotoVideoCreate } from "../../http/commAPI"
import PhotoVideoList from "./PhotoVideoList"
import PagesPhotoVideo from "./PagesPhotoVideo"
import { PHOTO_ROUTE } from "../../utils/consts"

const PhotoVideo = observer(() => {
  const { device } = useContext(Context)
  const history = useHistory()
  const [oneValue, setOneValue] = useState({ name: "" })

  useEffect(() => {
    fetchPhotoVideo({
      page: device.getPhotoVideoPage,
      limit: device.getPhotoVideoLimit,
    }).then((data) => {
      device.setPhotoVideo(data.rows)
      device.setPhotoVideoTotal(data.count)
    })
  }, [device.getPhotoVideoPage])

  async function CREATE(event) {
    const data = await fetchPhotoVideoCreate(oneValue) //
    history.push(PHOTO_ROUTE + "/" + data.id)
  }

  return (
    <div className="work_page navbar1 ">
      <Container>
        <Tabs
          className="mt-3"
          defaultActiveKey="tab_page_1"
          id="uncontrolled-tab-example"
        >
          <Tab className="p-1" eventKey="tab_page_1" title="PhotoVideo">
            <h4>
              <strong>3D Модели</strong>
            </h4>

            <Row className="mt-2">
              <Col md={12}>
                <PagesPhotoVideo />
                <PhotoVideoList />
              </Col>
            </Row>
          </Tab>
          <Tab className="p-1" eventKey="tab_page_2" title="Profile">
            <Container>
              
            </Container>
          </Tab>
          <Tab className="p-1" eventKey="tab_page_3" title="Contact">

          </Tab>
        </Tabs>
      </Container>

      <Button className="mt-1 ml-1 danger" onClick={(e) => CREATE(e)}>
        CREATE
      </Button>
    </div>
  )
})

export default PhotoVideo
