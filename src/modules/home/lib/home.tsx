import { AuroraText, MorphingText } from "packages/text";
import { FC } from "react";
import { Button } from "~/components/Button";
import { Linkedin } from "~/components/LinkenId";

const Home: FC = () => {
    return (
        <div className=" flex flex-row w-full h-screen px-24 ">
            <div className="flex px-8 flex-row w-2/3 items-center">
                <div className="flex text-text-light dark:text-text-dark flex-col gap-4">
                    <h1 className="flex text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl items-center justify-center">
                        I'm &nbsp; <AuroraText speed={5}>Carlos Villafuerte</AuroraText>
                    </h1>
                    <p className="text-theme-light-text dark:text-theme-dark-text">
                        ..a seasoned software engineer with 5 years of experience in the industry. As a passionate
                        full-stack developer, I thrive crafting immersive and intuitive user experiences on the front
                        end. My journey in software engineering has led me to specialize in web development,
                    </p>
                    <div className="flex flex-row justify-center gap-1 h-full">
                        <a
                            href="/Carlos-Villafuerte.pdf"
                            download="Carlos-Villafuerte.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onLoad={(e) => {
                                console.log(e);
                            }}
                        >
                            <Button
                                className="hover:bg-opacity-0 bg-transparent border-navbar-light dark:border-navbar-dark border-[2px] h-12 linkedin p-0"
                                aria-label="linkedin"
                            >
                                <span className="px-3 text-navbar-light dark:text-text-dark">Download CV</span>
                            </Button>
                        </a>
                        <Linkedin
                            onClick={() => {
                                location.href = "https://www.linkedin.com/in/carlosmariovillafuerte/";
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-1/3 items-center justify-center text-text-light dark:text-text-dark">
                <div className=" relative w-full flex justify-center content-center overflow-hidden">
                    <div className="border-solid border-[6px] border-navbar-light dark:border-navbar-dark w-96 h-96 rounded-full flex flex-col justify-center items-center">
                        <div
                            style={{ border: "10px" }}
                            className="border-solid bg-navbar-light dark:bg-navbar-dark p-1 w-80 h-80 rounded-full flex flex-col justify-center items-center"
                        >
                            <img src="me1.png" alt="Carlos Villafuerte" className="rounded-full w-72 h-72 " />
                        </div>
                    </div>
                </div>
                <MorphingText texts={["React", "JavaScript", "Typescript", "NodeJs", "Java", "AngularJs"]} />
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
