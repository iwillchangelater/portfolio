import React, { useState } from "react";
import "./Body.css";
import BodyNavigation from "./BodyNavigator.jsx";
import BodyDisplay from "./BodyDisplay.jsx";
function Body() {
  const [activeTab, setactiveTab] = useState(1);
  return (
    <div className="body" id="about">
      {/* navigator */}
      <BodyNavigation activeTab={activeTab} setactiveTab={setactiveTab} />
      {/* display section */}
      <BodyDisplay activeTab={activeTab} />
    </div>
  );
}

export default Body;
