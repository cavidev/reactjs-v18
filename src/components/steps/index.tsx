import { ReactNode, useState } from "react";
import { Button } from "../button";

interface StepperProps<T> {
    data: T[];
    children?: (item: T, index: number) => ReactNode | ReactNode | undefined;
}

const Stepper = <T,>({ data, children }: StepperProps<T>) => {
    const [currentStep, setCurrentStep] = useState(0);
    const stepsCount = data.length;

    const goToStep = (index: number) => {
        if (index >= 0 && index < stepsCount) {
            setCurrentStep(index);
        }
    };

    const nextStep = () => goToStep(currentStep + 1);
    const prevStep = () => goToStep(currentStep - 1);

    return (
        <div className="w-full justify-center">
            <div className="min-h-52">
                {typeof children === "function" ? children(data[currentStep], currentStep) : children}
            </div>
            <div className="w-full justify-center" style={{ display: "flex", alignItems: "center", marginTop: 16 }}>
                <Button onClick={prevStep} disabled={currentStep === 0}>
                    ←
                </Button>
                <div className="flex gap-3 justify-center" style={{ margin: "0 16px" }}>
                    {data.map((_, idx) => (
                        <Button
                            key={idx}
                            onClick={() => goToStep(idx)}
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: "50%",
                                background: idx === currentStep ? "#007bff" : "#ccc",
                                border: "none",
                                cursor: "pointer",
                                padding: 0,
                            }}
                            aria-label={`Go to step ${idx + 1}`}
                        />
                    ))}
                </div>
                <Button onClick={nextStep} disabled={currentStep === stepsCount - 1}>
                    →
                </Button>
            </div>
        </div>
    );
};

export default Stepper;
