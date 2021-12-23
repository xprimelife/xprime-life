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
    buyButton.target = '_blank'
  }
} catch {
  console.log('unknown error')
}