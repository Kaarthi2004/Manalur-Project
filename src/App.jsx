import { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        // Render the loading symbol while isLoading is true
        <div className="flex justify-center items-center h-screen">
            <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        // Render the Home component once isLoading becomes false
        <Home />
      )}
    </div>
  );
}

export default App;
