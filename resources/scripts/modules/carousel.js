export default function initCarousel(carousel, next, prev) {

  if(carousel && next && prev){
    let posicaoAtual = 0;
    const slides = document.querySelectorAll(carousel);
    const totalSlides = slides.length;

    const atualizarPosicao = () => {
      for (let slide of slides) {
        slide.classList.remove("carousel_visible");
        slide.classList.add("carousel_item_hidden");
      }

      slides[posicaoAtual].classList.add("carousel_visible");
    };

    const proximoSlide = () => {
      if (posicaoAtual === totalSlides - 1) {
        posicaoAtual = 0;
      } else {
        posicaoAtual++;
      }
      atualizarPosicao();
    };

    const SlideAnterior = () => {
      if (posicaoAtual === 0) {
        posicaoAtual = totalSlides - 1;
      } else {
        posicaoAtual--;
      }
      atualizarPosicao();
    };

    document.getElementById(next).addEventListener("click", () => {
      proximoSlide();
    });
    document.getElementById(prev).addEventListener("click", () => {
      SlideAnterior();
    });
  }

}
 
 