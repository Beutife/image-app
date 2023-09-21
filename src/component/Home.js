import React, { useState, useRef } from "react";
import '../styles/home.css'
import { Button } from "react-bootstrap";

const Home = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onfileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) =>
      prevImages.filter((_, i) => i !== index)
    );
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  return (
    <>
      <div className="card">
        <div className="top"><p>Drag and Drop image Uploading</p></div>
        <div className="drag-area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
          {isDragging ? (
            <span className="select">Drop Images here</span>
          ) : (
            <>
              Drag and drop images here or  {" "}
              <span className="select" role="button" onClick={selectFiles}> Browse</span>
            </>
          )}
          <input name="file" type="file" className="file" multiple ref={fileInputRef} onChange={onfileSelect}></input>
        </div>
        <div className="contain">
          {images.map((image, index) => (
            <div className="image" key={index}>
              <span className="delete" onClick={() => deleteImage(index)}>&times;</span>
              <img src={image.url} alt={image.name} />
            </div>
          ))}
        </div>
        <Button className="button">Upload</Button>
      </div>
    </>
  );
};

export default Home;
