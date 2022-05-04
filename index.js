const button = document.querySelector(".btn");

const par = document.querySelector(".par");

const predictions = [
  "Изменения, вошедшие в вашу жизнь, изменят и многое в вас лично.",
  "Осторожнее относитесь к людям, поскольку не исключен обман.",
  "Лучший лекарь – это время, оно затянет ваши раны.",
  "Вы движетесь в верном направлении.",
  "Влюбленность – вот что ожидает вас на этой неделе.",
  "С новой весной в жизнь приходит новая любовь.",
  "Внимательно прислушивайтесь к подсказкам судьбы.",
  "Действуйте, даже если для этого нужен прыжок в неизвестность.",
  "Вскорости бюджет вашей семьи будет пополнен.",
  "Будьте инициативнее – и удача совсем скоро станет вашей спутницей.",
  "Исполнение желаний превзойдет все ожидания.",
  "Тупиковых ситуаций не бывает – выход есть всегда.",
  "Верьте тому, что происходит в вашей жизни.",
  "Вселенная слышит и понимает тебя. Не торопи события.",
  "Самое время отправляться в путешествие."
];

button.addEventListener("click", ()=> {
  let randomPredictions = predictions[Math.floor(Math.random()*predictions.length)];
  par.style.display = "block";
  par.textContent = randomPredictions;
})
