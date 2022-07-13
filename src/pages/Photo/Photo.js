import React, { useContext, useEffect, useState } from "react"
import Moralis from '../../const/moralis'
import { Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { Context } from "../../index"
import { fetchPhoto, fetchPhotoCreate } from "../../http/commAPI"
import PhotoList from "./PhotoList"
import PagesPhoto from "./PagesPhoto"
import { PHOTO_ROUTE } from "../../utils/consts"

const Photo = observer(() => {
  const { device } = useContext(Context)
  const history = useHistory()
  const [artworks, setArtworks] = useState([]);
  const [oneValue, setOneValue] = useState({ name: "" })

  useEffect(() => {
    fetchPhoto({
      page: device.getPhotoPage,
      limit: device.getPhotoLimit,
    }).then((data) => {
      device.setPhoto(data.rows)
      device.setPhotoTotal(data.count)
    })
  }, [device.getPhotoPage])

  async function CREATE(event) {
    const data = await fetchPhotoCreate(oneValue) //
    history.push(PHOTO_ROUTE + "/" + data.id)
  }

  const loadArtworks = async () => {
    // Moralis.Cloud.run('getUserArtworks');
    if (user === null) { 
      await Moralis.enableWeb3();
      await Moralis.authenticate({signingMessage:"Artrooms editor login"});
    } else {
      const _artworks = await Moralis.Cloud.run('getUserArtworks', { ethAddress: user.get("ethAddress") });
      setArtworks(_artworks);
      console.log(`Set artworks`, _artworks);
    }
  }

  const user = Moralis.User.current();

  useEffect(() => {
    loadArtworks()
  }, [user])

  return (
    <div className="work_page navbar1 ">
      <Container>
        <Tabs
          className="mt-3"
          defaultActiveKey="tab_page_1"
          id="uncontrolled-tab-example"
        >
          <Tab className="p-1" eventKey="tab_page_1" title="Photo">
            <h4>
              <strong>NFTS</strong>
            </h4>

            <Row className="mt-2">
              <Col md={12}>
                <PagesPhoto />
                <PhotoList data={artworks}/>
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

export default Photo
