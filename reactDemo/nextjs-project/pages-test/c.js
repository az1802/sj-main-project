import { Input, Button } from "antd";
import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
  memo,
  useMemo,
  useReducer,
} from "react";
import MyContext from "../contexts/MyContext";

function addAction(num) {
  return {
    type: "ADD",
    num,
  };
}

function configReducer(state, action) {
  if (action.type == "ADD") {
    return state + action.num;
  }
  return state;
}

const C = () => {
  const [name, setName] = useState("sunjie");
  const [count, dispatch] = useReducer(configReducer, 0);

  const countRef = useRef(count);
  countRef.current = count;
  console.log("countRef: ", countRef);
  let config = useMemo(
    () => ({
      color: "red",
      count,
    }),
    [count]
  );

  let btnClick = useCallback(() => {
    dispatch(addAction(1));
  }, [count]);

  function alertCount() {
    setTimeout(() => {
      alert(countRef.current);
    }, 2000);
  }

  return (
    <div>
      <Input value={name} onChange={(e) => setName(e.target.value)}></Input>
      <Child onBtnClick={btnClick} config={config}></Child>
      <Button onClick={alertCount}>alert</Button>
    </div>
  );
};

const Child = memo(({ onBtnClick, config }) => {
  console.log("child render");

  return (
    <div>
      <Button onClick={onBtnClick}>add {config.count}</Button>
    </div>
  );
});

export default C;
