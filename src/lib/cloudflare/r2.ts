import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

export const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export const uploadToR2 = async (file: any) => {
  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const public_id = `${Date.now()}-${file.name}`;
    await r2.send(
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME!,
        Key: public_id,
        Body: buffer,
        ContentType: file.type,
      }),
    );
    const imageUrl = `${process.env.R2_PUBLIC_URL}/${public_id}`;

    const image = {
      secure_url: imageUrl,
      public_id,
    };
    return {
      message: "image uploaded",
      success: true,
      image,
    };
  } catch (error: any) {
    return {
      message: error?.message,
      success: true,
    };
  }
};
export const deleteFromR2 = async (public_id: any) => {
  try {
    await r2.send(
      new DeleteObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME!,
        Key: public_id,
      }),
    );

    return {
      message: "image dleted successfully!",
      success: true,
    };
  } catch (error: any) {
    return {
      message: error?.message,
      success: true,
    };
  }
};
