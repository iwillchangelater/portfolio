import React from "react";

function BodyNavigator({ activeTab, setactiveTab }) {
  return (
    <div className="body-navitator">
      <div
        onClick={() => setactiveTab(1)}
        className={
          activeTab === 1
            ? "active body-navigatior-item "
            : "body-navigatior-item"
        }
      >
        About
      </div>
      <div
        onClick={() => setactiveTab(2)}
        className={
          activeTab === 2
            ? "active body-navigatior-item"
            : "body-navigatior-item"
        }
      >
        Skills
      </div>
      <div
        onClick={() => setactiveTab(3)}
        className={
          activeTab === 3
            ? "active body-navigatior-item"
            : "body-navigatior-item"
        }
      >
        Projects
      </div>
    </div>
  );
}

export default BodyNavigator;
