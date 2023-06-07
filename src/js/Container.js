import React, { useState, useRef } from "react";
import SideBar from "./SideBar";

function Container({ utensil }) {
  const { tool, color } = utensil;

  const canvasRef = useRef(null);
  const [draw, setDraw] = useState(false);
  const [brushSize, setBrushSize] = useState(5);

  function handleMouseDown(event) {
    if (tool === "brush" || tool === "eraser") {
      setDraw(true);
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      context.beginPath();
      context.strokeStyle = tool === "eraser" ? "white" : color;
      context.lineWidth = brushSize;
      context.lineCap = "round";
      context.moveTo(x, y);
    }
  }

  function handleMouseMove(event) {
    if (draw && (tool === "brush" || tool === "eraser")) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      context.lineTo(x, y);
      context.stroke();
    }
  }

  function handleMouseUp() {
    if (tool === "brush" || tool === "eraser") {
      setDraw(false);
    }
  }

  function handleBrushSizeChange(event) {
    const newSize = parseInt(event.target.value);
    setBrushSize(newSize);
  }

  return (
    <React.Fragment>
      <div>
      {tool === "brush" || tool === "eraser" ? (
          <div class=" text-center">
            <label htmlFor="brushSize">Tamaño del Pincel</label>
            <div>
              
            </div>
            <input
              type="range"
              id="brushSize"
              min={1}
              max={20}
              value={brushSize}
              onChange={handleBrushSizeChange}
            />
            <span>{brushSize}</span>
          </div>
        ) : null}

        <SideBar />
      </div>
      <div class="container">
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          style={{
            backgroundColor: "white",
            border: "5px solid rgb(207, 207, 207)",
            borderStyle: "groove",
            cursor: "crosshair",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
        </canvas>

      </div>


    </React.Fragment>
  );
}

export default Container;
