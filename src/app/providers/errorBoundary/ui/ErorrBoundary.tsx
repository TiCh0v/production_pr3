import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { withTranslation } from "react-i18next";
import { Error } from "widgets/Error";


interface ErrorBiundaryProps {
    children?: ReactNode
}

interface ErrorBiundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component <ErrorBiundaryProps, ErrorBiundaryState> {
    constructor(props: ErrorBiundaryProps) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo){
        console.log(error, errorInfo)
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        if (this.state.hasError) {
            return <Suspense fallback={'loading'}><Error/></Suspense>
        }
        
        return this.props.children
    }
}

export default ErrorBoundary;