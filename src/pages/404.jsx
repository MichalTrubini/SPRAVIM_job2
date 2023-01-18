import { useState } from "react";
import { useEffect } from "react";
import Header from "../modules/header/header";
import NotFoundError from "../modules/main/pageNotFound/notFoundError";

const NotFound = () => {

  const [elHeight, setElHeight] = useState(0)

  useEffect(()=>{
    const siteHeader = document.getElementById('siteMainNav');
    const siteHeaderHeight = siteHeader.getBoundingClientRect().height;
    setElHeight(siteHeaderHeight);
  },[elHeight])

  return (
    <>
      <Header />
      <main style = {{paddingTop:`${elHeight}px` }} className='main'>
        <NotFoundError />
      </main>
    </>
  );
};

export default NotFound;
