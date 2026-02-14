"use server";

import { deleteFromR2, uploadToR2 } from "@/lib/cloudflare/r2";
import { safeJsonParse } from "@/utils/safeJsonParse";
import clientPromise from "@/lib/dbConnections/dbConnect";
import { ObjectId } from "mongodb";
const uploadProject = async (formData: FormData, payload: any) => {
  let pre_public_id = null;
  try {
    if (!formData && !payload) {
      return {
        message: "Data is missing!",
        success: false,
      };
    }
    const parsePayload = safeJsonParse(payload, null) as any;
    const { title, category, description, tags, liveUrl, githubUrl, featured } =
      parsePayload;

    const file = formData.get("image") as File;
    const res = await uploadToR2(file);
    if (!res?.success) {
      return {
        message: "Image not uploaded",
        success: false,
      };
    }

    pre_public_id = res?.image?.public_id;
    const createPayload = {
      title,
      category,
      description,
      tags,
      liveUrl,
      githubUrl,
      featured,
      image: res?.image,
    };
    const client = await clientPromise;
    const db = client.db("Portfolio20").collection("projects");

    const response = await db.insertOne(createPayload);
    if (response?.insertedId) {
      return {
        message: "project uploaded",
        success: true,
      };
    } else {
      if (pre_public_id) {
        await deleteFromR2(pre_public_id);
      }
      return {
        message: "project uploaded",
        success: true,
      };
    }
  } catch (error: any) {
    if (pre_public_id) {
      await deleteFromR2(pre_public_id);
    }
    return {
      message: error?.message,
      success: false,
    };
  }
};

const getProjects = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("Portfolio20").collection("projects");
    const findProjects = await db.find().sort({ createdAt: -1 }).toArray();
    return {
      message: "project founded",
      success: false,
      projects: JSON.stringify(findProjects),
    };
  } catch (error: any) {
    return {
      message: error?.message,
      success: false,
    };
  }
};

const deleteProject = async (payload: any) => {
  try {
    if (!payload) {
      return {
        message: "Data not found",
        success: false,
      };
    }
    const parseProject = safeJsonParse(payload, null) as any;
    const client = await clientPromise;
    const db = client.db("Portfolio20").collection("projects");
    const deletedProject = await db.findOneAndDelete({
      _id: new ObjectId(String(parseProject?._id)),
    });
    if (deletedProject) {
      await deleteFromR2(parseProject?.image?.public_id);
    }
    return {
      message: "Projected Deleted!",
      success: true,
    };
  } catch (error: any) {
    return {
      message: error?.message,
      success: false,
    };
  }
};
export { uploadProject, getProjects, deleteProject };
