const buttonsContainer = document.querySelector('#buttons-container')

function addButtonsToButtonsContainer() {
  for (let i = 0; i < sections.length; i++) {
    const button = document.createElement('button')
    button.innerHTML = sections[i].name
    button.addEventListener('click', () => {
      //window.open("", "_self").document.write() to open at the same window
      window.open().document.write(
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="shortcut icon" href="./assets/fav-icon.png" type="image/x-icon">
          <title>${sections[i].name} | Xprime life</title>
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
              width: 6px;
            }
        
            ::-webkit-scrollbar-track {
              background-color: #111111;
            }
        
            ::-webkit-scrollbar-thumb {
              background-color: #555555;
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
        
            .nav-list li:nth-of-type(3) a {
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
        
            #products {
              margin-top: 8vh;
              padding: 50px 0 50px 0;
              border-radius: 0px 0px 50% 50%;
              background-color: #642175;
            }
        
            #products h2 {
              text-align: center;
              text-shadow: 0 0 5px black;
              font-size: 42px;
              margin-bottom: 50px;
            }
        
            #buttons-container {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 20px;
              margin-bottom: 30px;
            }
        
            #buttons-container button {
              background-color: #12c52a;
              color: #f2f2f2;
              border: none;
              border-radius: 5px;
              outline: none;
              font-size: 18px;
              text-align: center;
              text-shadow: 0 0 3px black;
              box-shadow: 0 0 2px black;
              padding: 6px 12px 6px 12px;
              cursor: pointer;
              transition: ease 300ms;
            }
        
            #buttons-container button:hover {
              background-color: #02a718;
            }
        
            #products-container {
              display: grid;
              grid-template-columns: auto auto auto auto;
              justify-content: center;
              align-items: center;
              gap: 30px;
            }
        
            .product-container {
              width: 265px;
              height: 320px;
              background-color: #f2f2f2;
              border-radius: 5px;
              box-shadow: 0 0 3px #000000dd;
              overflow: hidden;
              position: relative;
            }
        
            .sub-text {
              padding: 3px 0 3px 0;
              background-color: #af0098;
              font-size: 26px;
              letter-spacing: 1px;
              text-align: center;
              text-transform: capitalize;
            }
        
            .nowrap {
              font-size: 14px;
            }
        
            .product-container img {
              width: 100%;
              height: 235px;
            }
        
            .product-container .button {
              background-color: #12c52a;
              width: 100%;
              height: 55px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 22px;
              text-transform: uppercase;
              text-shadow: 0 0 2px black;
              position: absolute;
              bottom: 0;
              cursor: pointer;
              border-top: solid 1px black;
              transition: ease 300ms;
            }
        
            .product-container .button:hover {
              background-color: #02a718;
            }
        
        
            /*
                  MOBILE MENU
                */
            @media (max-width: 600px) {
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
        
              #products-container {
                display: grid;
                grid-template-columns: auto auto;
                justify-content: center;
                align-items: center;
                gap: 10px;
              }
        
              .product-container {
                width: 165px;
                height: 220px;
                background-color: #f2f2f2;
                border-radius: 5px;
                box-shadow: 0 0 3px #000000dd;
                overflow: hidden;
                position: relative;
              }
        
              .sub-text {
                padding: 3px 0 3px 0;
                background-color: #af0098;
                font-size: 16px;
                letter-spacing: 1px;
                text-align: center;
                text-transform: capitalize;
                text-align: center;
              }
        
              .nowrap {
                font-size: 14px;
              }
        
              .product-container img {
                width: 165px;
                height: 165px;
              }
        
              .product-container .button {
                background-color: #12c52a;
                width: 100%;
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 18px;
                text-transform: uppercase;
                text-shadow: 0 0 2px black;
                position: absolute;
                bottom: 0;
                cursor: pointer;
                border-top: solid 1px black;
                transition: ease 300ms;
              }
        
              .product-container .button:hover {
                background-color: #02a718;
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
              <a class="logo" href="#top">
                <span class="x">X</span>prime <span class="l">L</span><span class="i">i</span>fe
              </a>
              <div class="mobile-menu">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
              </div>
              <ul class="nav-list">
                <li><a href="./index.html">Início</a></li>
                <li><a href="#products">Produtos</a></li>
                <li>
                  <a href="mailto:xprimediet@gmail.com" target="_blank">Contato</a>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <section id="products">
              <h2 id="products-anchor">${sections[i].name}</h2>
              <!-- <div id="buttons-container">
                        <a href="./index.html">
                          <button>Home</button>
                        </a>
                      </div> -->
              <div id="products-container"></div>
            </section>
          </main>
        
          <script src="./js/mobile-navbar.js"></script>
          <script src="./js/database.js"></script>
          <script src="./js/sections-products.js"></script>
          <script>
            const productsContainer = document.querySelector('#products-container')
              
            function addProductsToTheSectionPage() {
              const sectionProduct = sections[${i}].products
              for (let i = 0; i < sectionProduct.length; i++) {
                const product = document.createElement('div')
                product.classList.add('product-container')
                product.setAttribute('onclick', 'handleGenerateSectionProductPage('+ ${i} +',' + i +')')
        
                const link = document.createElement('div')
        
                const subText = document.createElement('div')
                subText.classList.add('sub-text')
                subText.innerHTML = sectionProduct[i].name
        
                const productImage = document.createElement('img')
                productImage.src = './assets/' + sectionProduct[i].img
        
                const button = document.createElement('div')
                button.classList.add('button')
                button.innerHTML = "Ver produto"
        
                link.appendChild(subText)
                link.appendChild(productImage)
                link.appendChild(button)
                product.appendChild(link)
                productsContainer.appendChild(product)
              }
            }
        
            addProductsToTheSectionPage()
          </script>
        </body>
        
        </html>`
      )
    })
    buttonsContainer.appendChild(button)
  }
}

addButtonsToButtonsContainer()
