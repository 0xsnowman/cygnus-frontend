import React from 'react';

interface IContainerProps {
    children: JSX.Element | JSX.Element[],
    className?: string;
}

const Container:React.FC<IContainerProps> = ({children, className}) => {
    return <div className={["atom-container", className].join(" ")}>{children}</div>
}

export default Container;