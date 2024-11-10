import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [widgets, setwidgets] = useState([]);

  const handleOnDrug = (e, widget_type) => {
    e.dataTransfer.setData("widgetType", widget_type);
    const widgetType = e.dataTransfer.getData("widgetType");
    console.log(widgetType);
  };

  const handleOnDrop = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    console.log(widgetType);
    setwidgets([...widgets, widgetType]);
  };

  return (
    <div className="App-header">
      <div className="widget_list">
        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrug(e, "Widget A")}
        >
          Widget A
        </div>
        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrug(e, "Widget B")}
        >
          Widget B
        </div>
        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrug(e, "Widget C")}
        >
          Widget C
        </div>
      </div>
      <div
        className="page"
        onDrop={handleOnDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {widgets.map((widgets, i) => (
          <div className="widget" key={i}>
            {widgets}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
