import { Col, Row } from 'antd'
import React from 'react'
import Card from '../../Components/Cards'

const Dashbord = () => {
    return (
        <>
            <Row>
                <Col span={24}><Card /></Col>

            </Row>

            <Row gutter={72} style={{ marginTop: "16px" }}>
                <Col span={6}><Card /></Col>
                <Col span={6}><Card /></Col>
                <Col span={6}><Card /></Col>
                <Col span={6}><Card /></Col>

            </Row>
        </>
    )
}

export default Dashbord