import { useState } from "react";

function Ex2() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <>
      <div>
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          <div>Data Loaded Successfully !</div>
        )}
      </div>
    </>
  );
}

export default Ex2;
