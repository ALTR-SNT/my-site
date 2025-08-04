
interface ContentFrameProps {
  projUrl: string;
  projName: string;
  gitHubUrl?: string;
}

export default function ContentFrame({ projUrl, projName, gitHubUrl }: ContentFrameProps) {
  return (
    <div className="flex flex-col items-center">

      <h3 className="text-2xl font-bold mb-2">{projName}</h3>

      <iframe
      scrolling="no"
      className={`h-70 w-70 rounded-xl shadow-lg border-0.5  transition-all duration-300 hover:shadow-2xl`} 
      src={projUrl}>
      </iframe>

      <p >
       Info:
      </p>
      <div className="flex flex-row items-center mt-4 justify-evenly w-full">
        <a 
      className="bg-gray-700 text-white w-25 h-10 rounded-md mt-4
                flex items-center justify-center
                transition-all duration-300 ease-in-out
              hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-700/60
              active:bg-orange-400 active:shadow-xl active:shadow-orange-700/60"
        href={projUrl} 
        target="_blank" 
        rel="noopener noreferrer">Site</a>
      
      {gitHubUrl && (
            <a 
           className="bg-gray-700 text-white w-25 h-10 rounded-md mt-4
                flex items-center justify-center
                transition-all duration-300 ease-in-out
              hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-700/60
              active:bg-orange-400 active:shadow-xl active:shadow-orange-700/60"
            href={gitHubUrl} 
            target="_blank" 
            rel="noopener noreferrer">GitHub</a>
      )}
      </div>
    </div>
  );
}