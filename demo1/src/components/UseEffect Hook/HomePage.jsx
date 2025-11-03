import { useEffect } from "react";

function HomePage() {
    useEffect(()=>{
        console.log('home comp mounted....')
        
        return ()=>{            
            console.log('home comp unmounted....')
        }
    })
  return (
    <>
      <div>This is Home Page</div>
    </>
  );
}

export default HomePage;
