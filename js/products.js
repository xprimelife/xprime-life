const mostSoldProductsSlideContainer = document.querySelector('.slideshow-container')
const productsContainer = document.querySelector('#products-container')


function addProductsToTheMainPage() {
  for (let i = 0; i < productsDatabase.length; i++) {
    const product = document.createElement('div')
    product.classList.add('product-container')

    const link = document.createElement('div')
    link.addEventListener('click', () => {
      try {
        open().document.write(
          `<!DOCTYPE html>
          <html lang="en">
          
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href="./assets/fav-icon.png" type="image/x-icon" />
            <title>Product name | Xprime life</title>
            <style>
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          @font-face {
            font-family: "xprime";
            src: url(./assets/fonts/Cinzel_Decorative/CinzelDecorative-Black.ttf);
          }
          
          @font-face {
            font-family: "xprime-2";
            src: url(./assets/fonts/EB_Garamond/EBGaramond-VariableFont_wght.ttf);
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          ::-webkit-scrollbar {
            width: 5px;
          }
          
          ::-webkit-scrollbar-track {
            background-color: #f2f2f2;
            border-radius: 5px;
          }
          
          ::-webkit-scrollbar-thumb {
            background-color: #240029;
            border-radius: 5px;
          }
          
          body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #240029;
            color: #f2f2f2;
          }
          
          a {
            color: #ffffff;
            text-decoration: none;
          }
          
          header {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
          }
          
          header a {
            color: #ffffff;
            text-decoration: none;
            transition: 0.3s;
          }
          
          header a:hover {
            opacity: 0.7;
          }
          
          .logo {
            font-size: 24px;
            text-transform: capitalize;
            letter-spacing: 4px;
            position: relative;
            bottom: 2.5px;
          }
          
          .logo .x {
            font-size: 32px;
            position: relative;
            top: 5px;
          }
          
          .x {
            font-family: "xprime";
            color: #08e315;
          }
          
          .l {
            font-family: "xprime";
          }
          
          .i {
            font-family: 'Times New Roman', Times, serif;
            color: #08e315;
          }
          
          nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-family: system-ui, -apple-system, Helvetica, Arial, sans-serif;
            background: #642175;
            height: 8vh;
          }
          
          .nav-list {
            list-style: none;
            display: flex;
          }
          
          .nav-list li {
            letter-spacing: 3px;
            margin-left: 32px;
          }
          
          .nav-list li:nth-of-type(2) a {
            color: #08e315;
            font-weight: bold;
          }
          
          .mobile-menu {
            display: none;
            cursor: pointer;
          }
          
          .mobile-menu div {
            width: 32px;
            height: 2px;
            background: #fff;
            margin: 8px;
            transition: 0.3s;
          }
          
          .single-product-container {
            width: 1000px;
            height: 90vh;
            margin: 8vh auto 0 auto;
            padding: 50px;
            background-color: #642175;
            border-radius: 0 0 50% 50%;
            display: grid;
            gap: 20px;
            grid-template-areas: 
            "img pro-det pro-det"
            "btn btn btn";
          }
          
          #product-image {
            grid-area: img;
          }
          
          #product-image img {
            border: solid 2px #08e315;
            border-radius: 5px;
            width: 300px;
            height: 300px;
            object-fit: contain;
            background-color: #f2f2f2;
          }
          
          #product-details {
            grid-area: pro-det;
            height: 300px;
            background-color: #f2f2f2;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 20px;
            text-align: center;
            color: #642175;
            overflow-y: scroll;
          }
          
          #product-details h2 {
            margin-bottom: 10px;
          }
          
          #product-details p {
            margin-bottom: 5px;
            text-align: justify;
          }
          
          #buy-product-area {
            grid-area: btn;
            margin: auto;
          }
          
          #buy-product-area button {
            background-color: #12c52a;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            color: #f2f2f2;
            padding: 10px 0px;
            border: solid 2px rgba(0, 0, 0, 0);
            border-radius: 5px;
            font-size: 32px;
            font-weight: bold;
            text-shadow: 0 0 2px black;
            text-transform: uppercase;
            transition: ease 300ms;
            width: 400px;
            cursor: pointer;
          }
          
          
          #buy-product-area button:hover {
            background-color: #02a718;
            box-shadow: none;
            border: solid 2px #f2f2f2;
          }
          /*
            MOBILE MENU
          */
          @media (max-width: 950px) {
            body {
              overflow-x: hidden;
            }
          
            nav {
              justify-content: space-between;
              padding: 0px 10px 0px 20px;
            }
          
            .nav-list {
              position: absolute;
              top: 8vh;
              right: 0;
              width: 50vw;
              height: 92vh;
              background: #642175;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
              transform: translateX(100%);
              transition: transform 0.3s ease-in;
            }
          
            .nav-list li {
              margin-left: 0;
              opacity: 0;
            }
          
            .mobile-menu {
              display: block;
            }
          
            .nav-list.active {
              transform: translateX(0);
            }
          
            .single-product-container {
              width: 100%;
              padding: 10px;
              grid-template-areas: 
              "img"
              "btn"
              "pro-det"
            }
          
            #product-image {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          
            #product-image img {
              width: 200px;
              height: 200px;
            }
          
            #product-details {
              height: auto;
              font-size: 16px;
            }
          
            #buy-product-area {
              position:static;
            }
          
            #buy-product-area button {
              font-size: 20px;
              padding: 15px;
              width: 300px;
            }
          }
          
          @keyframes navLinkFade {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
          
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .mobile-menu.active .line1 {
            transform: rotate(-45deg) translate(-8px, 8px);
          }
          
          .mobile-menu.active .line2 {
            opacity: 0;
          }
          
          .mobile-menu.active .line3 {
            transform: rotate(45deg) translate(-5px, -7px);
          }
            </style>
          </head>
          
          <body>
            <header>
              <nav>
                <a class="logo" href="./index.html">
                  <span class="x">X</span>prime <span class="l">L</span><span class="i">i</span>fe
                </a>
                <div class="mobile-menu">
                  <div class="line1"></div>
                  <div class="line2"></div>
                  <div class="line3"></div>
                </div>
                <ul class="nav-list">
                  <li><a href="./index.html">In??cio</a></li>
                  
                  <li>
                    <a href="mailto:${email}" target="_blank">Contato</a>
                  </li>
                </ul>
              </nav>
            </header>
          
            <main>
              <div class="single-product-container">
                <div id="product-image">
                  <img id="image" src="./assets/" />
                </div>
          
                <div id="product-details">
                  <h2 id="product-name">Product name</h2>
                  <p id="product-description">product description</p>
                </div>
          
                <div id="buy-product-area">
                  <a id="buy-button">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
            </main>
          
            <script src="./js/mobile-navbar.js"></script>
            <script src="./js/general.js"></script>
            <script src="./js/database.js"></script>
            <script src="./js/products.js"></script>
            <script>
            try {
            function changeDataFromPage(element) {
              const productImage = document.querySelector('#image')
              productImage.setAttribute('src', './assets/' + element.img)
            
              const title = document.querySelector('title')
              title.innerHTML = element.name
            
              const productName = document.querySelector('#product-name')
              productName.innerHTML = element.name
            
              const productDetails = document.querySelector('#product-description')
              productDetails.innerHTML = element.description
            
              const buyButton = document.querySelector('#buy-button')
              buyButton.href = element.link
            }
            changeDataFromPage(productsDatabase[${i}])
          } catch {
            console.log('errorrrrhahahah')
          }
            </script>
          </body>
          
          </html>`
        )
      } catch {
        console.error("The product page could not be created")
      }
    })

    const subText = document.createElement('div')
    subText.classList.add('sub-text')
    subText.innerHTML = productsDatabase[i].name

    const productImage = document.createElement('img')
    productImage.src = `./assets/${productsDatabase[i].img}`

    link.appendChild(subText)
    link.appendChild(productImage)
    product.appendChild(link)
    productsContainer.appendChild(product)
  }
}




