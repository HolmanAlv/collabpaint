import React, { useState, useRef } from "react";
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
      <div class="canvas">
        <hr />
        <button class="toolButton" onClick={handleSaveImage}>💾</button>
        <hr />
        <>
          <label htmlFor="brushSize"> Tamaño de la herramienta:</label>
          <input
            type="range"
            id="brushSize"
            min={1}
            max={20}
            value={brushSize}
            onChange={handleBrushSizeChange}
          />
          <span>{brushSize}</span>
        </>
        <hr />

      </div>
      <canvas
        ref={canvasRef}
        width={790}
        height={600}
        style={{
          backgroundColor: "white",
          border: "5px solid rgb(207, 207, 207)",
          borderRadius: '0px 0px 10px 10px'
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      ></canvas>
    </div>
  );

}


export default Container;
