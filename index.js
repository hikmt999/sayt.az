const productSec = document.getElementById("productSec");
const domenSec = document.getElementById("domenSec");
const hostingSec = document.getElementById("hostingSec");
const xidmetSec = document.getElementById("xidmetSec");
const şirketSec = document.getElementById("şirketSec");
const productlarim = document.getElementById("productlarim");
const sidebar = document.getElementById("sidebar");
const mobileVebSite = document.getElementById("mobileVebSite");
const mobileDomen = document.getElementById("mobileDomen");
const mobileHostinq = document.getElementById("mobileHostinq");
const mobileŞirkətlər = document.getElementById("mobileŞirkətlər");
const domainCheckSec = document.getElementById("domainCheckSec");
const mobileXidmetler = document.getElementById("mobileXidmetler");
const startaps = document.getElementById("startaps");

function checkSec() {
  if (productSec.classList) {
  } else {
  }
}

function openProductSec() {
  productSec.classList.toggle("hidden");
}
function openDomenSec() {
  domenSec.classList.toggle("hidden");
}
function openHostingSec() {
  hostingSec.classList.toggle("hidden");
}
function openXidmetSec() {
  xidmetSec.classList.toggle("hidden");
}
function openSirketSec() {
  şirketSec.classList.toggle("hidden");
}
function showBasket(status) {
  sidebar.style.right = !status ? "0" : "-100vw";
}

