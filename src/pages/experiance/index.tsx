//import { Card } from "primereact/card";
//import { Timeline } from "primereact/timeline";
import { useState } from "react";
import { Button } from "~/components/button";
import { Card } from "~/components/card";
import { CardBasic } from "~/components/card/Basic";
import { Dialog } from "~/components/dialog";
import Stepper from "~/components/steps";
import Timeline from "~/components/timeline";
import Show from "~/lib/Show/Show";
import { experiance, Resume } from "./experiance";
import "./experiance.css";

const customizedMarker = (item: Resume) => {
    return <span className="custom-marker shadow-1" style={{ backgroundColor: item.color }}></span>;
};

const customizedContent = (item: Resume, key: number, setIsOpen: any) => {
    return (
        <Card key={key} title={item.company} subTitle={item.date}>
            <>
                <Button
                    onClick={() => setIsOpen(true)}
                    // size="small"
                    label="Read more"
                    className="p-button-text"
                ></Button>
            </>
        </Card>
    );
};

export const Experience = () => {
    const [isOpen, setIsOpen] = useState(-1);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-5 gap-3">
                {/* Imagen de lenguajes: solo visible en md+ */}
                <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-5 hidden md:flex">
                    <div className="flex flex-col gap-2 justify-center items-center h-full">
                        <div className="flex flex-row justify-center items-center gap-2 ml-0 md:ml-7">
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs?username=cavidev&locale=en&hide_title=false&layout=compact&card_width=700&langs_count=10&theme=discord_old_blurple&hide_border=true"
                                height="200"
                                alt="languages graph"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                {/* Timeline y título */}
                <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-5 col-start-1 md:col-start-2 lg:col-start-3">
                    <div className="w-full flex flex-col items-center justify-center px-2 md:px-4">
                        <div className="flex flex-col gap-4 justify-center items-center h-full">
                            <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-center">Work History</h1>
                            <div>
                                <Timeline items={experiance} onClick={setIsOpen}></Timeline>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog isOpen={isOpen !== -1} onClose={() => setIsOpen(-1)}>
                <Show when={isOpen !== -1}>
                    <div className="flex flex-col gap-1 h-full">
                        <h1 className="font-medium text-xl">Responsibilities: </h1>
                        <Stepper data={(isOpen !== -1 && experiance[isOpen].resume) || []}>
                            {(item, index) => (
                                <CardBasic key={index}>
                                    <span>{item}</span>
                                </CardBasic>
                            )}
                        </Stepper>
                    </div>
                </Show>
            </Dialog>
        </>
    );
};
