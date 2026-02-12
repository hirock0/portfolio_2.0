"use client";

import { useState } from "react";

export default function UploadPage() {
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState("");

  const uploadImage = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("/pages/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUrl(data.url);
  };

  return (
    <div className="p-6">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />

      <button
        onClick={uploadImage}
        className="px-4 py-2 bg-black text-white mt-3"
      >
        Upload
      </button>

      {url && (
        <div className="mt-4">
          <img src={url} alt="Uploaded" className="w-64 rounded" />
        </div>
      )}
    </div>
  );
}
