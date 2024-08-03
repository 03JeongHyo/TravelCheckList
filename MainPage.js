document.addEventListener('DOMContentLoaded', function() {
    const message = localStorage.getItem('loginSuccess');
    if (message === "true") {
        alert("로그인 되었습니다" );
        localStorage.removeItem('loginSuccess'); 
    }
});
//section2 효과
document.addEventListener('scroll', function() {
    const section2Box = document.querySelector('.section2-box');
    const boxTop = section2Box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) { 
        section2Box.classList.add('visible');
    } else {
        section2Box.classList.remove('visible');
    }
});

//section3 효과
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.title-box');
  

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 }); 
  

    elements.forEach(element => {
      observer.observe(element);
    });
  });