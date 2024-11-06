import { QuestionIcon, SchoolIcon, WorkIcon } from "@/lib/icons";



/** RESUME CARD **/

export const ResumeBox = ({ type, children }) => {
  const iconClassName =
    "p-1 text-4xl border-2 border-slate-700 rounded-full text-green-700 group-hover:text-white group-hover:bg-slate-700 transition";

  return (
    <div className="flex group gap-7">
      <div className="flex flex-col items-center">
        <div className="h-4 border border-slate-700"></div>
        {type === "school" || type === "work" ? (
          <>
            {type === "school" && <SchoolIcon className={iconClassName} />}
            {type === "work" && <WorkIcon className={iconClassName} />}
          </>
        ) : (
          <QuestionIcon className={iconClassName} />
        )}
        <div className="flex-grow border border-slate-700 group-last:hidden"></div>
      </div>
      <div className="flex flex-col py-4">{children}</div>
    </div>
  );
};

