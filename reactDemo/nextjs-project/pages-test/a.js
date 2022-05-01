import { withRouter } from "next/router";
import Test from "../components/test";
import styled from "styled-components";

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`;

const A = ({ router, name }) => (
  <div>
    <Title>this is title</Title>
    page --- {router.query.id}---name---{name}
  </div>
);
A.getInitialProps = async () => {
  console.log("page a init 延迟1s之后数据加载完");
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "sunj",
      });
    }, 1000);
  });
  return promise;
};
export default withRouter(A);
