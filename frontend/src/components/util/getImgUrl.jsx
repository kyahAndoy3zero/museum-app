

function getImgUrl(imgSrc) {

    const baseUrl = 'http://127.0.0.1:5000'
    const imageSource = `/public/img/covers/${imgSrc}`

    return baseUrl + imageSource
}

export default getImgUrl

