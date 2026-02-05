"use client"

import { motion } from "motion/react";
import * as React from "react";

const TIMELINE_DATA = [
    {
        id: 1,
        title: "เปิดรับสมัคร",
        dateDisplay: "23 กุมภาพันธ์ - 10 มีนาคม 2569",
        startDate: "2026-02-23",
        endDate: "2026-03-10",
    },
    {
        id: 2,
        title: "ประกาศผล",
        dateDisplay: "21 มีนาคม 2569",
        startDate: "2026-03-21",
        endDate: "2026-03-21",
    },
    {
        id: 3,
        title: "ยืนยันสิทธิ์",
        dateDisplay: "21 - 23 มีนาคม 2569",
        startDate: "2026-03-21",
        endDate: "2026-03-23",
    },
    {
        id: 4,
        title: "วันค่าย",
        dateDisplay: "8 - 11 เมษายน 2569",
        startDate: "2026-04-08",
        endDate: "2026-04-11",
    },
];

function TimelineSection() {
    const [progress, setProgress] = React.useState(0);
    const [currentMilestone, setCurrentMilestone] = React.useState(0);
    const checkpointsRef = React.useRef<(HTMLDivElement | null)[]>([]);
    const progressBarRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let milestoneIndex = -1;
        let milestoneProgress = 0;

        // Check if we haven't reached the first milestone yet
        const firstMilestoneStart = new Date(TIMELINE_DATA[0].startDate);
        firstMilestoneStart.setHours(0, 0, 0, 0);

        if (today < firstMilestoneStart) {
            // Before the first milestone - no progress
            setCurrentMilestone(-1);
            setProgress(0);
            return;
        }

        // Find the last completed milestone
        for (let i = 0; i < TIMELINE_DATA.length; i++) {
            const milestoneStart = new Date(TIMELINE_DATA[i].startDate);
            milestoneStart.setHours(0, 0, 0, 0);
            const milestoneEnd = new Date(TIMELINE_DATA[i].endDate);
            milestoneEnd.setHours(23, 59, 59, 999);

            if (today >= milestoneStart && today <= milestoneEnd) {
                // We're currently in this milestone
                milestoneIndex = i;
                const totalDuration = milestoneEnd.getTime() - milestoneStart.getTime();
                const elapsed = today.getTime() - milestoneStart.getTime();

                if (totalDuration > 0) {
                    milestoneProgress = elapsed / totalDuration;
                } else {
                    milestoneProgress = 1;
                }
                break;
            } else if (today > milestoneEnd) {
                // This milestone has passed - keep track of it
                milestoneIndex = i;
                milestoneProgress = 1; // Completed
            } else {
                // Haven't reached this milestone yet - stay at the last completed one
                break;
            }
        }

        // If all milestones are completed
        if (milestoneIndex >= TIMELINE_DATA.length - 1 && milestoneProgress === 1) {
            milestoneIndex = TIMELINE_DATA.length - 1;
        }

        setCurrentMilestone(milestoneIndex);

        // Calculate actual pixel-based progress
        const calculateProgress = () => {
            if (!progressBarRef.current || checkpointsRef.current.length === 0) return;

            const barRect = progressBarRef.current.getBoundingClientRect();
            const barLeft = barRect.left;
            const barWidth = barRect.width;

            if (barWidth === 0) return;

            // Get current checkpoint position
            const currentCheckpoint = checkpointsRef.current[milestoneIndex];

            if (!currentCheckpoint) {
                setProgress(0);
                return;
            }

            const currentRect = currentCheckpoint.getBoundingClientRect();
            const currentCenter = currentRect.left + currentRect.width / 2 - barLeft;

            if (milestoneProgress === 1) {
                // Stay at this checkpoint
                const progressPercent = (currentCenter / barWidth) * 100;
                setProgress(Math.min(progressPercent, 100));
            } else {
                // In progress - move towards next checkpoint
                const nextCheckpoint = checkpointsRef.current[milestoneIndex + 1];

                if (!nextCheckpoint) {
                    const progressPercent = (currentCenter / barWidth) * 100;
                    setProgress(Math.min(progressPercent, 100));
                    return;
                }

                const nextRect = nextCheckpoint.getBoundingClientRect();
                const nextCenter = nextRect.left + nextRect.width / 2 - barLeft;

                const distance = nextCenter - currentCenter;
                const progressPixels = currentCenter + (distance * milestoneProgress);
                const progressPercent = (progressPixels / barWidth) * 100;

                setProgress(Math.min(progressPercent, 100));
            }
        };

        // Wait for layout to settle
        const timer = setTimeout(calculateProgress, 100);
        window.addEventListener('resize', calculateProgress);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', calculateProgress);
        };
    }, [currentMilestone]);

    return (
        <div className='w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32'>
            <div className="w-full max-w-7xl flex flex-col gap-8 md:gap-12">
                {/* Header */}
                <div className="flex flex-row items-center justify-center gap-4 md:gap-8 lg:gap-10">
                    <svg
                        className="hidden sm:block w-32 md:w-64 lg:w-96 xl:w-[500px]"
                        height="5"
                        viewBox="0 0 500 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M500 2.5H0" stroke="url(#paint0_linear_590_593)" strokeWidth="5"/>
                        <defs>
                            <linearGradient id="paint0_linear_590_593" x1="0" y1="3" x2="500" y2="3" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" stopOpacity="0"/>
                                <stop offset="1" stopColor="white"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white whitespace-nowrap">
                        Timeline
                    </h2>

                    <svg
                        className="hidden sm:block w-32 md:w-64 lg:w-96 xl:w-[500px]"
                        height="5"
                        viewBox="0 0 500 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M500 2.5H0" stroke="url(#paint0_linear_590_594)" strokeWidth="5"/>
                        <defs>
                            <linearGradient id="paint0_linear_590_594" x1="0" y1="3" x2="500" y2="3" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white"/>
                                <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:flex flex-row justify-center gap-6 xl:gap-12 relative mt-10">
                    {/* Progress Bar */}
                    <div
                        ref={progressBarRef}
                        className="absolute bottom-5 left-0 right-0 h-2.5 bg-black/50 rounded-full shadow-xl overflow-hidden"
                    >
                        <motion.div
                            className="h-full bg-theme-secondary"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </div>

                    {TIMELINE_DATA.map((item, index) => {
                        // Check if this milestone is completed
                        const milestoneEnd = new Date(item.endDate);
                        milestoneEnd.setHours(23, 59, 59, 999);
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        const isCompleted = today > milestoneEnd;
                        const isCurrent = index === currentMilestone && !isCompleted;

                        return (
                            <motion.div
                                key={item.id}
                                className="flex flex-col gap-6 items-center z-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className={`text-xl xl:text-2xl text-white text-center font-bold w-48 xl:w-60 py-6 xl:py-8 rounded-3xl backdrop-blur-sm bg-gradient-to-b from-white/5 to-white/2 border border-white/20 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_8px_10px_-6px_rgba(0,0,0,0.1),_inset_0_1px_0_0_rgba(255,255,255,0.5),_inset_0_0_20px_0_rgba(255,255,255,0.05)] transition-all duration-300                                }`}>
                                    {item.title}
                                </div>
                                <div className="text-center text-white text-base xl:text-lg font-semibold px-2">
                                    {item.dateDisplay}
                                </div>
                                <div
                                    ref={(el) => { checkpointsRef.current[index] = el; }}
                                    className={`border-4 w-12 h-12 xl:w-14 xl:h-14 rounded-full mt-4 flex items-center justify-center shadow-lg transition-all duration-500 ${
                                        isCompleted
                                            ? 'border-red-700 bg-red-500'
                                            : isCurrent
                                                ? 'bg-red-500 scale-110'
                                                : 'border-gray-600 bg-gray-700'
                                    }`}
                                >
                                    {isCompleted ? (
                                        // Checkmark for completed
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    ) : (
                                        // X for current and upcoming
                                        <svg width="28" height="28" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.143 42.4262C12.1903 40.4736 12.1903 37.3078 14.143 35.3552L35.26 14.2381C37.2396 12.2586 40.4512 12.3484 42.4307 14.328C44.3045 16.2017 44.3942 19.246 42.5205 21.1198L21.214 42.4262C19.2614 44.3789 16.0956 44.3789 14.143 42.4262Z" fill="white"/>
                                            <path d="M42.4262 42.4265C40.4735 44.3791 37.3077 44.3791 35.3551 42.4265L14.238 21.3094C12.2585 19.3299 12.3483 16.1182 14.3279 14.1387C16.2016 12.2649 19.2459 12.1752 21.1197 14.0489L42.4262 35.3554C44.3788 37.308 44.3788 40.4738 42.4262 42.4265Z" fill="white"/>
                                        </svg>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile/Tablet Timeline - Vertical */}
                <div className="lg:hidden flex flex-col gap-8 mt-8 relative px-4">
                    {/* Vertical Progress Line */}
                    <div className="absolute left-9.5 -top-6 w-1 h-full bg-black/50 rounded-full overflow-hidden">
                        <motion.div
                            className="w-full bg-red-500"
                            initial={{ height: 0 }}
                            animate={{ height: `${progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </div>

                    {TIMELINE_DATA.map((item, index) => {
                        // Check if this milestone is completed
                        const milestoneEnd = new Date(item.endDate);
                        milestoneEnd.setHours(23, 59, 59, 999);
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        const isCompleted = today > milestoneEnd;
                        const isCurrent = index === currentMilestone && !isCompleted;

                        return (
                            <motion.div
                                key={item.id}
                                className="flex flex-row gap-6 items-start z-10"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                {/* Checkpoint */}
                                <div className={`border-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 transition-all duration-500 ${
                                    isCompleted
                                        ? 'border-red-700 bg-red-500'
                                        : isCurrent
                                            ? 'border-red-700 bg-red-500 scale-110'
                                            : 'border-gray-600 bg-gray-700'
                                }`}>
                                    {isCompleted ? (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    ) : (
                                        <svg width="24" height="24" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.143 42.4262C12.1903 40.4736 12.1903 37.3078 14.143 35.3552L35.26 14.2381C37.2396 12.2586 40.4512 12.3484 42.4307 14.328C44.3045 16.2017 44.3942 19.246 42.5205 21.1198L21.214 42.4262C19.2614 44.3789 16.0956 44.3789 14.143 42.4262Z" fill="white"/>
                                            <path d="M42.4262 42.4265C40.4735 44.3791 37.3077 44.3791 35.3551 42.4265L14.238 21.3094C12.2585 19.3299 12.3483 16.1182 14.3279 14.1387C16.2016 12.2649 19.2459 12.1752 21.1197 14.0489L42.4262 35.3554C44.3788 37.308 44.3788 40.4738 42.4262 42.4265Z" fill="white"/>
                                        </svg>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className={`text-xl sm:text-2xl text-white font-bold py-4 px-6 rounded-2xl backdrop-blur-sm bg-gradient-to-b from-white/5 to-white/2 border border-white/20 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_8px_10px_-6px_rgba(0,0,0,0.1),_inset_0_1px_0_0_rgba(255,255,255,0.5),_inset_0_0_20px_0_rgba(255,255,255,0.05)] transition-all duration-300 ${
                                        (isCompleted || isCurrent) ? 'ring-2 ring-red-500/50' : ''
                                    }`}>
                                        {item.title}
                                    </div>
                                    <div className="text-white text-base sm:text-lg font-semibold ml-2">
                                        {item.dateDisplay}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default TimelineSection;