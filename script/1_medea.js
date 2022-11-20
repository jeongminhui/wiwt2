let random = () => Math.floor(Math.random() * 21) + 1; // 배열 길이에 접근하듯, 파일 갯수를 알 순 없을까?

let random1,
  random2,
  random3 = random();
while (random1 != random2) {
  random2 = random();
}

console.log();
let randomLookbookImg1 = document.querySelector(`.lookbook div .img1`);
let randomLookbookImg2 = document.querySelector(`.lookbook div .img2`);
let randomLookbookImg3 = document.querySelector(`.lookbook div .img3`);
randomLookbookImg1.src = `./media/lookbook/lookbook (${random()}).png`;
randomLookbookImg2.src = `./media/lookbook/lookbook (${random()}).png`;
randomLookbookImg3.src = `./media/lookbook/lookbook (${random()}).png`;
// weatherIcon.src = `./media/images/icons/${data.weather[0].icon}.png`; // 웨더 아이콘
