import { useEffect, useState } from "react";
import Screen from "./components/Screen/Screen";
import useNavigation from "./hooks/use-navigation";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const {currentPath} = useNavigation();

  useEffect(() => {
    setIsLoading(true)
    let loadingInterval;
    loadingInterval = setInterval(() => {
      setIsLoading(false);
    }, 800);
    return () =>  {
      clearInterval(loadingInterval);
    }
  }, [currentPath]);

  return (
    <>
      {/* <div>{window.location.pathname}</div> */}
      {/* <div>{currentPath}</div> */}
      {isLoading ? <div className="static"></div> : <Screen />}
      {/* <Screen /> */}
    </>
  );
}

export default App;
