import styles from "./highlights.module.css";
import zdravieImage from "../../../assets/zdravie@2x.webp";
import sportImage from "../../../assets/sport@2x.webp";
import lifestyleImage from "../../../assets/lifestyle@2x.webp";
import { useEffect, useState } from "react";

const Highlights = () => {
  const [tresholdImageOne, setThresholdImageOne] = useState(false);
  const [tresholdImageTwo, setThresholdImageTwo] = useState(false);

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

  useEffect(() => {
    const imageOne = document.getElementById("imageContainerOne");
    const imageTwo = document.getElementById("imageContainerTwo");

    //set header height

    const headerHeight = 74;
   
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.type === "reload") {
          console.log(`${entry.name} was reloaded!`);
          console.log(entry);
        }
      });
    });
    
    observer.observe({ type: "navigation", buffered: true });

    if (window.performance) {
      console.info("window.performance works fine on this browser");
    }
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      console.info( "This page is reloaded" );
    } else {
      console.info( "This page is not reloaded");
    }

    //get threshold of elements

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    function handleScroll() {
      const imageOneTop =
        imageOne.getBoundingClientRect().top + imageOne.getBoundingClientRect().height / 2 - headerHeight;
      const imageTwoTop = imageTwo.getBoundingClientRect().top +headerHeight;

      if (imageOneTop < 0) setThresholdImageOne(true);
      else setThresholdImageOne(false);
      if (imageTwoTop < 0) setThresholdImageTwo(true);
      else setThresholdImageTwo(false);
    }
  }, []);

  useEffect(() => {
    //logic that controls animation in the highlights section on scroll

    const sliderElements = document.querySelectorAll('[data-act="animate"]');

    if (tresholdImageOne === false) sliderElements[0].classList.add("isActive");
    else {
      sliderElements[0].classList.remove("isActive");
    }

    if (sliderElements[1].previousElementSibling.classList.contains("isActive"))
      sliderElements[1].classList.remove("isActive");
    else if (tresholdImageTwo === false) sliderElements[1].classList.add("isActive");
    else sliderElements[1].classList.remove("isActive");

    if (tresholdImageTwo === true) sliderElements[2].classList.add("isActive");
    else sliderElements[2].classList.remove("isActive");
  }, [tresholdImageOne, tresholdImageTwo]);

  const paragraphOne = (
    <>
      <h3 className={styles.textHeading}>šport</h3>
      <p className={styles.text}>
        Veľmi presne monitorujme polohu tela športovca, jeho fyziologické hodnoty a celkový stav. Tieto dáta
        transformujeme na informácie, ktoré pomáhajú športovcom zlepšovať ich výkon a techniku.
      </p>
    </>
  );

  const paragraphTwo = (
    <>
      <h3 className={styles.textHeading}>lifestyle</h3>
      <p className={styles.text}>
        Či už pracujete dlhú dobu za počítačom, alebo len chcete vedieť o sebe viac pre zlepšenie zdravia, tak Skinekt
        vám v tomto smere pomáha získavaním dát a ich spracovaním a vyhodnocovaním.
      </p>
    </>
  );

  const paragraphThree = (
    <>
      <h3 className={styles.textHeading}>zdravie</h3>
      <p className={styles.text}>
        Práve v tejto oblasti má Skinekt obrovské využitie. Lekár vie dokonale vyhodocovať dáta o pacientovi aj na veľkú
        vzdialenosť, viete byť informovaný o stave seniorov a pod.
      </p>
    </>
  );

  
  return (
    <section id="highlightsID" className={styles.section}>
      <div className={`${styles.sectionWrapper} sitePadding`}>
        <div className={styles.leftWrapper}>
          <div className={styles.description}>
            <div>
              <h2 className={styles.heading}>Pre koho je Skinekt prínosom</h2>
              <div
                className={`${styles.link} ${styles.linkDesktop}`}
                onClick={() => {
                  scrollHandler("footerID");
                }}
              >
                <p className={styles.linkText}>Zaujíma ma to</p>
              </div>
            </div>
            <div className={styles.animatedContent}>
              <div className={`${styles.textContainer} ${styles.textContainerDT}`} data-act="animate">
                {paragraphOne}
              </div>
              <div className={`${styles.textContainer} ${styles.textContainerDT}`} data-act="animate">
                {paragraphTwo}
              </div>
              <div className={`${styles.textContainer} ${styles.textContainerDT}`} data-act="animate">
                {paragraphThree}
              </div>
            </div>
          </div>
        </div>
        <div id="scrollID" className={styles.highlights}>
          <div className={styles.container}>
            <div className={styles.headerMobile}>
              <h2 className={styles.heading}>Pre koho je Skinekt prínosom</h2>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.highlight}>
                <div id="imageContainerOne" className={styles.imageContainer}>
                  <img src={sportImage} alt="sport" />
                </div>
                <div className={styles.textContainer}>{paragraphOne}</div>
              </div>
              <div className={styles.highlight}>
                <div id="imageContainerTwo" className={styles.imageContainer}>
                  <img src={lifestyleImage} alt="lifestyle" />
                </div>
                <div className={styles.textContainer}>{paragraphTwo}</div>
              </div>
              <div className={styles.highlight}>
                <div id="imageContainerThree" className={styles.imageContainer}>
                  <img src={zdravieImage} alt="zdravie" />
                </div>
                <div className={styles.textContainer}>{paragraphThree}</div>
              </div>
            </div>

            <div
              className={`${styles.link} ${styles.linkMobile}`}
              onClick={() => {
                scrollHandler("footerID");
              }}
            >
              <p className={styles.linkText}>Zaujíma ma to</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
