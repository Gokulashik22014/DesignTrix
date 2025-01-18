import React from "react";
import Content from "./Content";
import FirstSection from "./FirstSection";
import TimeLine from "../components/TimeLine";
import ContactUs from "../components/ContactUs/ContactUs";
const App = () => {
  return (
    <Content>
      <FirstSection />
      {/* second section */}
      <div className="mt-12">
        <ContactUs/>
      </div>
    </Content>
  );
};

export default App;
