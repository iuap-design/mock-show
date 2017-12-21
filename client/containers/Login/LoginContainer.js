import React, { PureComponent as Component } from 'react';
import Login from './LoginWrap';
import { Row, Col, Card } from 'antd';
import { getImgPath } from '../../common.js';
// import { logoSVG } from '../../common.js';

class LoginContainer extends Component {
  render() {
    return (
      <div className="g-body login-body">
        <div className="m-bg">
          <div className="m-bg-mask m-bg-mask0"></div>
          <div className="m-bg-mask m-bg-mask1"></div>
          <div className="m-bg-mask m-bg-mask2"></div>
          <div className="m-bg-mask m-bg-mask3"></div>
        </div>
        <div className="main-one login-container">
          <div className="container">
            <Row type="flex" justify="center">
              <Col xs={20} sm={16} md={12} lg={8} className="container-login">
                <Card className="card-login">
                  <h2 className="login-title">Mock</h2>
                  <div className="login-logo"><img className="img" src={getImgPath('/image/logo', 'png')} /></div>
                  <Login/>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>)
  }
}

export default LoginContainer;
