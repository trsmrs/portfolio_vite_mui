import { Box } from "@mui/material"

export const AnimatedBackground = () => {
  // Gera 5 trajetórias diferentes para estrelas cadentes
    const shootingStarPaths = [
        { id: 'shootingStarPath1', d: 'M1200 50 Q 800 150 400 250 Q 100 350 -100 450', delay: 0 },
        { id: 'shootingStarPath2', d: 'M1300 100 Q 900 200 300 400 Q 50 600 -200 700', delay: 2 },
        { id: 'shootingStarPath3', d: 'M1400 30 Q 1000 80 600 180 Q 200 280 -100 380', delay: 4 },
        { id: 'shootingStarPath4', d: 'M1100 200 Q 700 300 200 500 Q -50 650 -300 750', delay: 1 },
        { id: 'shootingStarPath5', d: 'M1250 80 Q 850 180 450 280 Q 150 380 -150 480', delay: 3 }
    ];

    return (
        <Box sx={{ overflow: 'hidden', position: 'relative' }}>
            <svg
                className="StarrySky__svg"
                viewBox="0 0 1200 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Planeta Saturno estilizado */}
                <g transform="translate(800, 150) scale(0.9)">
                    {/* Planeta principal */}
                    <circle cx="0" cy="0" r="60" fill="#C2A76F" opacity="1">
                        <animate 
                            attributeName="opacity" 
                            values="2.8;2.85;2.8" 
                            dur="20s" 
                            repeatCount="indefinite" 
                        />
                    </circle>
                    
                    {/* Anéis de Saturno */}
                    <ellipse cx="0" cy="0" rx="90" ry="30" fill="none" stroke="#C2A76F" strokeWidth="6" opacity="0.7" transform="rotate(-20 0 0)">
                        <animate 
                            attributeName="opacity" 
                            values="0.7;0.75;0.7" 
                            dur="15s" 
                            repeatCount="indefinite" 
                        />
                    </ellipse>
                    <ellipse cx="0" cy="0" rx="80" ry="30" fill="none" stroke="#C2A76F" strokeWidth="6" opacity="0.8" transform="rotate(-20 0 0)">
                        <animate 
                            attributeName="opacity" 
                            values="1.8;0.85;1.8" 
                            dur="18s" 
                            repeatCount="indefinite" 
                        />
                    </ellipse>
                    
                    {/* Detalhes na superfície */}
                    <ellipse cx="-10" cy="-10" rx="15" ry="8" fill="#C9B89A" opacity="0.6" transform="rotate(30 -15 -10)" />
                    <ellipse cx="20" cy="15" rx="10" ry="5" fill="#C9B89A" opacity="0.5" transform="rotate(-10 20 15)" />
                    
                    {/* Brilho sutil */}
                    <circle cx="-30" cy="-30" r="10" fill="white" opacity="0.1" />
                </g>

                {/* Estrelas estáticas */}
                {Array.from({ length: 150 }).map((_, i) => {
                    const x = Math.random() * 1200;
                    const y = Math.random() * 800;
                    const size = Math.random() * 0.5 + 0.2;
                    const opacity = Math.random() * 0.7 + 0.3;
                    const delay = Math.random() * 5;
                    
                    return (
                        <circle
                            key={`star-${i}`}
                            cx={x}
                            cy={y}
                            r={size}
                            fill="white"
                            opacity={opacity}
                        >
                            <animate 
                                attributeName="r" 
                                values={`${size};${size*1.5};${size}`} 
                                dur={`${Math.random() * 3 + 2}s`} 
                                begin={`${delay}s`}
                                repeatCount="indefinite"
                            />
                            <animate 
                                attributeName="opacity" 
                                values={`${opacity};${opacity*0.5};${opacity}`} 
                                dur={`${Math.random() * 4 + 3}s`} 
                                begin={`${delay + 1}s`}
                                repeatCount="indefinite"
                            />
                        </circle>
                    );
                })}
                
                {/* Estrelas cadentes */}
                {shootingStarPaths.map((path, index) => (
                    <g key={`shooting-star-${index}`}>
                        <path
                            id={path.id}
                            d={path.d}
                            stroke="transparent"
                        />
                        
                        <g transform="translate(-10, -10)">
                            <circle
                                cx="0"
                                cy="0"
                                r="2"
                                fill="white"
                            >
                                <animateMotion
                                    dur="2s"
                                    begin={`${path.delay}s`}
                                    repeatCount="indefinite"
                                    rotate="auto"
                                >
                                    <mpath xlinkHref={`#${path.id}`} />
                                </animateMotion>
                                <animate
                                    attributeName="r"
                                    values="2;3;1;0"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="fill"
                                    values="white;cyan;white"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            <path
                                d="M0 0 L15 0"
                                stroke="url(#shootingStarGradient)"
                                strokeWidth="1.5"
                                opacity="0.8"
                            >
                                <animateMotion
                                    dur="2s"
                                    begin={`${path.delay}s`}
                                    repeatCount="indefinite"
                                    rotate="auto"
                                >
                                    <mpath xlinkHref={`#${path.id}`} />
                                </animateMotion>
                                <animate
                                    attributeName="opacity"
                                    values="0.8;0.9;0.3;0"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="stroke"
                                    values="white;cyan;white"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                            </path>
                        </g>
                    </g>
                ))}
                
                {/* Grandes estrelas cintilantes */}
                {[50, 150, 300, 500, 700, 900, 1100].map((x, i) => {
                    const y = 100 + (i % 3) * 250;
                    const delay = i * 0.5;
                    
                    return (
                        <g key={`big-star-${i}`}>
                            <circle
                                cx={x}
                                cy={y}
                                r="1.2"
                                fill="white"
                                opacity="0.9"
                            >
                                <animate 
                                    attributeName="r" 
                                    values="1.2;2;1.2" 
                                    dur="4s" 
                                    begin={`${delay}s`}
                                    repeatCount="indefinite"
                                />
                                <animate 
                                    attributeName="opacity" 
                                    values="0.9;0.6;0.9" 
                                    dur="5s" 
                                    begin={`${delay + 1}s`}
                                    repeatCount="indefinite"
                                />
                            </circle>
                            {[0, 45, 90, 135].map((rot, j) => (
                                <line
                                    key={`ray-${i}-${j}`}
                                    x1={x}
                                    y1={y}
                                    x2={x}
                                    y2={y - 3}
                                    stroke="white"
                                    strokeWidth="0.6"
                                    opacity="0.7"
                                    transform={`rotate(${rot} ${x} ${y})`}
                                >
                                    <animate 
                                        attributeName="opacity" 
                                        values="0.7;0.9;0.5;0.7" 
                                        dur="3s" 
                                        begin={`${delay + j*0.3}s`}
                                        repeatCount="indefinite"
                                    />
                                    <animate 
                                        attributeName="y2" 
                                        values={`${y-3};${y-5};${y-3}`} 
                                        dur="4s" 
                                        begin={`${delay + j*0.2}s`}
                                        repeatCount="indefinite"
                                    />
                                </line>
                            ))}
                        </g>
                    );
                })}
                
                <defs>
                    <linearGradient id="shootingStarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="cyan" stopOpacity="0.5" />
                    </linearGradient>
                    
                    <filter id="planetGlow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
            </svg>
        </Box>
    )
}