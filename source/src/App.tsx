import { Table, Tr, Th, Td, Breadcrumb } from "@dnb/eufemia";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import HomePage from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <Breadcrumb spacing>
        <Breadcrumb.Item
          onClick={() => {
            console.log("go home!");
          }}
          variant="home"
        />
        <Breadcrumb.Item
          text="Customer page"
          onClick={() => {
            navigate(`CustomerPage`);
          }}
        />
        <Breadcrumb.Item
          text="Main page"
          onClick={() => {
            navigate(``);
          }}
        />
      </Breadcrumb>
      <Outlet />
    </div>
  );
}

export default App;
