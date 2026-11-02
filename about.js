
const count = 20;

const products = [
  {
    image: "./images/1.jpg",
    price: "29 000",
    oldPrice: "38 000",
    monthly: "2 054 сум/мес",
    name: "Очиститель двигателя Axma Avtoproseries, 600 г",
    rating: "4.8",
    reviews: "628 отзывов",
    badge: "ГАРАНТИЯ НИЗКОЙ ЦЕНЫ"
  },
  {
    image: "./images/2.jpg",
    price: "37 990",
    oldPrice: "86 210",
    monthly: "2 691 сум/мес",
    name: "Подводка водостойкая для глаз Dip Eyeliner",
    rating: "4.9",
    reviews: "2973 отзыва",
    badge: "ОРИГИНАЛ"
  },
  {
    image: "./images/3.jpg",
    price: "29 990",
    oldPrice: "39 000",
    monthly: "2 124 сум/мес",
    name: "Пшеничная мука MAKFA, высший сорт, 2 кг",
    rating: "4.9",
    reviews: "4810 отзывов",
    badge: "ГАРАНТИЯ НИЗКОЙ ЦЕНЫ"
  },
  {
    image: "./images/4.jpg",
    price: "55 000",
    oldPrice: "105 000",
    monthly: "3 896 сум/мес",
    name: "Шорты для девочек Diva Kids",
    rating: "5.0",
    reviews: "6 отзывов",
    badge: ""
  },
  {
    image: "./images/5.jpg",
    price: "289 500",
    oldPrice: "869 000",
    monthly: "20 506 сум/мес",
    name: "Кроссовки для мальчиков Adidas",
    rating: "4.5",
    reviews: "2 отзыва",
    badge: "ОРИГИНАЛ"
  }
];

const images = [
  "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
  "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600",
  "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600",
  "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600"
];

const container = document.querySelector("#products");

for (let i = 0; i < count; i++) {

  const product = products[i % products.length];

  const card = document.createElement("div");

  card.className = "w-full min-w-0 group";

  card.innerHTML = `
    <div class="relative w-full h-[350px] bg-[#f0f0f0] rounded-xl overflow-hidden">

      <img
        src="${images[i % images.length]}"
        alt="${product.name}"
        class="w-full h-full object-contain group-hover:scale-105 transition duration-300"
      >

      <button class="favorite absolute top-2 right-2 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center">
        <i class="fa-regular fa-heart"></i>
      </button>

      ${product.badge ? `
        <span class="absolute bottom-2 left-2 bg-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded">
          ${product.badge}
        </span>
      ` : ""}
    </div>

    <div class="pt-2">

      <h3 class="text-lg font-bold">${product.price}</h3>

      <p class="text-sm text-gray-400 line-through">
        ${product.oldPrice}
      </p>

      <span class="inline-block bg-yellow-300 text-sm px-1.5 py-0.5 rounded mt-1">
        ${product.monthly}
      </span>

      <p class="text-sm text-gray-700 mt-2 leading-5 h-10 overflow-hidden">
        ${product.name}
      </p>

      <div class="flex items-center gap-1 text-sm mt-1">
        <i class="fa-solid fa-star text-orange-400"></i>
        ${product.rating}
        <span class="text-gray-500">(${product.reviews})</span>
      </div>

      <button class="w-full h-10 mt-3 rounded-xl bg-[#7000ff] hover:bg-[#5800cc] text-white font-bold transition">
        <i class="fa-solid fa-bag-shopping"></i>
        Ertaga
      </button>

    </div>
  `;

  // Favorite
  const favorite = card.querySelector(".favorite");

  favorite.addEventListener("click", () => {
    const icon = favorite.querySelector("i");

    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
    icon.classList.toggle("text-red-500");
  });

  container.appendChild(card);
}
