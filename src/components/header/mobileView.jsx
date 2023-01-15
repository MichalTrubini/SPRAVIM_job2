import SiteLogo from "./siteLogo";
import hamburger from "../../assets/menu-3-line.svg";
import styles from "./mobileView.module.css";
import { useState } from "react";
import Menu from "./menu";

const MobileView = () => {

  const [isShown, setIsShown] = useState(false)

  return (
    <>
      <div className={`${styles.mobileContainer} sitePadding`}>
        <SiteLogo />
        <img src={hamburger} alt="mobile" onClick={()=> {setIsShown(true)}}/>
      </div>
      {isShown ? <Menu onClick={()=> {setIsShown(false)}}/> : null}
    </>
  );
};

export default MobileView;
