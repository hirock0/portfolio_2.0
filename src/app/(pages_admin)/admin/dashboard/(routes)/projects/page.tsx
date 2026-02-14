export const dynamic = "force-dynamic";
import { getProjects } from "@/actions/crud.action";
import ProjectUploadForm from "@/conponents/Admin/Projects/ProjectUploadForm";
import ProjectBtn from "@/conponents/Ui/Admin/Projects/ProjectBtn";
import { safeJsonParse } from "@/utils/safeJsonParse";
import Image from "next/image";

const Projects = async () => {
  const res = await getProjects();
  const projects = safeJsonParse(res?.projects, []);
  return (
    <div>
      <div className="">
        <ProjectUploadForm />
      </div>
      <div className="">
        {projects?.map((p: any, idx: any) => (
          <div className="" key={idx}>
            <Image
              src={p?.image?.secure_url}
              alt={p?.title}
              width={500}
              height={500}
            />
            <ProjectBtn
              type={"delete"}
              btn={"Delete"}
              value={JSON.stringify(p)}
              className={""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
