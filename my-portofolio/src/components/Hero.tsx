import {BsGithub, BsTwitter, BsLinkedin} from "react-icons/bs"

const Hero = () => {
  return (
    <div className="h-auto pb-3 md:h-[82vh] bg-white/70 flex flex-col-reverse justify-end gap-12 md:flex-row md:justify-around items-center md:py-2 px-3  rounded-md" id="home">
      <div className="flex flex-col gap-2 justify-center items-center md:w-[70%]">
        <div className="flex flex-col-reverse md:flex-col justify-center items-center pb-5">
        <p className="text-[1.60rem] md:text-2xl lg:text-3xl font-bold text-black/80">Hi, i'm Oluwadare Queensheba</p>
        <p className="text-[2.4rem] md:text-3xl lg:text-4xl font-bold text-purple-800 mb-2 md:mb-5">Front-end Developer</p>
        </div>
        <div className="flex gap-5 text-black/70 text-2xl pb-16 md:pb-0">
            <a target="_blank" href="https://github.com/Queen-in-tech"><BsGithub/></a>
            <a target="_blank" href="https://twitter.com/Queenofsheba0"><BsTwitter/></a>
            <a href=""><BsLinkedin/></a>
        </div>

        <div className="flex flex-col flex-wrap md:flex-row gap-4 md:pt-24 items-center justify-center">
            <p className="text-2xl md:text-lg font-semibold text-black/70 border-b border-black/70 pb-1 md:border-b-0 md:pb-0">Tech stack   <span className="hidden md:inline-block">|</span></p>

            <div className="flex gap-[2.5rem] md:gap-6 items-center justify-center flex-wrap">
                <img src="https://stefantopalovicdev.vercel.app/static/media/html.6e7b1b463015c056aeb9a624c8dc2876.svg" alt="" className="w-8 h-8"/>
             

                <img src="https://stefantopalovicdev.vercel.app/static/media/css3.9cecabbf6ce67609c48bc4f280a11002.svg" alt="" className="w-8 h-8"/>
               

                <img src="https://stefantopalovicdev.vercel.app/static/media/javascript.de4c2594613e34b15666206bbede7327.svg" alt="" className="w-8 h-8"/>
               

                <img src="https://stefantopalovicdev.vercel.app/static/media/tailwind.79614a5f61617ba49a0891494521226b.svg" alt="" className="w-8 h-8"/>

                <img src="https://stefantopalovicdev.vercel.app/static/media/react.afac9c43724070bf6674f2692b7356a9.svg" alt="" className="w-8 h-8"/>
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201" alt="" className="w-8 h-8"/>

                <img src="https://www.svgrepo.com/show/303670/firebase-1-logo.svg" alt="" className="w-8 h-8"/>
            </div>
            </div>
      </div>

      <div>
        <img src="IMG_2619.PNG" alt="hero image" className="w-64 h-56 object-contain md:w-auto md:h-auto"/>
      </div>    
    </div>
  )
}

export default Hero
