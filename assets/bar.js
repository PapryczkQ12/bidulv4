var params = new URLSearchParams(window.location.search);

function sendTo(page) {
    const pages = {
        home: 'home.html',
        documents: 'documents.html',
        services: 'services.html',
        qr: 'qr.html',
        more: 'more.html',
    };

    if (pages[page]) {
        window.location.href = pages[page];
    } else {
        console.error(`Page "${page}" not found.`);
    }
}

document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        sendTo(element.getAttribute("send"))
    })
})

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/windows phone/i.test(userAgent)) {
        return 1;
    }
  
    if (/android/i.test(userAgent)) {
        return 2;
    }
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 3;
    }
  
    return 4;
  }
  
  if (getMobileOperatingSystem() == 2){
      document.querySelector(".bottom_bar").style.height = "70px"
}