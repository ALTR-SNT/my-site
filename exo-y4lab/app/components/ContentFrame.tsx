import {LinkButton} from "./ui/LinkButton";
interface ContentFrameProps {
  projUrl: string;
  projName: string;
  gitHubUrl?: string;
}

export default function ContentFrame({ projUrl, projName, gitHubUrl }: ContentFrameProps) {
  return (
    <div className="flex flex-col items-center h-50 w-70 p-6 rounded-lg shadow-lg z-0 justify-evenly bg-black/10  border border-white/10">
      <h3 className="text-3xl font-bold">{projName}</h3>
      <div className="flex flex-row m-8 items-baseline justify-evenly w-full gap-7">
        <LinkButton link={projUrl} text="Demo" />
      
      {gitHubUrl && (
        <LinkButton link={gitHubUrl} text="Source" />
      )}
      </div>
    </div>
  );
}