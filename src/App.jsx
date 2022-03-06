import React from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { SizeMe } from "react-sizeme";

const App = () => {
  return (
    <div>
      <Header />
      <SizeMe monitorHeight>
        {({ size }) => (
          <div>
            <Container />
            <Footer height={size.height} />
          </div>
        )}
      </SizeMe>
    </div>
  );
};

export default App;
