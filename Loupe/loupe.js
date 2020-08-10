window.onload = function () {
    // ベースimgをcanvasに描画
    imageDraw();
}

let target_image = "./sample.jpeg";
// コンテキストのオブジェクトにメソッドが使える
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// 画像ファイルをcanvasに描画
function imageDraw () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    // 画像オブジェクトを生成
    let img = new Image();
    img.src = target_image;

    // 画像をcanvasに描画
    img.onload = function () {
        // canvasのサイズをimgのサイズに合致させる
        canvas.width  = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    }
}

function move (e) {

    // canvas要素のpx幅(style指定部分)
    let canvasWidth = canvas.clientWidth;
    let canvasHeight = canvas.clientHeight;

    canvas.onmousemove = function (e) {

        // ベースimgをcanvasに描画
        imageDraw();

        // 参照する画像の生成(resource画像)
        let img = new Image();
        img.src = target_image;

        // canvasに対するマウスの座標を取得
        // canvasの解像度(サイズ)に対応しているので、imgの解像度に上げる必要
        let mouseX = e.offsetX * (img.width/canvasWidth);
        let mouseY = e.offsetY * (img.height/canvasHeight);

        // console.log(mouseX)
        // console.log(mouseY)

        // console.log(canvasWidth) // 可変
        // console.log(canvasHeight) // 可変
        // console.log(img.width) // 1094
        // console.log(img.height) // 730
        // console.log(window.screen.width) // 1920
        // console.log(window.screen.height) // 1080

        // sourceCanvas(始点, 幅)
        let sw = 200;
        let sh = 200;
        let sx = (mouseX-sw/2);
        let sy = (mouseY-sh/2);
        // destinationCanvas(始点, 幅)
        let dw = 400;
        let dh = 400;
        let dx = (mouseX-dw/2);
        let dy = (mouseY-dh/2);

        // 拡大してcanvasに描画
        img.onload = () => {
            // d_ctx.drawImage(img, 0, 0)
            ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
        }
    }

    function clear () {

        let img = new Image();
        img.src = target_image;

        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        }
    }
}
