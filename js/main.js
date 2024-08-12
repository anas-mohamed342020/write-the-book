setInterval(() => {
  const endTime = new Date('11/15/2024');
  const altabeah = new Date('11/1/2024');
  const radifTime = new Date('11/15/2024');
  const currentDate = new Date();
  console.log(currentDate);
  let timeForGrad = endTime.getTime() - currentDate.getTime()
  let timeForStart = altabeah.getTime() - currentDate.getTime();
  let timeForEnd = radifTime.getTime() - currentDate.getTime();
  let messages = {
    beforeStart: `
      <div class="message h1">
      <p>باقى من الزمن الحبة دول ويبقى </p>
      <p>كتبوكى على اسمى </p>
      <p>بقى رسمى خلاص حاجة شبه كده</p>
  </div>
  <div class="time h3">
  ${Math.floor(timeForGrad / (30 * 24 * 60 * 60 * 1000))} M : ${Math.floor((timeForGrad / (24 * 60 * 60 * 1000))) % 30} D : ${Math.floor((timeForGrad / (60 * 60 * 1000)) % 24)} H : ${Math.floor((timeForGrad / (1000 * 60)) % 60)} M : ${Math.floor((timeForGrad / 1000) % 60)} S 
  (total => ${Math.floor(timeForGrad / (24 * 60 * 60 * 1000))} Days)</div>
      `,
    beforeEnd: `
      <div class="message h1">
      <p>الحبة دول كمان وتقولى</p>
      <p>الواد ده بتاعى واسمه دراعى</p>
  </div>
  <div class="time h3">
  ${Math.floor(timeForGrad / (30 * 24 * 60 * 60 * 1000))} M : ${Math.floor((timeForGrad / (24 * 60 * 60 * 1000))) % 30} D : ${Math.floor((timeForGrad / (60 * 60 * 1000)) % 24)} H : ${Math.floor((timeForGrad / (1000 * 60)) % 60)} M : ${Math.floor((timeForGrad / 1000) % 60)} S 
  (total => ${Math.floor(timeForGrad / (24 * 60 * 60 * 1000))} Days)</div>
  `,
    beforeGrad: `
      <div class="message h1">
      يلا يا عم اخر ربع فالجيش
  </div>
  <div class="time h3">
  ${Math.floor(timeForGrad / (30 * 24 * 60 * 60 * 1000))} M :
  ${Math.floor((timeForGrad / (24 * 60 * 60 * 1000))) % 30} D :
  ${Math.floor((timeForGrad / (60 * 60 * 1000)) % 24)} H :
  ${Math.floor((timeForGrad / (1000 * 60)) % 60)} M :
  ${Math.floor((timeForGrad / 1000) % 60)} S 
  (total => ${Math.floor(timeForGrad / (24 * 60 * 60 * 1000))} Days)</div>
  `,
    graduated: `
  <div class="h1">
قومى اعملى كوباية شاى لجوزك يا بت 
  </div>
  `
  }



  if (timeForStart > 0) {
    document.getElementById('home').style.backgroundImage = "url('https://i.pinimg.com/236x/f3/02/a7/f302a70a74f0cb0a2b6faa43ede0fdda.jpg')";
    document.getElementById('before-exam').innerHTML = messages.beforeStart
  }
  else if (timeForEnd > 0) {
    document.getElementById('home').style.backgroundImage = "url('https://i.pinimg.com/736x/65/2f/0f/652f0f024ff1a3e4cf2638ef5709871a.jpg')";    
    document.getElementById('before-exam').innerHTML = messages.beforeEnd
  }
  else {
    document.getElementById('before-exam').innerHTML = messages.graduated
  }
}, 1000);