const products = [
  {
    name: "Saytların Hazırlanması",
    title: "Veb saytların Hazırlanması",
    img: "/img/website-program.svg",
  },
  {
    name: "Hökumət və qeyri-kommersiya saytları",
    title: "Hökumət və qeyri-kommersiya saytları",
    img: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    name: "Kiçik biznes saytları",
    title: "Kiçik bizneslər üçün saytları",
    img: "img/kicik.svg",
  },
  {
    name: "E-ticarət saytları",
    title: "E-ticarət saytları",
    img: "img/eticaret.svg",
  },
  {
    name: "Huquq-firma saytları",
    title: "Huquq-firma saytları",
    img: "img/huquq.svg",
  },
  {
    name: "E-ticarət saytları",
    title: "E-ticarət saytları",
    img: "img/eticaret.svg",
  },
];
const domens = [
  {
    name: "Saytların Hazırlanması",
    title: "Veb saytların Hazırlanması",
    img: "/img/website-program.svg",
  },
  {
    name: "Hökumət və qeyri-kommersiya saytları",
    title: "Hökumət və qeyri-kommersiya saytları",
    img: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
];
const hostinqs = [
  {
    name: "Saytların Hazırlanması",
    title: "Veb saytların Hazırlanması",
    img: "/img/website-program.svg",
  },
  {
    name: "Hökumət və qeyri-kommersiya saytları",
    title: "Hökumət və qeyri-kommersiya saytları",
    img: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
];
const xidmetlerimiz = [
  {
    name: "Kalkulator",
    title: "Saytının qiymətini öyrən.",
    img: "/img/calculator.svg",
    link: "http://127.0.0.1:5500/calculator.htm",
  },
];
const sirketlerimiz = [
  {
    name: "Saytların Hazırlanması",
    title: "Veb saytların Hazırlanması",
    img: "/img/website-program.svg",
  },
  {
    name: "Hökumət və qeyri-kommersiya saytları",
    title: "Hökumət və qeyri-kommersiya saytları",
    img: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
];

showAllSec();
function showAllSec() {
  productlarim.innerHTML = "";
  domenSec.innerHTML = "";
  hostingSec.innerHTML = "";
  xidmetSec.innerHTML = "";
  şirketSec.innerHTML = "";
  products.forEach(
    (item) =>
    (productlarim.innerHTML += `<div
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                >
                  <div
                    class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                  >
                    <img src="${item.img}" alt="">
                  </div>
                  <div class="flex-auto">
                    <a href="#" class="block font-semibold text-gray-900">
                      ${item.name}
                      <span class="absolute inset-0"></span>
                    </a>
                    <p class="mt-1 text-gray-600">
                      ${item.title}
                    </p>
                  </div>
                </div>`)
  );
  domens.forEach(
    (item) =>
    (domenSec.innerHTML += `<div
                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div
                      class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <img src="${item.img}" alt="">
                    </div>
                    <div class="flex-auto">
                      <a href="#" class="block font-semibold text-gray-900">
                        ${item.name}
                        <span class="absolute inset-0"></span>
                      </a>
                      <p class="mt-1 text-gray-600">
                        ${item.title}
                      </p>
                    </div>
                  </div>`)
  );
  sirketlerimiz.forEach(
    (item) =>
    (şirketSec.innerHTML += `<div
                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div
                      class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <img src="${item.img}" alt="">
                    </div>
                    <div class="flex-auto">
                      <a href="#" class="block font-semibold text-gray-900">
                        ${item.name}
                        <span class="absolute inset-0"></span>
                      </a>
                      <p class="mt-1 text-gray-600">
                        ${item.title}
                      </p>
                    </div>
                  </div>`)
  );
  xidmetlerimiz.forEach(
    (item) =>
    (xidmetSec.innerHTML += `<div
                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div
                      class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <img src="${item.img}" alt="">
                    </div>
                    <div class="flex-auto">
                      <a href="${item.link}" class="block font-semibold text-gray-900">
                        ${item.name}
                        <span class="absolute inset-0"></span>
                      </a>
                      <p class="mt-1 text-gray-600">
                        ${item.title}
                      </p>
                    </div>
                  </div>`)
  );
  hostinqs.forEach(
    (item) =>
    (hostingSec.innerHTML += `<div
                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div
                      class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <img src="${item.img}" alt="">
                    </div>
                    <div class="flex-auto">
                      <a href="#" class="block font-semibold text-gray-900">
                        ${item.name}
                        <span class="absolute inset-0"></span>
                      </a>
                      <p class="mt-1 text-gray-600">
                        ${item.title}
                      </p>
                    </div>
                  </div>`)
  );
}
mobileAddAll();
function mobileAddAll() {
  mobileVebSite.innerHTML = "";
  mobileDomen.innerHTML = "";
  mobileHostinq.innerHTML = "";
  mobileŞirkətlər.innerHTML = "";
  mobileXidmetler.innerHTML = "";
  products.forEach(
    (item) =>
    (mobileVebSite.innerHTML += `<div
                      class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div
                        class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                      >
                        <img src="${item.img}" alt="">
                      </div>
                      <div class="flex-auto">
                        <a href="#" class="block font-semibold text-gray-900">
                          ${item.name}
                          <span class="absolute inset-0"></span>
                        </a>
                        <p class="mt-1 text-gray-600">
                          ${item.title}
                        </p>
                      </div>
                    </div>`)
  );
  domens.forEach(
    (item) =>
    (mobileDomen.innerHTML += `<div
                      class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div
                        class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                      >
                        <img src="${item.img}" alt="">
                      </div>
                      <div class="flex-auto">
                        <a href="#" class="block font-semibold text-gray-900">
                          ${item.name}
                          <span class="absolute inset-0"></span>
                        </a>
                        <p class="mt-1 text-gray-600">
                          ${item.title}
                        </p>
                      </div>
                    </div>`)
  );
  hostinqs.forEach(
    (item) =>
    (mobileHostinq.innerHTML += `<div
                      class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div
                        class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                      >
                        <img src="${item.img}" alt="">
                      </div>
                      <div class="flex-auto">
                        <a href="#" class="block font-semibold text-gray-900">
                          ${item.name}
                          <span class="absolute inset-0"></span>
                        </a>
                        <p class="mt-1 text-gray-600">
                          ${item.title}
                        </p>
                      </div>
                    </div>`)
  );
  sirketlerimiz.forEach(
    (item) =>
    (mobileŞirkətlər.innerHTML += `<div
                      class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div
                        class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                      >
                        <img src="${item.img}" alt="">
                      </div>
                      <div class="flex-auto">
                        <a href="#" class="block font-semibold text-gray-900">
                          ${item.name}
                          <span class="absolute inset-0"></span>
                        </a>
                        <p class="mt-1 text-gray-600">
                          ${item.title}
                        </p>
                      </div>
                    </div>`)
  );
  xidmetlerimiz.forEach(
    (item) =>
    (mobileXidmetler.innerHTML += `<div
                      class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div
                        class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                      >
                        <img src="${item.img}" alt="">
                      </div>
                      <div class="flex-auto">
                        <a href="#" class="block font-semibold text-gray-900">
                          ${item.name}
                          <span class="absolute inset-0"></span>
                        </a>
                        <p class="mt-1 text-gray-600">
                          ${item.title}
                        </p>
                      </div>
                    </div>`)
  );
}







const chatButton = document.getElementById("chatButton");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const sendMessage = document.getElementById("sendMessage");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");


const botReplies = [
  "Salam! Necə kömək edə bilərəm? 😊",
  "Bir sualınız varsa, çəkinmədən soruşun! 🤖",
  "Bunun üçün dəstək səhifəmizi yoxlaya bilərsiniz! 🔍",
  "Zəhmət olmasa, ətraflı məlumat verin! 🧐",
  "Bunu dəqiq bilmirəm, amma yoxlaya bilərəm! 🔄",
  "Super! Daha hansı mövzuda kömək lazımdır? 🚀",
  "Sizin üçün araşdırma aparıram, bir az gözləyin... ⏳",
  "Bu əla sualdır! Gəlin birlikdə həll edək! 💡",
  "Özümü super hiss edirəm! Bəs siz? 😃",
  "Bir az düşündüm və bu cavab ağlıma gəldi: [MÖHTƏŞƏM CAVAB] 🎉",
  "Əgər köməyə ehtiyacınız varsa, burdayam! 🛠",
  "Hər şey qaydasındadırmı? Mən burdayam! 📞",
  "Bunu anlamağa çalışıram... Bir saniyə! 🔄",
  "Kod yazırsınız? Yoxsa dizayn edirsiniz? 🎨💻",
  "Daha konkret bir şey istəsəniz, mənimlə paylaşın! 😊",
  "Dostum, sualın həqiqətən çətindir, amma mən sənin üçün burdayam! 🧠🔥",
  "Hər şey mümkündür! Sadəcə mənə de, həll edək! 🚀",
  "Mənim alqoritmlərim sənə kömək etməyə hazırdır! 💡",
  "Bəzən sadəcə yaxşı bir söhbət kifayətdir, elə deyilmi? 🗣",
  "Mən 24/7 burdayam, istədiyin vaxt mesaj yaza bilərsən! ⏰"
];

chatButton.addEventListener("click", () => {
  chatBox.classList.toggle("hidden");
});

closeChat.addEventListener("click", () => {
  chatBox.classList.add("hidden");
});

sendMessage.addEventListener("click", () => {
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, "user");
    chatInput.value = "";
    setTimeout(() => {
      const botMessage = botReplies[Math.floor(Math.random() * botReplies.length)];
      addMessage(botMessage, "bot");
    }, 1000);
  }
});
function checkHostinqTime(status) {
  status = !status;
  if (status) {
    il.style.background = "#a271f2";
    il.style.color = "#FFF";
    ay.style.background = "none";
    ay.style.color = "#a271f2";
    ekoPrice.innerHTML = '₼50';
    stanPrice.innerHTML = '₼100';
    premPrice.innerHTML = '₼200';
  } else {
    ay.style.background = "#a271f2";
    il.style.background = "none";
    ay.style.color = "#fff";
    il.style.color = "#a271f2";
    ekoPrice.innerHTML = '₼5';
    stanPrice.innerHTML = '₼10';
    premPrice.innerHTML = '₼20';
  }
}

function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("p-2", "rounded-lg", "my-1", "max-w-[75%]");
  if (sender === "user") {
    messageDiv.classList.add("bg-[#a271f2]", "text-white", "self-end", "ml-auto");
  } else {
    messageDiv.classList.add("bg-gray-300", "text-black", "self-start", "mr-auto");
  }
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
const inputDomains = document.getElementById("inputDomains");
const ay = document.getElementById("ay");
const ekoPrice = document.getElementById("ekoPrice");
const stanPrice = document.getElementById("stanPrice");
const premPrice = document.getElementById("premPrice");

document.getElementById("dropdown-button").addEventListener("click", function () {
  document.getElementById("dropdown-list").classList.toggle("hidden");
});

document.querySelectorAll("#dropdown-list li").forEach(item => {
  item.addEventListener("click", function () {
    document.getElementById("dropdown-button").innerHTML = this.innerHTML;
    document.getElementById("dropdown-list").classList.add("hidden");
  });
});


function openProductSec() {
  productSec.classList.toggle("hidden");
  domenSec.classList.add("hidden");
  hostingSec.classList.add("hidden");
  xidmetSec.classList.add("hidden");
  şirketSec.classList.add("hidden");
}
function openDomenSec() {
  domenSec.classList.toggle("hidden");
  productSec.classList.add("hidden");
  hostingSec.classList.add("hidden");
  xidmetSec.classList.add("hidden");
  şirketSec.classList.add("hidden");
}
function openHostingSec() {
  hostingSec.classList.toggle("hidden");
  domenSec.classList.add("hidden");
  productSec.classList.add("hidden");
  xidmetSec.classList.add("hidden");
  şirketSec.classList.add("hidden");
}
function openXidmetSec() {
  xidmetSec.classList.toggle("hidden");
  domenSec.classList.add("hidden");
  hostingSec.classList.add("hidden");
  productSec.classList.add("hidden");
  şirketSec.classList.add("hidden");
}
function openSirketSec() {
  şirketSec.classList.toggle("hidden");
  domenSec.classList.add("hidden");
  hostingSec.classList.add("hidden");
  xidmetSec.classList.add("hidden");
  productSec.classList.add("hidden");
}
function selectPlan(element) {
  // Remove the selected class from all plans
  const plans = document.querySelectorAll('.flex > div');
  plans.forEach(plan => plan.classList.remove('selected'));

  // Add the selected class to the clicked plan
  element.classList.add('selected');
}
const team = [
  {
    fullName: "Ramil Mirzayev",
    position: "CEO",
    img: "https://api.websiteca.com/storage/Cup5kWbVIA9nfp4TN5w9ecGRkQUkhfVh8umVITKe.jpg",
  },
  {
    fullName: "Rasim Adurahman",
    position: "Project Manager",
    img: "https://api.websiteca.com/storage/uTGbFRppma9BB7BTTYffzFgy8m1MfQEa7RkNdAVe.jpg",
  },
  {
    fullName: "Ahmad Rustamov",
    position: "Team Lead",
    img: "https://api.websiteca.com/storage/cMDfFJGRPFXHH8bqJc6CXw5RT6RbYOjHDmmAhvq4.jpg",
  },
  {
    fullName: "Murad Aghamedov",
    position: "Backend Developer",
    img: "https://api.websiteca.com/storage/4RIXyEhwxrU4nkxG2MUT2NqxZk0byqD4W7VyvnRf.jpg",
  },
  {
    fullName: "Fuad Mammadov",
    position: "Front-End Developer",
    img: "https://api.websiteca.com/storage/S3chfzTRjo3ykhVY7JaRbRNbJ28LVeXA1duP7YAN.png",
  },
  {
    fullName: "Mirafgan Eminbayli",
    position: "Front-End Developer",
    img: "https://api.websiteca.com/storage/8imyJH3yz86nxrP3fTkAfq9faXyfrPhLMsD5nWvm.jpg",
  },
  {
    fullName: "Idrak Mustafazada",
    position: "Customer Support",
    img: "https://api.websiteca.com/storage/UFeJ0M6cDGYTUcdTSz79BOYyuQMUIU5NWfhk2wuv.jpg",
  },
  {
    fullName: "Saida Chinani",
    position: "SMM",
    img: "https://api.websiteca.com/storage/k6AiYFMXvZ3HIpwTdQAZiHZMyjeOnGQ8TpZY4VTz.jpg",
  },
  {
    fullName: "Matanat M.",
    position: "Front End Developer",
    img: "https://api.websiteca.com/storage/souFthYY1tpKeJKs20LqEqbjGvT1pxAZ5OBCtr1u.jpg",
  },
];
// showTeam();
// function showTeam() {
//   komandamiz.innerHTML = "";
//   team.forEach(
//     (item) =>
//     (komandamiz.innerHTML += `<div class="flex flex-col   min-h-[220px] justify-center items-center border-2 border-[#A271F2] sm:rounded-[30px] rounded-[24px] sm:p-4 p-2 relative"><div class="relative w-full">
//         <img alt="10" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" 
//         class="sm:w-[240px] xs:w-[200px] w-[150px] relative bottom-0 z-10 mx-auto 
//         md:h-[250px] sm:h-[230px] h-[200px] rounded-[14px] object-cover" 
//         src="${item.img}" 
//         style="color: transparent;"></div><div class="relative sm:-top-10 -top-8 bg-white w-full 
//         h-[50px] py-4 z-20 rounded-[15px]"><div class="flex flex-col justify-center items-center 
//         gap-1 "><span class="text-mainDarkPurple sm:text-xl text-base font-bold">${item.fullName}</span><span class="text-mainLightPurpleText text-sm font-bold text-center">${item.position}</span></div></div></div>`)
//   );
// }

const domainler = [
  { name: ".az", price: 25 },
  { name: ".com", price: 12 },
  { name: ".net", price: 10 },
  { name: ".info", price: 8 },
  { name: ".biz", price: 11 },
  { name: ".org", price: 10 },
  { name: ".us", price: 9 },
  { name: ".in", price: 7 },
  { name: ".ws", price: 6 },
  { name: ".mobi", price: 8 },
  { name: ".tv", price: 30 },
  { name: ".me", price: 15 },
  { name: ".ru", price: 5 },
  { name: ".de", price: 6 },
  { name: ".com.az", price: 20 },
  { name: ".co", price: 13 },
  { name: ".site.az", price: 18 },
  { name: ".sayt.az", price: 17 },
  { name: ".ureb.com", price: 14 },
  { name: ".orq.az", price: 19 },
];
// showTeam();
function checkNewDomein() {
  let regex = /^[a-zA-Z0-9-]+$/;
  resultNewDomein.style.color = "blue";

  let dots = 0;
  resultNewDomein.innerText = "Yoxlanılır";

  let animation = setInterval(() => {
    dots = (dots + 1) % 4;
    resultNewDomein.innerText = "Yoxlanılır" + ".".repeat(dots);
  }, 500);

  setTimeout(() => {
    clearInterval(animation);

    if (newdomein.value.length < 3) {
      resultNewDomein.innerText = "Yanlış format! Minimum 3 simvol olmalıdır.";
      resultNewDomein.style.color = "red";
    } else if (!regex.test(newdomein.value)) {
      resultNewDomein.innerText =
        "Yanlış format! Yalnız hərf, rəqəm və '-' olmalıdır.";
      resultNewDomein.style.color = "red";
    } else {
      resultNewDomein.innerText = "Domein Uğurla Yaradıldı!";
      resultNewDomein.style.color = "green";
    }
  }, 3000);
}
showDomains();
function showDomains() {
  domainCheckSec.innerHTML = "";
  domainler.slice(0, 6).forEach(
    (item) =>
    (domainCheckSec.innerHTML += `<div class="text-center text-[#a271f2]">
                <h4 onclick="AddDoeinSeleckt("${item.name}")">${item.name}</h4>
                <h6>₼${item.price}/il</h6>
                </div>`)
  );
}

showInputDomains();
function showInputDomains() {
  inputDomains.innerHTML = "";
  domainler.forEach(
    (item) =>
    (inputDomains.innerHTML += `<option value="${item.name}">${item.name}</option>
`)
  );
}
const startaplar = [
  {
    name: "football.biz",
    title: "Futbol nəticələrinin canlı təqdim edilməsi",
    img: "https://api.websiteca.com/storage/n6JovzwQ5e7Bhz632qaCKE38FOqbGwBKet2dB2lc.jpg",
  },
  {
    name: "paracoin.network",
    title:
      "Para göndər & qəbul et, NFT Al & Sat, Ağıllı müqavilələr hazırla, Birja, Ödənişlər",
    img: "https://api.websiteca.com/storage/BmIYrv23cj5kCPw8CiZ2DEJHuYvzxSB9yGnXH4Bf.png  ",
  },
  {
    name: "kredit.az",
    title:
      "kredit.az saytı ümumi bankların kredit faizləri haqqında məlumatları bir araya",
    img: "https://api.websiteca.com/storage/mgBtiVVCamlauM5sO7C6w10lFcWrWE5QaVh0L0zL.png",
  },
];

printStartaps();
function printStartaps() {
  startaps.innerHTML = "";
  startaplar.forEach(
    (item) =>
    (startaps.innerHTML += `
      <article class="bg-[#FAF4FF] lg:w-[400px] w-full overflow-hidden rounded-2xl transition-all duration-300 border lg:py-6 py-4 lg:px-6 px-4 bg-mainBgPurple">
        <div class="aspect-[3/2] w-full rounded-2xl overflow-hidden relative">
          <a href="#">
            <img alt="" loading="lazy" decoding="async" data-nimg="fill" class="h-full hover:scale-110 transition-all duration-300 rounded-lg" 
            src="${item.img}" style="position: absolute; height: 100%; width: 100%; inset: 0px; object-fit: cover; color: transparent;">
          </a>
        </div>
        <div class="px-2 flex flex-col justify-between sm:min-h-[172px] min-h-[130px]">
          <div>
            <h3 class="sm:mt-6 mt-3 text-lg font-semibold leading-8 truncate tracking-tight text-mainDarkPurple">
              <a class="sm:text-2xl text-lg  leading-8 tracking-tight text-mainDarkPurple no-underline font-bold text-[#300b60]" href="#">
                ${item.name}
              </a>
            </h3>
            <p class="sm:text-base text-xs leading-7 mt-2 line-clamp-2 text-mainTextPurple">
              ${item.title}
            </p>
          </div>
          <a href="#">
            <button type="button" class="bg-[#A271F2] py-2 px-4 mt-4 text-white hover:bg-mainLightPurpleHover active:bg-mainLightPurpleActive text-center rounded-[60px] font-semibold opacity-100 text-sm md:text-base">
              Ətraflı oxu...
            </button>
          </a>
        </div>
      </article>
    `)
  );
}
const İşlərimiz = [
  {
    name: "BİOPHYSİCS.AZ",
    img: "https://api.websiteca.com/storage/wKyykqEbaB5lQ5Q4bq6r5KcpP91bZytQXDtBopDY.png",
  },
  {
    name: "UREB.COM",
    img: "https://api.websiteca.com/storage/Mupn6xSf0FTlbBj0ilDZAqXuLiLrwFGjZct4gQLH.png",
  },
  {
    name: "UG.NEWS",
    img: "https://api.websiteca.com/storage/ZYfooZQ12g9cwbdUYdc9wEsHDXjshxZmRmQB5z9h.png",
  },
  {
    name: "FOOTBALL.BİZ",
    img: "https://api.websiteca.com/storage/2MQEImHKxKRLKbEGPUt9xQY2QiSlQw1gWE7RdkKm.png",
  },
  {
    name: "WISHER.AZ",
    img: "https://api.websiteca.com/storage/mMkkjJ32v64o4mN5tuMBvn7SWWkd1dPBBM1ZBzE2.png",
  },
  {
    name: "IMEXCOMMODITIES.COM",
    img: "https://api.websiteca.com/storage/7ZV1bRucrPWExvpsJqLyFiELk7fHAOk6ZtPVHpNl.png",
  },
];
showIsler(1);
createPagination();
function createPagination() {
  let a = İşlərimiz.length / 2;
  for (let i = 1; i <= a; i++) {
    paginationbuttons.innerHTML += ` <button
            type="button"
            title="Page ${i}"
            onclick="showIsler(${i})"
            class="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600"

          >
            ${i}
          </button>`;
  }
}
function showIsler(x) {
  isler.innerHTML = "";
  İşlərimiz.slice(x - 1, x + 1).forEach(
    (item) =>
    (isler.innerHTML += ` <a
            class="col-span-1 mt- no-underline h-fit p-6 bg-mainBgPurple rounded-[30px] border-2 border-[#E4D7FD] bg-[#FAF4FF]"
            href=""
          >
            <div>
              <img
                alt="BİOP"
                loading="lazy"
                width="608"
                height="360"
                decoding="async"
                data-nimg="1"
                class="w-full xl:h-[380px] lg:h-[320px] md:h-[240px] sm:h-[200px] h-[120px] object-contain rounded-[15px]"
                src="${item.img}"
                style="color: transparent"
              />
            </div>
            <p
              class="my-3 font-semibold no-underline lg:text-[1.25Rem] md:text-[1rem] sm:text-[0.7rem] text-[#300b60]"
            >
              ${item.name}
            </p>
          </a>`)
  );
}
