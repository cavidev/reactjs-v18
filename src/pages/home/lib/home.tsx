import { AuroraText, MorphingText } from "packages/text";
import { FC } from "react";
import { Button } from "~/components/button";
import { Linkedin } from "~/components/LinkenId";

// Add this declaration if not already present in your project
declare global {
    interface ImportMeta {
        env: {
            [key: string]: string | undefined;
            BASE_URL: string;
        };
    }
}

const Home: FC = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            {/* Content Section */}
            <div className="flex flex-col lg:flex-row w-full lg:w-2/3 items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-0 order-2 lg:order-1">
                <div className="flex text-text-light dark:text-text-dark flex-col gap-4 px-4 mx-auto lg:mx-0">
                    {/* Title */}
                    <h1 className="flex flex-col lg:flex-row text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-tighter items-center lg:items-start justify-center lg:justify-start text-center lg:text-left">
                        <span className="lg:mr-2">I'm &nbsp;</span>
                        <AuroraText speed={2} className="text-center lg:text-left">
                            Carlos <br className="lg:hidden" />
                            <span className="lg:ml-4">&nbsp;Villafuerte</span>
                        </AuroraText>
                    </h1>
                    
                    {/* Description */}
                    <p className="text-theme-light-text dark:text-theme-dark-text text-sm sm:text-base leading-relaxed text-center lg:text-left">
                        ..a seasoned software engineer with 6+ years of experience in the industry. As a passionate
                        full-stack developer, I thrive crafting immersive and intuitive user experiences on the front
                        end. My journey in software engineering has led me to specialize in web development.
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-4">
                        <a
                            href="/Carlos-Villafuerte.pdf"
                            download="Carlos-Villafuerte.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <Button
                                className="hover:bg-opacity-0 bg-transparent border-navbar-light dark:border-navbar-dark border-[2px] h-12 linkedin p-0 w-full sm:w-auto"
                                aria-label="Download CV"
                            >
                                <span className="px-3 text-navbar-light dark:text-text-dark">Download CV</span>
                            </Button>
                        </a>
                        <div className="w-full sm:w-auto flex justify-center lg:justify-start">
                            <Linkedin
                                onClick={() => {
                                    location.href = "https://www.linkedin.com/in/carlosmariovillafuerte/";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Image Section */}
            <div className="flex flex-col w-full lg:w-1/3 items-center justify-center text-text-light dark:text-text-dark px-4 sm:px-6 lg:px-8 py-8 lg:py-0 order-1 lg:order-2">
                <div className="relative w-full flex justify-center content-center overflow-hidden">
                    {/* Profile Image Container */}
                    <div className="border-solid border-[4px] sm:border-[6px] border-surface-light dark:border-surface-dark w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full flex flex-col justify-center items-center">
                        <div
                            style={{ border: "8px" }}
                            className="border-solid bg-surface-light dark:bg-surface-dark p-1 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full flex flex-col justify-center items-center"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}me1.png`}
                                alt="Carlos Villafuerte"
                                className="rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Technologies Text */}
                <div className="mt-6 w-full max-w-xs">
                    <MorphingText
                        className="h-8 sm:h-12 lg:h-16 text-lg sm:text-2xl lg:text-4xl"
                        texts={["ReactJs", "JavaScript", "Typescript", "NodeJs", "Java", "AngularJs", "Python"]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;

/*
                <p>
                    I am a <span className="text-theme-accent-teal">Software Engineer</span> with a passion for
                    <span className="text-theme-accent-teal"> Frontend Development</span> and a strong interest in
                    <span className="text-theme-accent-teal"> Data Science</span>. I have a background in
                    <span className="text-theme-accent-teal"> Computer Science</span> and a keen interest in
                    <span className="text-theme-accent-teal"> Machine Learning</span>. I am always eager to learn new
                    technologies and improve my skills. I am currently working on a project that involves
                    <span className="text-theme-accent-teal"> React</span>,{" "}
                    <span className="text-theme-accent-teal">D3.js</span>,
                    <span className="text-theme-accent-teal"> Node.js</span>, and{" "}
                    <span className="text-theme-accent-teal">Python</span>.
                </p>
*/
