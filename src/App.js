import React, { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // 영화 데이터 로딩!
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
};

export default App;
