const Pressure = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="32" cy="32" r="30" stroke="currentColor" fill="none" />
            <path d="M32 10 L32 34" stroke="currentColor" />
            <line x1="32" y1="34" x2="42" y2="44" stroke="currentColor" />
            <circle cx="32" cy="34" r="2" stroke="currentColor" fill="black" />
            <path d="M24 20 L40 20" stroke="currentColor" />
            <circle cx="32" cy="20" r="4" stroke="currentColor" fill="white" />
            <rect x="28" y="44" width="8" height="10" stroke="currentColor" fill="none" />
            <line x1="30" y1="54" x2="30" y2="58" stroke="currentColor" />
            <line x1="34" y1="54" x2="34" y2="58" stroke="currentColor" />
        </svg>
    );
};

export default Pressure;
