import type { ReactNode } from "react"
import { StyledButton } from "../../styles/heroStyle/styledHero"

interface ButtonProps {
    children: ReactNode,
    onClick?: () => void;
}


const Button: React.FC<ButtonProps> = ({ children, onClick }) => {

    return (
        <>
            <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
        </>
    )

}

export default Button