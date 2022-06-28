
import React, {useContext, useEffect, useState } from 'react';
import {Container} from "react-bootstrap";

import { Row, Col, Tabs, Tab, Button } from "react-bootstrap";
import {useHistory} from "react-router-dom"
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchManufacturer, fetchManufacturerCreate } from "../../http/commAPI";
import ManufacturerList from "./ManufacturerList";
import PagesManufacturer from "./PagesManufacturer";
import { MANUFACTURER_ROUTE } from "../../utils/consts";

const Manufacturer = observer(() => {
    const {device} = useContext(Context)
    const history = useHistory()
	const [oneValue, setOneValue] = useState({name: ''})

    useEffect(() => {
        fetchManufacturer(null, null, device.getManufacturerPage, device.getManufacturerLimit).then(data => {
			device.setManufacturer(data.rows)
            device.setManufacturerTotal(data.count)
        })
    }, [])

    useEffect(() => {
		fetchManufacturer( null, null, device.getManufacturerPage, device.getManufacturerLimit).then(data => {
            device.setManufacturer(data.rows)
            device.setManufacturerTotal(data.count)
        })
    }, [device.getManufacturerPage]) 

	async function CREATE(event) {
        const data = await fetchManufacturerCreate(oneValue); //
        history.push(MANUFACTURER_ROUTE + '/' + data.id)
    }

    return (
        <div className="work_page navbar1 ">
        <Container>
            
            <Tabs className="mt-3" defaultActiveKey="tab_page_1" id="uncontrolled-tab-example">
                <Tab className="p-1" eventKey="tab_page_1" title="Manufacturer">
					<h4><strong>MANUFACTURER</strong></h4>

					<Row className="mt-2">
						<Col md={3}>

						</Col>
						<Col md={9}>
							<PagesManufacturer />
							<ManufacturerList/>

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

		<Button className="mt-1 ml-1 danger" onClick={(e) => CREATE(e)}>CREATE</Button>

        </div>
    );
});



export default Manufacturer; 