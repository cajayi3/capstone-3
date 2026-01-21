import React, { type ReactNode } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state : ErrorBoundaryState = { hasError: false };
    
    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
        return <h3 className="text-capitalize text-danger fst-italic" >401 - Unauthorized: Please Sign in to access this page!</h3>
    }
    return this.props.children;

    }
}

export default ErrorBoundary;