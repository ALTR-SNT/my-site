import Link from "next/link";
interface ContentFrameProps {
  projUrl: string;
  projName: string;
}

export default function ContentFrame({ projUrl, projName}: ContentFrameProps) {
  return (
    <div className="flex flex-col items-center h-70 w-70">
      <iframe className="h-60 w-70" src={projUrl}></iframe>
      <h3 className="text-rose-500"><Link href={projUrl} target="_blank" rel="noopener noreferrer">{projName}</Link></h3>
    </div>
  );
}