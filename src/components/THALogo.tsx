export const THALogo = ({ size = "default" }: { size?: "default" | "small" }) => {
    const isSmall = size === "small";
    const w = isSmall ? 120 : 160;
    const h = isSmall ? 48 : 64;

    return (
        <svg viewBox="0 0 200 80" width={w} height={h} xmlns="http://www.w3.org/2000/svg" aria-label="THA Heating, Air & Plumbing">
            {/* Blue oval */}
            <ellipse cx="80" cy="32" rx="68" ry="30" fill="#3B8AC4" />

            {/* HVAC fan icon - simplified */}
            <g transform="translate(28, 16)" fill="white">
                {/* Center hub */}
                <circle cx="12" cy="16" r="3" />
                {/* Blades */}
                <path d="M12 13 C12 6, 6 4, 4 8 C2 12, 8 13, 12 13Z" />
                <path d="M15 16 C22 16, 24 10, 20 8 C16 6, 15 12, 15 16Z" />
                <path d="M12 19 C12 26, 18 28, 20 24 C22 20, 16 19, 12 19Z" />
                <path d="M9 16 C2 16, 0 22, 4 24 C8 26, 9 20, 9 16Z" />
            </g>

            {/* THA text */}
            <text x="82" y="40" textAnchor="middle" fill="white" fontFamily="'Space Grotesk', Arial, sans-serif" fontWeight="800" fontSize="32" letterSpacing="-1">
                THA
            </text>

            {/* Subtitle */}
            <text x="100" y="68" textAnchor="middle" fill="#3B8AC4" fontFamily="'Space Grotesk', Arial, sans-serif" fontWeight="600" fontSize="10" letterSpacing="1">
                HEATING, AIR & PLUMBING
            </text>
        </svg>
    );
};
