import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Dialog } from "../dialog";
import Timeline from "./index";

const timelineData = [
    {
        id: "1",
        company: "TechCorp Solutions",
        description: "Led development of enterprise web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers.",
        date: "2023 - Present",
        tecnologies: ["React", "Node.js", "TypeScript", "Docker", "AWS", "MongoDB"],
        resume: [
            "Developed scalable web applications serving 100k+ users",
            "Implemented automated testing with 95% code coverage",
            "Reduced deployment time by 60% through CI/CD optimization",
            "Mentored 5 junior developers and conducted code reviews"
        ]
    },
    {
        id: "2",
        company: "InnovateSoft",
        description: "Built responsive web applications and mobile-first solutions. Collaborated with design team to implement pixel-perfect UI components.",
        date: "2021 - 2023",
        tecnologies: ["React", "Vue.js", "JavaScript", "CSS3", "Git", "Figma"],
        resume: [
            "Created 15+ reusable UI components used across projects",
            "Improved website performance by 40% through optimization",
            "Implemented responsive design for mobile and tablet devices",
            "Collaborated with UX/UI designers for seamless integration"
        ]
    },
    {
        id: "3",
        company: "StartupHub",
        description: "Full-stack development for early-stage startups. Rapid prototyping and MVP development with focus on user experience.",
        date: "2019 - 2021",
        tecnologies: ["JavaScript", "Python", "PostgreSQL", "Firebase", "Heroku"],
        resume: [
            "Built 8 MVP applications from concept to deployment",
            "Integrated third-party APIs for payment and authentication",
            "Optimized database queries reducing load times by 50%",
            "Provided technical consultation for startup founders"
        ]
    }
];

const TimelineExample: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<typeof timelineData[0] | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleItemClick = (index: number) => {
        setSelectedItem(timelineData[index]);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
        setSelectedItem(null);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-6"
            >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Professional Experience
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Click on any item to view detailed information
                </p>
            </motion.div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                <Timeline
                    items={timelineData}
                    onClick={handleItemClick}
                    autoAnimate={true}
                    animationDelay={0.2}
                    enableIntersectionObserver={true}
                />
            </div>

            <AnimatePresence>
                {isDialogOpen && selectedItem && (
                    <Dialog
                        isOpen={isDialogOpen}
                        onClose={closeDialog}
                    >
                        <div className="space-y-4">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    {selectedItem.company}
                                </h3>
                                <button
                                    onClick={closeDialog}
                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                >
                                    ✕
                                </button>
                            </div>
                            
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {selectedItem.date}
                                </span>
                                <div className="flex flex-wrap gap-1">
                                    {selectedItem.tecnologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {selectedItem.description && (
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                    {selectedItem.description}
                                </p>
                            )}

                            {selectedItem.resume && selectedItem.resume.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                        Key Achievements:
                                    </h4>
                                    <ul className="space-y-1">
                                        {selectedItem.resume.map((achievement, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: index * 0.1,
                                                    duration: 0.3,
                                                }}
                                                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                                            >
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                                {achievement}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </Dialog>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TimelineExample; 