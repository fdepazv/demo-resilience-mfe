import React from "react";

import { ErrorBoundary } from "react-error-boundary";

export interface MfeErrorBoundaryProps {
 children: React.ReactNode;
}

const MfeErrorBoundary: React.FC<MfeErrorBoundaryProps> = ({ children }) => {
 // Fallback content to display
 const fallbackContent = ({ error }: { error: Error }) => {
  console.warn("ErrorBoundary fallback", error);
  return (
   <div
    style={{
     border: "1px solid red",
     padding: "10px",
     backgroundColor: "#ffe6e6",
    }}
   >
    <strong>Error:</strong> We cannot load the people right now. Try again later. Or go to the <a href="https://www.telus.com">home page</a>.
   </div>
  );
 };

 return (
  <ErrorBoundary fallbackRender={fallbackContent}>{children}</ErrorBoundary>
 );
};

export default MfeErrorBoundary;
