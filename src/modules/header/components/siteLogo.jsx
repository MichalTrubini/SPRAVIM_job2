import siteLogoIMG from "../../../assets/skinekt-logo-header.svg";

const SiteLogo = () => {
  const scrollHandler = (item) => {
    const element = document.getElementById(item);
    const siteMainNav = document.getElementById("siteMainNav");

    let headerOffset = siteMainNav.offsetHeight;
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    function windowScroll(item) {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    windowScroll();
  };

  return (
    <>
      <img
        src={siteLogoIMG}
        alt="skinext"
        onClick={() => {
          scrollHandler("heroID");
        }}
      />
    </>
  );
};

export default SiteLogo;
