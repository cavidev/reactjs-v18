import { Button } from "primereact/button";
//import { Card } from "primereact/card";
import { Timeline } from "primereact/timeline";
import { useState } from "react";
import { Card } from "~/components/card";
import { Dialog } from "~/components/dialog";
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
                    size="small"
                    label="Read more"
                    className="p-button-text"
                ></Button>
            </>
        </Card>
    );
};

export const Experience = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [key, setKey] = useState(0);
    return (
        <>
            <Timeline
                value={experiance}
                align="alternate"
                className="customized-timeline"
                //marker={customizedMarker}
                content={(item, key) => {
                    setKey(key);
                    return customizedContent(item, key, setIsOpen);
                }}
            />
            <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ul>
                    {experiance[key - 1].resume.map((skill, index) => (
                        <li key={index}> {skill}</li>
                    ))}
                </ul>
            </Dialog>
        </>
    );
};
