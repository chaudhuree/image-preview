import React, { useRef, useState } from 'react';

const ImagePreview = () => {
  const inputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileInputChange}
        style={{ display: 'none' }}
        accept="image/*"
      />
      <button onClick={() => inputRef.current.click()}>Upload Image</button>
      {imagePreview ? (
        <img src={imagePreview} alt="Uploaded preview" style={{ width: '100%', height: 'auto' }} />
      ) : (
        <p>No image selected</p>
      )}
    </div>
  );
};

export default ImagePreview;
