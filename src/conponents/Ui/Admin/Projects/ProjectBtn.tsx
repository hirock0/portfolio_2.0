"use client";
import { deleteProject } from "@/actions/crud.action";
import { safeJsonParse } from "@/utils/safeJsonParse";
import { toast } from "sonner";
const ProjectBtn = ({ type, btn, value, className }: any) => {
  const projectHandler = async () => {
    if (!value) {
      return;
    }
    const parseValue = safeJsonParse(value, null);
    if (type === "delete") {
      try {
        const res = await deleteProject(JSON.stringify(parseValue));
        toast.success("delete");
      } catch (error: any) {
        throw new Error(error?.message);
      }
    }
  };
  return (
    <div>
      <button onClick={projectHandler} className={className}>
        {btn}
      </button>
    </div>
  );
};

export default ProjectBtn;
