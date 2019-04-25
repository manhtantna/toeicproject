import React, { Component } from 'react'
import { Row, Col } from 'antd';
import ReactPlayer from 'react-player';
import {database} from './../firebase';
class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : null
        }
    }
    componentDidMount() {
        database.ref('/').on('value',
            (snapshot)=>this.setState({data:snapshot.val()})
        );
    };
    
    render() { 
        console.log()
        return (
        <div>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                {JSON.stringify(this.state.data)}
                </Col>
                <Col xs={24} sm={24}  md={12} lg={12} xl={12}>                
                </Col>
            </Row>
        </div>
        )
  }
}
export default Content;