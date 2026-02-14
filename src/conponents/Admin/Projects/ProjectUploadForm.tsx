"use client";

import { useForm } from "react-hook-form";
import { ImageIcon, Github, Link2, Tag } from "lucide-react";
import { useState } from "react";
import { uploadProject } from "@/actions/crud.action";
import { toast } from "sonner";

type FormValues = {
  title: string;
  category: string;
  description: string;
  tags: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  image: FileList;
};

const ProjectUploadForm = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<any>(false);
  const handleImagePreview = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const imageRegister = register("image");

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      const res = await uploadProject(formData, JSON.stringify(data));
      if (res?.success) {
        toast.success(res?.message);
        setLoading(false);
        reset();
        setPreview(null);
      } else {
        toast.warning(res?.message);
      }
    } catch (error: any) {
      throw new Error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto space-y-4 p-6 border rounded-xl"
    >
      <h2 className="text-xl font-semibold">Upload Project</h2>

      <input
        {...register("title")}
        placeholder="Project Title"
        className="input"
      />

      <input
        {...register("category")}
        placeholder="Category"
        className="input"
      />

      <textarea
        {...register("description")}
        placeholder="Description"
        className="input h-24"
      />

      <div className="relative">
        <Tag className="icon" />
        <input
          {...register("tags")}
          placeholder="React, TypeScript, CSS"
          className="input pl-10"
        />
      </div>

      <div className="relative">
        <Link2 className="icon" />
        <input
          {...register("liveUrl")}
          placeholder="Live URL"
          className="input pl-10"
        />
      </div>

      <div className="relative">
        <Github className="icon" />
        <input
          {...register("githubUrl")}
          placeholder="GitHub URL"
          className="input pl-10"
        />
      </div>

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("featured")} />
        Featured Project
      </label>

      {/* Image Upload */}
      <label className="border rounded-lg p-4 cursor-pointer flex items-center gap-3">
        <ImageIcon />
        <span>Upload Image</span>
        <input
          type="file"
          accept="image/*"
          hidden
          {...imageRegister}
          onChange={(e) => {
            imageRegister.onChange(e); // ✅ IMPORTANT
            if (e.target.files?.[0]) {
              handleImagePreview(e.target.files[0]);
            }
          }}
        />
      </label>

      {/* Preview */}
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-full h-48 object-cover rounded-lg"
        />
      )}

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-lg"
      >
        {loading ? "submitting..." : "Submit Project"}
      </button>
    </form>
  );
};

export default ProjectUploadForm;
