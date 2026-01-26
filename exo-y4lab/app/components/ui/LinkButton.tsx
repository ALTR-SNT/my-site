export function LinkButton({link, text} : {link: string, text: string}) {
    return(
              <a className="bg-gray-700 text-white w-24 h-12 rounded-md
                flex items-center justify-center backdrop-blur-md 
                transition-all duration-300 ease-in-out
              hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-700/60
              active:bg-cyan-400 active:shadow-xl active:shadow-cyan-700/60"
        href={link} 
        target="_blank" 
        rel="noopener noreferrer">{text}</a>
    )
}