import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  // the default value of the currenPath is the path that we are at in our address bar
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // We are watching for a popstate event. We are listening for when the user clicks
  // the forward or back buttons

  // When they do, we need to update our currentPath piece of state.
  // We are updating this slice of state to cause our component to re-render.

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler)
    }
  }, []);

  const navigate = (to) => {
    // to === '/about'
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{navigate, currentPath}}>
      {/* {currentPath} */}
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
