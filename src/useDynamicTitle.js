import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      "/": "WildPursuit - Explore Adventures",
      "/auth/signin": "WildPursuit - Sign In",
      "/auth/signup": "WildPursuit - Sign Up",
      "/profile": "WildPursuit - Your Profile",
      "/profile/update": "WildPursuit - Update Profile",
      "/adventures": "WildPursuit - Adventures",
    };

    document.title =
      routeTitles[location.pathname] || "WildPursuit - Adventure Awaits";
  }, [location.pathname]);
};

export default useDynamicTitle;
