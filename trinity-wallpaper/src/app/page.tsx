"use client"; // This is a client component 👈🏽

import { useState } from "react";
import Image from "next/image";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && (
        <div>
          <h2>Resized Image:</h2>
          <Image
            src={selectedImage}
            alt="Resized Image"
            width={300} // Specify the desired width
            height={200} // Specify the desired height
          />
        </div>
      )}
    </main>
  );
};

const WallpaperResizer = () => {
  return (
    <div>
      <Home resizedImage={undefined} />
    </div>
  );
};

export default WallpaperResizer;
