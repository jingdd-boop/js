function loadImg(src){
   const p = new Promise(
        (resolve, reject) => {
            const img = document.createElement('img')
            img.onload = () =>{
                resolve(img)
            }
            img.onerror = () =>{
                const err = new Error(`图片加载失败 ${src}`)
                reject(err) 
            }
            img.src = src
        }
    )
    return p
}
// const url = 'http://img0.imgtn.bdimg.com/it/u=1420630887,1181025999&fm=26&gp=0.jpg'
// loadImg(url).then(img =>{
//     console.log(img.width)
//     return img
// }).then(img =>{
//     console.log(img.height)
// }).catch(ex => console.error(ExtensionScriptApis))
const url1 = 'http://img0.imgtn.bdimg.com/it/u=1420630887,1181025999&fm=26&gp=0.jpg'
const url2 = 'http://tupian.qqw21.com/article/UploadPic/2020-4/2020418194843412.jpg'

loadImg(url1).then(img1 =>{
    console.log(img1.width)
    return img1
}).then(img1 => {
    console.log(img1.height)
    return loadImg(url2)
}).then(img2 =>{
    console.log(img2.width)
    return img2
}).then(img2 =>{
    console.log(img2.height)
}).catch(err =>{console.error(err);
})