import { Container } from "reactstrap";
import Navi from "../navi/Navi.jsx";
import DashBoard from "./DashBoard.jsx";

function App() {
  return (
    <Container>
      <Navi />
      <DashBoard />
    </Container>
  );
}

export default App;
