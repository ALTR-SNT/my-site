
interface ContentFrameProps {
  projUrl: string;
  projName: string;
  gitHubUrl?: string;
}

export default function ContentFrame({ projUrl, projName, gitHubUrl }: ContentFrameProps) {
  return (
    <div className="flex flex-col items-center h-30 w-70 p-6 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold">{projName}</h3>
      <p className="text-center mt-4">Details:</p>
      <div className="flex flex-row m-8 items-end justify-evenly w-full gap-4">
        <a 
      className="bg-gray-700 text-white w-25 h-10 rounded-md 
                flex items-center justify-center
                transition-all duration-300 ease-in-out
              hover:bg-green-400 hover:shadow-xl hover:shadow-green-700/60
              active:bg-green-400 active:shadow-xl active:shadow-green-700/60"
        href={projUrl} 
        target="_blank" 
        rel="noopener noreferrer">Site</a>
      
      {gitHubUrl && (
            <a 
           className="bg-gray-700 text-white w-25 h-10 rounded-md
                flex items-center justify-center
                transition-all duration-300 ease-in-out
              hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-700/60
              active:bg-cyan-400 active:shadow-xl active:shadow-cyan-700/60"
            href={gitHubUrl} 
            target="_blank" 
            rel="noopener noreferrer">GitHub</a>
      )}
      </div>
    </div>
  );
}