import React, { useContext, useState, useEffect, useCallback, useMemo,} from "react"
//import { Link } from "react-router-dom"
//import JoyStick from "../joyStick/joyStick"
//import RangeSlider from "../rangeSlider/rangeSlider"

import { observer } from "mobx-react-lite"
import { Context } from "../../index"
import { ROUTE_3D } from "../../utils/consts"
import { Alert, Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap"
import { fetchModelType3d, fetchPhoto, fetchVideo } from "../../http/commAPI"
import ModelType3dList from "../../pages/ModelType3d/ModelType3dList"
import PagesModelType3d from "../../pages/ModelType3d/PagesModelType3d"
import PhotoList from "../../pages/Photo/PhotoList"
import PagesPhoto from "../../pages/Photo/PagesPhoto"
import VideoList from "../../pages/Video/VideoList"
import PagesVideo from "../../pages/Video/PagesVideo"
// import PhotoVideoList from "../../pages/PhotoVideo/PhotoVideoList"
// import PagesPhotoVideo from "../../pages/PhotoVideo/PagesPhotoVideo"
import { useHistory } from "react-router-dom"
import { react3d } from "../../3d/react3d"
import * as Icon from 'react-bootstrap-icons'

const SideBar = observer((props) => {
  const { device } = useContext(Context)
  const history = useHistory()
  const [parentVal, setParentVal] = useState(10)
  const [setOneValue, setSetOneValue] = useState([])

  // const sliderValueChanged = useCallback((val) => {
  //   //console.log("NEW VALUE", val)
  //   setParentVal(val)
  // })

  // const sliderProps = useMemo(
  //   () => ({
  //     min: 0,
  //     max: 100,
  //     value: parentVal,
  //     step: 2,
  //     label: "This is a reusable slider",
  //     onChange: (e) => sliderValueChanged(e),
  //   }),
  //   [parentVal]
  // )

  useEffect(() => {
    setSetOneValue(device.getSetOne)
  })

  useEffect(() => {
    fetchModelType3d({
      page: device.getModelType3dPage,
      limit: device.getModelType3dLimit,
    }).then((data) => {
      device.setModelType3d(data.rows)
      device.setModelType3dTotal(data.count)
    })
  }, [device.getModelType3dPage])

  useEffect(() => {
    fetchPhoto({
      page: device.getPhotoPage,
      limit: device.getPhotoLimit,
    }).then((data) => {
      device.setPhoto(data.rows)
      device.setPhotoTotal(data.count)
    })
  }, [device.getPhotoPage])

  useEffect(() => {
    fetchVideo({
      page: device.getVideoPage,
      limit: device.getVideoLimit,
    }).then((data) => {
      device.setVideo(data.rows)
      device.setVideoTotal(data.count)
    })
  }, [device.getVideoPage])

  return (
    <nav id="sidebar" className={device.isActive ? "active" : null}>
      <div id="sidebar2scroll" className="p-3 pt-1 ">
        
        
        {device.getActive3dElement &&
        device.getActive3dElement.elementName &&
        device.getActive3dModel ? (
          <div>
            <Alert variant={"info"}>
              <strong>
                {" "}
                {device.getActive3dModel.name} -{" "}
                {device.getActive3dElement.elementName}
              </strong>
            </Alert>
          </div>
        ) : (
          ""
        )}

        {device.getActiveModel && device.getActiveModel.id ? (
          <Alert variant={"danger"}>
            <strong>
              {device.getActiveModel.id}. {device.getActiveModel.name}
            </strong>
          </Alert>
        ) : (
          ""
        )}

        <div className="">
          <Container>
            <Tabs
              className="mt-3"
              defaultActiveKey="tab_page_1"
              id="uncontrolled-tab-example"
            >
              <Tab className="p-0" eventKey="tab_page_1" title={<Icon.Box />}>
                <h4 className="mt-2">Models</h4>
                <Row className="mt-2">
                  <Col md={12}>
                    <PagesModelType3d />
                    <ModelType3dList short={true} />
                  </Col>
                </Row>
              </Tab>
              <Tab className="p-0" eventKey="tab_page_2"  title={<Icon.ColumnsGap />}>
                <h4 className="mt-2">Pictures</h4>
                <Row className="mt-2">
                  <Col md={12}>
                    <PagesPhoto />
                    <PhotoList short={true} />
                  </Col>
                </Row>
              </Tab>
              <Tab className="p-0" eventKey="tab_page_3"  title={<Icon.CameraReels />}>
                <h4 className="mt-2">Video</h4>
                <Row className="mt-2">
                  <Col md={12}>
                    {/* <PagesPhotoVideo />
                    <PhotoVideoList short={true} /> */}
                    <PagesVideo />
                    <VideoList short={true} />
                  </Col>
                </Row>
              </Tab>
              <Tab className="p-1" eventKey="tab_page_4" title={<Icon.SdCard />}>
                <h4 className="mt-2">Admin</h4>
                  <Button className="mr-1" onClick={(e) => {react3d.SAVE(device) }}>SAVE</Button>
                  <Button className="mr-1" onClick={(e) => { react3d.DELETE(device) }}>DELETE</Button>
              </Tab>
            </Tabs>
          </Container>
          {/* <Container className="mt-3">
            <Button className="mr-1" onClick={(e) => {react3d.SAVE(device) }}>SAVE</Button>
            <Button className="mr-1" onClick={(e) => { react3d.DELETE(device) }}>DELETE</Button>
          </Container> */}

        </div>


        {/* <div>
          <h1>PARENT VALUE: {parentVal}</h1>
          <RangeSlider {...sliderProps} classes="additional-css-classes" />
        </div>

        <JoyStick /> */}
      </div>
    </nav>
  )
})

export default SideBar
