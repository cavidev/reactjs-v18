import { Dispatch, KeyboardEvent, SetStateAction, useId, useState } from "react";
import { useTodos } from "./TodoProvider";

export const Input = ({
    value = undefined,
    setEditing,
    id,
}: {
    value?: string;
    setEditing?: Dispatch<SetStateAction<boolean>>;
    id?: string;
}) => {
    const [text, setText] = useState(value || "");
    const [isValid, setIsValid] = useState(true);
    const { dispatch } = useTodos();
    const inputId = useId();
    const buttonId = useId();

    const isEditing = !!setEditing;
    const placeholder = isEditing ? "Edit task..." : "What do you need to do?";
    const buttonText = isEditing ? "Save" : "Add";
    const buttonAriaLabel = isEditing ? "Save changes" : "Add new task";

    const handleSubmit = () => {
        const trimmedText = text.trim();
        
        if (!trimmedText) {
            setIsValid(false);
            return;
        }

        setIsValid(true);
        
        if (setEditing) {
            dispatch({ payload: "update", id, data: trimmedText });
            setEditing(false);
        } else {
            dispatch({ payload: "add", data: trimmedText });
        }
        setText("");
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
        } else if (e.key === "Escape" && setEditing) {
            setEditing(false);
            setText(value || "");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        if (!isValid && e.target.value.trim()) {
            setIsValid(true);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
                <div className="flex-1 relative">
                    <input
                        id={inputId}
                        type="text"
                        autoFocus={isEditing}
                        value={text}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder}
                        aria-label={placeholder}
                        aria-describedby={!isValid ? `${inputId}-error` : undefined}
                        aria-invalid={!isValid}
                        className={`
                            w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                            placeholder-gray-400
                            ${isValid 
                                ? 'border-gray-300 focus:border-blue-500' 
                                : 'border-red-500 focus:border-red-500'
                            }
                            ${isEditing 
                                ? 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100' 
                                : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                            }
                        `}
                    />
                    {!isValid && (
                        <div 
                            id={`${inputId}-error`} 
                            className="text-red-500 text-sm mt-1"
                            role="alert"
                        >
                            Please enter a valid task
                        </div>
                    )}
                </div>
                
                <button
                    id={buttonId}
                    onClick={handleSubmit}
                    aria-label={buttonAriaLabel}
                    className={`
                        px-6 py-3 rounded-lg font-medium transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                        hover:scale-105 active:scale-95
                        ${isEditing
                            ? 'bg-green-500 hover:bg-green-600 text-white'
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }
                        disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                    disabled={!text.trim()}
                >
                    {isEditing ? (
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Save
                        </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add
                        </span>
                    )}
                </button>
            </div>
            
            {/* Accessibility instructions */}
            <div className="text-xs text-gray-500 dark:text-gray-400">
                {isEditing ? (
                    <span>Press Enter to save or Escape to cancel</span>
                ) : (
                    <span>Press Enter to add a new task</span>
                )}
            </div>
        </div>
    );
};
