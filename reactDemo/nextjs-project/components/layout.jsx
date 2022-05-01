import React, { useCallback, useState } from "react";
import {
  Row,
  Col,
  Button,
  Layout,
  Input,
  Avatar,
  Icon,
  Tooltip,
  Dropdown,
  Menu,
} from "antd";
import { AntDesignOutlined, GithubOutlined } from "@ant-design/icons";
import getConfig from "next/config";
import { connect } from "react-redux";
const { publicRuntimeConfig } = getConfig();

import Container from "./Container";
import { loginOutAction } from "../store/store";

const { Header, Content, Footer } = Layout;

function Comp({ color, style, children }) {
  return <div style={{ color, ...style }}>{children}</div>;
}

const CustomLayout = ({ children, userInfo = {}, loginOut }) => {
  const [searchVal, setSearchVal] = useState("");
  function handleSearchChange(e) {
    setSearchVal(e.target.value);
  }
  function handleSearch() {
    console.log(searchVal);
  }

  const handleLoginOut = useCallback(() => {
    loginOut();
  }, []);

  function DroodownMenu() {
    return (
      <Menu>
        <Menu.Item onClick={handleLoginOut}>登出</Menu.Item>
      </Menu>
    );
  }

  return (
    <Layout>
      <Header>
        <Row span={24} justify="space-between" align="middle">
          <Col span={12}>
            <Container renderer={<div className="header-left"></div>}>
              <GithubOutlined style={{ fontSize: "40px", color: "white" }} />
              <Input.Search
                style={{ width: "200px", marginLeft: "40px" }}
                placeholder="搜索仓库"
                value={searchVal}
                onSearch={handleSearch}
                onChange={handleSearchChange}
              ></Input.Search>
            </Container>
          </Col>
          <Col span={2}>
            <div className="avatar">
              {userInfo.id ? (
                <Dropdown overlay={DroodownMenu}>
                  <Avatar size={40} src={userInfo.avatar_url}></Avatar>
                </Dropdown>
              ) : (
                <Tooltip title="请先登录">
                  <a href={publicRuntimeConfig.OAUTH_URL}>
                    <Avatar size={40} icon={<AntDesignOutlined />}></Avatar>
                  </a>
                </Tooltip>
              )}
            </div>
          </Col>
        </Row>
      </Header>
      <Content>
        <Container>{children}</Container>
      </Content>
      <Footer>
        <span className="title">red</span>
      </Footer>
      <style jsx>
        {`
          .header-left {
            display: flex;
            align-items: center;
          }
          .title {
            color: red;
          }
          .avatar {
            text-align: right;
          }
        `}
      </style>
    </Layout>
  );
};

export default connect(
  function mapStoreToProps(state) {
    console.log("state: ", state);
    return {
      userInfo: state.userInfo,
    };
  },
  function mapReducers(dispatch) {
    return {
      loginOut: () => dispatch(loginOutAction()),
    };
  }
)(CustomLayout);