function addProductsToTheMostSoldSection() {
  for (let i = 0; i < mostSoldProductsDatabase.length; i++) {
    const product = document.createElement('div')
    product.className = 'mySlides fade'

    const link = document.createElement('div')
    link.addEventListener('click', () => {
      const opened = window.open("")
      try {
        opened.document.write(
          `<!DOCTYPE html>
          <html lang="en">
          
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href="./assets/fav-icon.png" type="image/x-icon" />
            <title>Product name | Xprime life</title>
            <style>
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          @font-face {
            font-family: "xprime";
            src: url(./assets/fonts/Cinzel_Decorative/CinzelDecorative-Black.ttf);
          }
          
          @font-face {
            font-family: "xprime-2";
            src: url(./assets/fonts/EB_Garamond/EBGaramond-VariableFont_wght.ttf);
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          ::-webkit-scrollbar {
            width: 4px;
          }
          
          ::-webkit-scrollbar-track {
            background-color: #642175;
          }
          
          ::-webkit-scrollbar-thumb {
            background-color: #240029;
          }
          
          body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #240029;
            color: #f2f2f2;
          }
          
          a {
            color: #ffffff;
            text-decoration: none;
          }
          
          header {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
          }
          
          header a {
            color: #ffffff;
            text-decoration: none;
            transition: 0.3s;
          }
          
          header a:hover {
            opacity: 0.7;
          }
          
          .logo {
            font-size: 24px;
            text-transform: capitalize;
            letter-spacing: 4px;
            position: relative;
            bottom: 2.5px;
          }
          
          .logo .x {
            font-size: 32px;
            position: relative;
            top: 5px;
          }
          
          .x {
            font-family: "xprime";
            color: #08e315;
          }
          
          .l {
            font-family: "xprime";
          }
          
          .i {
            font-family: 'Times New Roman', Times, serif;
            color: #08e315;
          }
          
          nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-family: system-ui, -apple-system, Helvetica, Arial, sans-serif;
            background: #642175;
            height: 8vh;
          }
          
          .nav-list {
            list-style: none;
            display: flex;
          }
          
          .nav-list li {
            letter-spacing: 3px;
            margin-left: 32px;
          }
          
          .nav-list li:nth-of-type(2) a {
            color: #08e315;
            font-weight: bold;
          }
          
          .mobile-menu {
            display: none;
            cursor: pointer;
          }
          
          .mobile-menu div {
            width: 32px;
            height: 2px;
            background: #fff;
            margin: 8px;
            transition: 0.3s;
          }
          
          .single-product-container {
            width: 1000px;
            height: 90vh;
            margin: 8vh auto 0 auto;
            padding: 50px;
            background-color: #642175;
            border-radius: 0 0 50% 50%;
            display: grid;
            gap: 20px;
            grid-template-areas: 
            "img pro-det pro-det"
            "btn btn btn";
          }
          
          #product-image {
            grid-area: img;
          }
          
          #product-image img {
            border: solid 2px #08e315;
            border-radius: 5px;
            width: 300px;
            height: 300px;
            object-fit: contain;
            background-color: #f2f2f2;
          }
          
          #product-details {
            grid-area: pro-det;
            height: 300px;
            background-color: #f2f2f2;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 20px;
            text-align: center;
            color: #642175;
            overflow-y: scroll;
          }
          
          #product-details h2 {
            margin-bottom: 10px;
          }
          
          #product-details p {
            margin-bottom: 5px;
            text-align: justify;
          }
          
          #buy-product-area {
            grid-area: btn;
            margin: auto;
          }
          
          #buy-product-area button {
            background-color: #12c52a;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            color: #f2f2f2;
            padding: 10px 0px;
            border: solid 2px rgba(0, 0, 0, 0);
            border-radius: 5px;
            font-size: 32px;
            font-weight: bold;
            text-shadow: 0 0 2px black;
            text-transform: uppercase;
            transition: ease 300ms;
            width: 400px;
            cursor: pointer;
          }
          
          
          #buy-product-area button:hover {
            background-color: #02a718;
            box-shadow: none;
            border: solid 2px #f2f2f2;
          }
          /*
            MOBILE MENU
          */
          @media (max-width: 950px) {
            body {
              overflow-x: hidden;
            }
          
            nav {
              justify-content: space-between;
              padding: 0px 10px 0px 20px;
            }
          
            .nav-list {
              position: absolute;
              top: 8vh;
              right: 0;
              width: 50vw;
              height: 92vh;
              background: #642175;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
              transform: translateX(100%);
              transition: transform 0.3s ease-in;
            }
          
            .nav-list li {
              margin-left: 0;
              opacity: 0;
            }
          
            .mobile-menu {
              display: block;
            }
          
            .nav-list.active {
              transform: translateX(0);
            }
          
            .single-product-container {
              width: 100%;
              padding: 10px;
              grid-template-areas: 
              "img"
              "btn"
              "pro-det"
            }
          
            #product-image {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          
            #product-image img {
              width: 200px;
              height: 200px;
            }
          
            #product-details {
              height: auto;
              font-size: 16px;
            }
          
            #buy-product-area {
              position:static;
            }
          
            #buy-product-area button {
              font-size: 20px;
              padding: 15px;
              width: 300px;
            }
          }
          
          @keyframes navLinkFade {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
          
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .mobile-menu.active .line1 {
            transform: rotate(-45deg) translate(-8px, 8px);
          }
          
          .mobile-menu.active .line2 {
            opacity: 0;
          }
          
          .mobile-menu.active .line3 {
            transform: rotate(45deg) translate(-5px, -7px);
          }
            </style>
          </head>
          
          <body>
            <header>
              <nav>
                <a class="logo" href="./index.html">
                  <span class="x">X</span>prime <span class="l">L</span><span class="i">i</span>fe
                </a>
                <div class="mobile-menu">
                  <div class="line1"></div>
                  <div class="line2"></div>
                  <div class="line3"></div>
                </div>
                <ul class="nav-list">
                  <li><a href="./index.html">In??cio</a></li>
                  
                  <li>
                    <a href="mailto:${email}" target="_blank">Contato</a>
                  </li>
                </ul>
              </nav>
            </header>
          
            <main>
              <div class="single-product-container">
                <div id="product-image">
                  <img id="image" src="./assets/" />
                </div>
          
                <div id="product-details">
                  <h2 id="product-name">Product name</h2>
                  <p id="product-description">product description</p>
                </div>
          
                <div id="buy-product-area">
                  <a id="buy-button">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
            </main>
          
            <script src="./js/mobile-navbar.js"></script>
            <script src="./js/database.js"></script>
            <script src="./js/products.js"></script>
            <script>
            try {
            function changeDataFromPage(element) {
              const productImage = document.querySelector('#image')
              productImage.setAttribute('src', './assets/' + element.img)
            
              const title = document.querySelector('title')
              title.innerHTML = element.name
            
              const productName = document.querySelector('#product-name')
              productName.innerHTML = element.name
            
              const productDetails = document.querySelector('#product-description')
              productDetails.innerHTML = element.description
            
              const buyButton = document.querySelector('#buy-button')
              buyButton.href = element.link
            }
            changeDataFromPage(mostSoldProductsDatabase[${i}])
          } catch {
            console.log('errorrrrhahahah')
          }
            </script>
          </body>
          
          </html>`
        )
      } catch {
        console.error("The product page could not be created")
      }
    })

    const productImage = document.createElement('img')
    productImage.src = `./assets/${mostSoldProductsDatabase[i].img}`
    productImage.style = 'width:100%'

    link.appendChild(productImage)
    product.appendChild(link)
    mostSoldProductsSlideContainer.appendChild(product)
  }
}


addProductsToTheMostSoldSection()
addProductsToTheMainPage()