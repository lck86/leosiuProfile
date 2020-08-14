import '../styles/globals.css'
import './Snow.scss'
import './AboutMe.css'
import './Card.scss'
import './app.scss'
import './Header.css'
import './Contact.scss'
function MyApp({ Component, pageProps }) {
  if (process.browser) {
    const inViewport = (el, partiallyVisible = false) => {
      const { top, left, bottom, right } = el.getBoundingClientRect();
      const { innerHeight, innerWidth } = window;
      return partiallyVisible
        ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left >= 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    };
    function lazyLoading() {

      const { top } = document.body.getBoundingClientRect()
      if (top !== 0) {
        document.getElementById('navbar').classList.add('bg-header')
      } else {
        document.getElementById('navbar').classList.remove('bg-header')
      }
      const boxs = document.querySelectorAll('.fullHeight')
      let opcFalseBoxs = document.querySelectorAll(".opcFalse");
      //content
      Array.from(opcFalseBoxs).map(box => {
        if (!inViewport(box, true)) return;
        if (box && box.classList.contains("opcFalse")) {
          box.classList.add("opcTrue")
          box.classList.remove("opcFalse")
        }
      })
      //header
      Array.from(boxs).map(box => {
        if (!inViewport(box, true)) return;
        let delay = 0.3;
        let revealText = box.querySelector(".revealHeader");
        if (!revealText) return
        if (revealText.classList.contains("revealed")) return
        let letters = revealText.textContent.split("");
        revealText.textContent = "";
        let middle = letters.filter(e => e !== " ").length / 2;
        letters.forEach((letter, i) => {
          let span = document.createElement("span");
          if (letter.className === "fadeTitle") return
          span.className = "fadeTitle"
          span.textContent = letter;
          span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.06}s`;
          revealText.append(span);
        });
        revealText.classList.add("revealed")
      })


    }

    document.addEventListener('scroll', lazyLoading)
  }
  return <Component {...pageProps} />
}

export default MyApp
