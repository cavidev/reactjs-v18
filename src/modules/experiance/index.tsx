//import { Card } from "primereact/card";
//import { Timeline } from "primereact/timeline";
import { useState } from "react";
import { Button } from "~/components/button";
import { Card } from "~/components/card";
import { Dialog } from "~/components/dialog";
import Stepper from "~/components/steps";
import Timeline from "~/components/timeline";
import Show from "~/lib/Show/Show";
import { Resume, experiance } from "./experiance";
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
        <div className="w-full flex flex-col items-center justify-center">
            <Timeline items={experiance} onClick={setIsOpen}></Timeline>
            <Dialog isOpen={isOpen !== -1} onClose={() => setIsOpen(-1)}>
                <Show when={isOpen !== -1}>
                    <Stepper data={(isOpen !== -1 && experiance[isOpen].resume) || []}>
                        {(item, index) => <>{item}</>}
                    </Stepper>
                </Show>
            </Dialog>
        </div>
    );
};
