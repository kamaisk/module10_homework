const screenSizeBtn = document.querySelector(".screen-size-button");

screenSizeBtn.addEventListener("click", () => {
    // размер экрана
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // размер окна браузера с прокруткой
    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;

    //    размер окна браузера без прокрутки
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

    // alert(`Ширина экрана: ${width}px\nВысота экрана: ${height}px`);
    alert(`Размер экрана: ${screenWidth}px x ${screenHeight}px.\n
Размер окна браузера с полосой прокрутки: ${windowInnerWidth}px x ${windowInnerHeight}px.\n
Размер окна браузера без полосы прокрутки: ${clientWidth}px x ${clientHeight}px.`);
})