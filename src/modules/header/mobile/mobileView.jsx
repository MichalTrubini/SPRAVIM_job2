import hamburger from "../../../assets/menu-3-line.svg";
import styles from "./mobileView.module.css";
import { useState } from "react";
import Account from "../components/account";
import MobileMenu from "./mobileMenu";
import SiteLogo from "../components/siteLogo";

const MobileView = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className={`${styles.mobileContainer} sitePadding`}>
        <SiteLogo />
        <img
          src={hamburger}
          alt="mobile"
          onClick={() => {
            setIsShown(true);
          }}
        />
      </div>
      {isShown ? (
        <>
          <MobileMenu
            onClick={() => {
              setIsShown(false);
            }}
          />
          <Account />
        </>
      ) : null}
    </>
  );
};

export default MobileView;
