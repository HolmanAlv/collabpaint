import React, { useState, useRef } from "react";
import SideBar from "./SideBar";
import html2canvas from "html2canvas";



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

  function handleSaveImage() {
    html2canvas(canvasRef.current).then((canvas) => {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "image.png";
      link.click();
    });
  }



  return (
    <div >
      <button class="btn" onClick={handleSaveImage}>💾</button>
      <div class="container text-center">
          <label htmlFor="brushSize"> Tamaño del Pincel</label>
          <div></div>
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
      <div class="container">
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          style={{
            backgroundColor: "white",
            border: "5px solid rgb(207, 207, 207)",
            borderRadius: '0px 0px 10px 10px',
            cursor: "crosshair"
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        ></canvas>
      </div>
    </div>
  );
}

export default Container;
