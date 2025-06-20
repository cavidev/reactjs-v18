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
            <div className="grid grid-cols-4 grid-rows-5 gap-3">
                <div className="col-span-2 row-span-5">
                    <div className="flex flex-col gap-2 justify-center items-center h-full">
                        <div>Tecnology Stack</div>
                        <div>Comming soon</div>
                    </div>
                </div>
                <div className="col-span-2 row-span-5 col-start-3">
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="flex flex-col gap-4 justify-center items-center h-full">
                            <h1 className="text-xl font-medium">Work History</h1>
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
                        <h1 className="font-medium text-xl">Responsabilities: </h1>
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

/*


        <div className="w-full flex flex-col items-center justify-center">
            <Timeline items={experiance} onClick={setIsOpen}></Timeline>
            <Dialog isOpen={isOpen !== -1} onClose={() => setIsOpen(-1)}>
                <Show when={isOpen !== -1}>
                    <div className="flex flex-col gap-1 h-full">
                        <h1 className="font-medium text-xl">Responsabilities: </h1>
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
        </div>
*/
