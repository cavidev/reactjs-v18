import { ReactNode, useState } from "react";
import For from "../../lib/For/For";
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

    // Crear array de índices para usar con For
    const stepIndices = Array.from({ length: stepsCount }, (_, idx) => ({ id: `step-${idx}`, index: idx }));

    return (
        <div className="w-full h-full flex flex-col justify-between">
            <div className="min-h-40">
                {typeof children === "function" ? children(data[currentStep], currentStep) : children}
            </div>
            <div className="w-full justify-center" style={{ display: "flex", alignItems: "center", marginTop: 16 }}>
                <Button onClick={prevStep} disabled={currentStep === 0}>
                    ←
                </Button>
                <div className="flex gap-3 justify-center" style={{ margin: "0 16px" }}>
                    <For each={stepIndices}>
                        {({ index }) => (
                            <Button
                                onClick={() => goToStep(index)}
                                style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: "50%",
                                    background: index === currentStep ? "#007bff" : "#ccc",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: 0,
                                }}
                                aria-label={`Go to step ${index + 1}`}
                            />
                        )}
                    </For>
                </div>
                <Button onClick={nextStep} disabled={currentStep === stepsCount - 1}>
                    →
                </Button>
            </div>
        </div>
    );
};

export default Stepper;
