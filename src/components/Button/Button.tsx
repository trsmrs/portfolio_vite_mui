import type { ReactNode } from "react"
import { StyledButton } from "../../styles/heroStyle/styledHero"

interface ButtonProps {
    children: ReactNode
}


const Button: React.FC<ButtonProps> = ({ children }) => {

    return (
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </>
    )

}

export default Button