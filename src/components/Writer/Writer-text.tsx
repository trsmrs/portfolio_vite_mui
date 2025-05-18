import { Typography, type TypographyProps } from "@mui/material";

import { useEffect, useState } from "react";

interface WriterProps {
    text: string;
    delay: number;
    variant?: TypographyProps['variant'];
    color?: TypographyProps['color'];
}

export default function Writer({ text, delay, variant, color }: WriterProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0); // reinicia se o texto mudar
    }, [text]);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setIndex((prev) => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [index, delay, text]);

    return (
        <Typography variant={variant} color={color} textAlign="center" >
            {text.slice(0, index)}
        </Typography>
    );
};
