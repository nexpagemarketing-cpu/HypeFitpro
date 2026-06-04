/* ==========================================================================
   HYPEFIT - SHOPPING ENGINE & WHATSAPP CHECKOUT CONTROLLER
   ========================================================================== */

/* --- 1. PRODUCT DATABASE --- */
const RAW_PRODUCTS_DATA = [
  {
    "id": 1,
    "title": "Adidas Adizero Evo SL — Leveza, Performance e Conforto",
    "category": "performance",
    "price": 500.0,
    "oldPrice": null,
    "tag": "CORRIDA",
    "description": "O Adidas Adizero Evo SL combina tecnologia, conforto e design moderno para quem busca desempenho e estilo no dia a dia. Seu cabedal em malha técnica respirável proporciona ajuste leve e confortável, garantindo ventilação ideal durante o uso.\nA entressola com espuma Lightstrike Pro oferece amortecimento macio e alta responsividade, trazendo mais conforto para caminhadas, corridas e rotina intensa. O solado resistente garante ótima aderência e durabilidade, enquanto o visual esportivo premium transforma o modelo em uma excelente escolha para composições casuais e lifestyle.",
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-48-56(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-48-56(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-48-56(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-48-56(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-48-56.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-17-48-56.mp4"
      },
      {
        "name": "Chalk White",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-49-38(4).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-49-38(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-49-38(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-49-38(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-49-38(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-49-38(5).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-49-38.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-17-49-38.mp4"
      },
      {
        "name": "Obsidian Gray",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-17(3).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-17(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-17(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-17(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-17(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-17(5).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-17.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-37(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-37(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-37(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-37.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-56(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-56(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-56(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-56(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-56(5).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-50-56.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-17-50-17.mp4"
      },
      {
        "name": "Slate Blue",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-51-28(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-51-28(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-51-28(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-51-28(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-51-28(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-51-28.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-51-44(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-51-44(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-51-44(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-51-44.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-17-51-28.mp4"
      },
      {
        "name": "Aurora Green",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-52-37(4).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-52-37(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-52-37(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-52-37(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-52-37(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-52-37.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-17-52-37.mp4"
      },
      {
        "name": "Monochrome White",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-53-01(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-53-01(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-53-01(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-53-01(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-53-01.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-53-34.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-53-35(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-53-35(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-53-35(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-53-35(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-53-35.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-17-53-01(1).mp4"
      },
      {
        "name": "Midnight Onyx",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-13(2).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-13(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-13(10).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-13(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-13(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-13(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-13(5).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-13(6).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-13(7).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-13(8).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-13(9).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-28(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-28(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-28(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-28(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-28.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-46(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-46(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-46(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-54-46.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-17-54-13(1).mp4"
      },
      {
        "name": "Steel Gray",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-55-25(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-55-25(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-55-25.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-55-57(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-55-57(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-55-57(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-55-57(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-55-57(5).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-55-57(6).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-55-57.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-17-55-25.mp4"
      },
      {
        "name": "Sunset Orange",
        "hex": "#d4af37",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-56-42(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-56-42(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-56-42(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-56-42(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-56-42(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-56-42(5).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-56-42(6).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-56-42.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-17-56-42.mp4"
      },
      {
        "name": "Volt Green",
        "hex": "#b2533e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-13(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-13(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-13(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-13(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-47(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-47(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-47(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-47(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-47(5).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-47(6).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-47(7).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-47(8).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-57-47.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-17-57-47.mp4"
      },
      {
        "name": "Olive Cargo",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-04(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-04(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-04(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-04(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-04(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-04.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-35(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-35(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-35(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-35(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-35(5).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-35(6).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-35(7).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-35(8).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-35.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-52(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-52(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-52(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-52(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-58-52.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-17-58-35.mp4"
      },
      {
        "name": "Taupe Sand",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-59-13(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-59-13(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-59-13(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-59-13(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-59-13(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-59-13(5).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-59-13(6).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-59-13(7).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-59-13(8).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-59-13.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-17-59-13(1).mp4"
      },
      {
        "name": "Navy Classic",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-00-15(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-00-15(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-00-15(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-00-15(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-00-15(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-00-15.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-00-59(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-00-59(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-00-59.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-18-00-59.mp4"
      },
      {
        "name": "Crimson Red",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-01-13(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-01-13(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-01-13(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-01-13(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-01-13(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-01-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-01-49(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-01-49(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-01-49(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-01-49(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-01-49.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/VIDEO-2026-05-25-18-01-49.mp4"
      },
      {
        "name": "Silver Metallic",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-02-43(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-02-43(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-02-43(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-02-43(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-02-43(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-02-43.jpg"
        ],
        "video": null
      },
      {
        "name": "Golden Shadow",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-03-18(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-03-18(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-03-18(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-03-18(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-03-18(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-18-03-18.jpg"
        ],
        "video": null
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-48-56(1).jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-48-56(2).jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-48-56(3).jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Adidas Adizero Evo SL/PHOTO-2026-05-25-17-48-56.jpg"
    ]
  },
  {
    "id": 2,
    "title": "Adidas Campus 00s — Estilo Retrô e Conforto Casual",
    "category": "lifestyle",
    "price": 300.0,
    "oldPrice": 360.0,
    "tag": "RETRO",
    "description": "O Adidas Campus 00s traz a combinação perfeita entre visual retrô, conforto e autenticidade para o dia a dia. Inspirado na cultura skate e streetwear dos anos 2000, o modelo apresenta design robusto e moderno, ideal para compor looks urbanos e casuais.\nSeu cabedal oferece toque macio e ajuste confortável, enquanto o solado resistente garante durabilidade e ótima aderência. As clássicas três listras laterais reforçam a identidade icônica da Adidas, tornando o Campus 00s uma escolha versátil e estilosa para qualquer ocasião.",
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-09-14-44-24.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-09-14-44-24.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-09-14-44-26.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-09-14-44-27.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-09-14-44-29.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/VIDEO-2026-03-09-14-44-34.mp4"
      },
      {
        "name": "Chalk White",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-08-58-55.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-08-58-55.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-08-58-56.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-08-58-57.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-08-58-58.jpg"
        ],
        "video": null
      },
      {
        "name": "Obsidian Gray",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-08-59-00.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-08-59-00.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-08-59-01.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/VIDEO-2026-03-12-08-59-02.mp4"
      },
      {
        "name": "Slate Blue",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-00-37.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-00-37.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-00-40.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-00-42.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-00-44.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-00-47.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-00-50.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-00-52.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/VIDEO-2026-03-12-09-00-54.mp4"
      },
      {
        "name": "Aurora Green",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-02-58.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-02-58.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-02-59.jpg"
        ],
        "video": null
      },
      {
        "name": "Monochrome White",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-03-00.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-03-00.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-03-01.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-03-02.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-03-04.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-03-05.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/VIDEO-2026-03-12-09-03-06.mp4"
      },
      {
        "name": "Midnight Onyx",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-12-37.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-12-37.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-12-38.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-12-40.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-12-41.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-12-09-12-42.jpg"
        ],
        "video": null
      },
      {
        "name": "Steel Gray",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-01-11-11-29.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-01-11-11-29.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-01-11-11-30.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-01-11-11-31(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-01-11-11-31.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-01-11-11-32.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-01-11-11-33(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-01-11-11-33.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/VIDEO-2026-04-01-11-11-34.mp4"
      },
      {
        "name": "Sunset Orange",
        "hex": "#d4af37",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-02-14-59-43.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-02-14-59-43.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-02-14-59-44.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-02-14-59-45.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-02-14-59-46(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-02-14-59-46.jpg"
        ],
        "video": null
      },
      {
        "name": "Volt Green",
        "hex": "#b2533e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-08-16-23-18.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-08-16-23-18.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-08-16-23-19.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-08-16-23-20.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-08-16-23-21(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-08-16-23-21.jpg"
        ],
        "video": null
      },
      {
        "name": "Olive Cargo",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-23-09-03-59.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-23-09-03-59.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/VIDEO-2026-04-23-09-03-58.mp4"
      },
      {
        "name": "Taupe Sand",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-23-09-04-00.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-23-09-04-00.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-04-23-09-04-01.jpg"
        ],
        "video": null
      },
      {
        "name": "Navy Classic",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-06-07-26-24.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-06-07-26-24.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-06-07-26-26.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-06-07-26-27.jpg"
        ],
        "video": null
      },
      {
        "name": "Crimson Red",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-15-16-36-54.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-15-16-36-54.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-15-16-36-55.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-15-16-36-56.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-15-16-36-57.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-15-16-36-58.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-15-16-36-59.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/VIDEO-2026-05-15-16-36-57.mp4"
      },
      {
        "name": "Silver Metallic",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-15-16-37-00(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-15-16-37-00(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-15-16-37-00.jpg"
        ],
        "video": null
      },
      {
        "name": "Golden Shadow",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-21-16-16-12.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-21-16-16-12.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-21-16-16-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-21-16-16-14.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-21-16-16-16.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/VIDEO-2026-05-21-16-16-15.mp4"
      },
      {
        "name": "Cream Linen",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-25-09-21-22.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-25-09-21-22.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-25-09-21-24.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-25-09-21-26.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-25-09-21-27.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-25-09-21-28.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-05-25-09-21-29.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/VIDEO-2026-05-25-09-21-30.mp4"
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-09-14-44-24.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-09-14-44-26.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-09-14-44-27.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Adidas Campus/PHOTO-2026-03-09-14-44-29.jpg"
    ]
  },
  {
    "id": 3,
    "title": "Mizuno — Tecnologia, Estilo e Máximo Conforto",
    "category": "sneakers",
    "price": 350.0,
    "oldPrice": null,
    "tag": "SNEAKERS",
    "description": "O Mizuno combina visual moderno, tecnologia avançada e conforto premium para quem busca desempenho e estilo no dia a dia. Seu cabedal oferece excelente respirabilidade e ajuste confortável, enquanto a construção robusta garante maior estabilidade durante o uso.\n\nEquipado com a tradicional tecnologia Wave, o modelo entrega amortecimento eficiente, absorção de impacto e sensação de conforto prolongado. O solado resistente proporciona ótima tração e durabilidade, tornando o tênis ideal para composições casuais, streetwear e lifestyle esportivo.",
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-09-16-39-12.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-09-16-39-12.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-09-16-39-14.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-09-16-39-15.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-09-16-39-16.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-09-16-39-17.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-09-16-39-20.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/VIDEO-2026-03-09-16-39-19.mp4"
      },
      {
        "name": "Chalk White",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-18-09-03-33.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-18-09-03-33.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-18-09-03-34.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-18-09-03-36.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-18-09-03-37.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-18-09-03-38.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/VIDEO-2026-03-18-09-03-39.mp4"
      },
      {
        "name": "Obsidian Gray",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-11-52-29.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-11-52-29.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-11-52-31.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-11-52-32(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-11-52-32.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-11-52-34.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/VIDEO-2026-03-25-11-52-36.mp4"
      },
      {
        "name": "Slate Blue",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-12-15-10(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-12-15-10(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-12-15-10.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-12-15-11(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-12-15-11.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-12-15-12(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-12-15-12.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-12-15-13(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-25-12-15-13.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/VIDEO-2026-03-25-12-15-13(1).mp4"
      },
      {
        "name": "Aurora Green",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-04-17-12-08-17.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-04-17-12-08-17.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-04-17-12-08-19.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-04-17-12-08-20.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-04-17-12-08-21.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/VIDEO-2026-04-17-12-08-22.mp4"
      },
      {
        "name": "Monochrome White",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-15-12-13-28.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-15-12-13-28.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-15-12-13-30.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-15-12-13-31.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-15-12-13-33.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-15-12-13-35.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/VIDEO-2026-05-15-12-13-32.mp4"
      },
      {
        "name": "Midnight Onyx",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-14-37.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-14-37.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-14-38.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-14-39.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-14-40.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-14-41.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-14-43.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/VIDEO-2026-05-25-11-14-42.mp4"
      },
      {
        "name": "Steel Gray",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-19-20.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-19-20.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-19-21.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-19-22.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-19-23.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/VIDEO-2026-05-25-11-19-25.mp4"
      },
      {
        "name": "Sunset Orange",
        "hex": "#d4af37",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-26-43.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-26-43.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-26-44.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-26-45.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-05-25-11-26-46.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno/VIDEO-2026-05-25-11-26-47.mp4"
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-09-16-39-12.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-09-16-39-14.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-09-16-39-15.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-09-16-39-16.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-09-16-39-17.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Mizuno/PHOTO-2026-03-09-16-39-20.jpg"
    ]
  },
  {
    "id": 4,
    "title": "Mizuno Neo Vista 2 — Performance, Leveza e Máximo Conforto",
    "category": "performance",
    "price": 400.0,
    "oldPrice": 480.0,
    "tag": "MÁXIMO CONFORTO",
    "description": "O Mizuno Neo Vista 2 foi desenvolvido para oferecer alta performance, conforto e tecnologia avançada em cada passada. Com design moderno e construção leve, o modelo proporciona excelente respirabilidade e ajuste confortável para treinos, corridas e uso diário.\nSeu sistema de amortecimento garante maior absorção de impacto e resposta eficiente, trazendo sensação de maciez e estabilidade durante o uso. O solado resistente oferece ótima tração e durabilidade, enquanto o visual esportivo premium transforma o Neo Vista 2 em uma escolha ideal para quem busca desempenho e estilo ao mesmo tempo.",
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-04-01-11-00-00.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-04-01-11-00-00.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-04-01-11-00-02.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-04-01-11-00-03.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/VIDEO-2026-04-01-11-00-03.mp4"
      },
      {
        "name": "Chalk White",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-04-29-12-05-03.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-04-29-12-05-03.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-04-29-12-05-05.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-04-29-12-05-07.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/VIDEO-2026-04-29-12-05-08.mp4"
      },
      {
        "name": "Obsidian Gray",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-11-17-42-03.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-11-17-42-03.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-11-17-42-06.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-11-17-42-08.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-11-17-42-11.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-11-17-42-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-11-17-42-15.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/VIDEO-2026-05-11-17-42-16.mp4"
      },
      {
        "name": "Slate Blue",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-18-12-59-58(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-18-12-59-58(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-18-12-59-58.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-18-12-59-59(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-18-12-59-59.jpg"
        ],
        "video": null
      },
      {
        "name": "Aurora Green",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-18-13-00-00(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-18-13-00-00(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-18-13-00-00.jpg"
        ],
        "video": null
      },
      {
        "name": "Monochrome White",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-46-09.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-46-09.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-46-11(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-46-11.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-46-12.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-46-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-46-14.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-46-15.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/VIDEO-2026-05-19-16-46-16.mp4"
      },
      {
        "name": "Midnight Onyx",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-51-31.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-51-31.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-51-33.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-51-35.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-51-37.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-51-38.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-05-19-16-51-39.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/VIDEO-2026-05-19-16-51-41.mp4"
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-04-01-11-00-00.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-04-01-11-00-02.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Mizuno neo vista 2/PHOTO-2026-04-01-11-00-03.jpg"
    ]
  },
  {
    "id": 5,
    "title": "New Balance 9060 Premium",
    "category": "sneakers",
    "price": 350.0,
    "oldPrice": null,
    "tag": "RETRO",
    "description": "O New Balance 9060 Premium traz o perfeito equilíbrio entre visual contemporâneo, conforto e alta durabilidade para o seu dia a dia. Confeccionado com materiais selecionados de padrão internacional, garante estabilidade e amortecimento premium para quem não abre mão do estilo.",
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-28.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-28.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-31.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-33.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-35.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-37.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-38.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-43.jpg"
        ],
        "video": null
      },
      {
        "name": "Chalk White",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-20-16-49-43.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-20-16-49-43.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-20-16-49-44.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-20-16-49-45.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-20-16-49-47.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-20-16-49-49.jpg"
        ],
        "video": null
      },
      {
        "name": "Obsidian Gray",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-21-10-29-57.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-21-10-29-57.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-21-10-29-58.jpg"
        ],
        "video": null
      },
      {
        "name": "Slate Blue",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-21-10-30-00.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-21-10-30-00.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-21-10-30-02.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-21-10-30-04.jpg"
        ],
        "video": null
      },
      {
        "name": "Aurora Green",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-43-47.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-43-47.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-43-49.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-43-51.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-43-53.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-43-56.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/New Balance/VIDEO-2026-05-22-10-43-57.mp4"
      },
      {
        "name": "Monochrome White",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-46-08.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-46-08.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-46-09.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-46-10.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-46-11.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-46-12.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-46-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-10-46-14.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/New Balance/VIDEO-2026-05-22-10-46-15.mp4"
      },
      {
        "name": "Midnight Onyx",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-11-48-15.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-11-48-15.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-11-48-17.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-11-48-19.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-11-48-21.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-11-48-22.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-11-48-24.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-11-48-26.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-11-48-27.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-11-48-29.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-11-48-30.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-11-48-31.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-11-48-33.jpg"
        ],
        "video": null
      },
      {
        "name": "Steel Gray",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-12-45-03.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-12-45-03.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-12-45-05.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-12-45-06(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-12-45-06.jpg"
        ],
        "video": null
      },
      {
        "name": "Sunset Orange",
        "hex": "#d4af37",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-14-29-54.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-14-29-54.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-14-29-55.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-14-29-57.jpg"
        ],
        "video": null
      },
      {
        "name": "Volt Green",
        "hex": "#b2533e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-14-30-00.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-14-30-00.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-14-30-02.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-14-30-05.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-14-30-07.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/New Balance/VIDEO-2026-05-22-14-30-09.mp4"
      },
      {
        "name": "Olive Cargo",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-15-53-05.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-15-53-05.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-15-53-06.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-15-53-07.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-15-53-09.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-22-15-53-10.jpg"
        ],
        "video": null
      },
      {
        "name": "Taupe Sand",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-09-47-48.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-09-47-48.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-09-47-50.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-09-47-53.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/New Balance/VIDEO-2026-05-25-09-47-55.mp4"
      },
      {
        "name": "Navy Classic",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-09-50-36.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-09-50-36.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-09-50-37.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-09-50-38.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-09-50-39.jpg"
        ],
        "video": null
      },
      {
        "name": "Crimson Red",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-11-31.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-11-31.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-11-33.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-11-35.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-11-37.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-11-38.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-11-40.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/New Balance/VIDEO-2026-05-25-12-11-42.mp4"
      },
      {
        "name": "Silver Metallic",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-46-11.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-46-11.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-46-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-46-14.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-46-16.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-46-17.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-46-19.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-25-12-46-20.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/New Balance/VIDEO-2026-05-25-12-46-22.mp4"
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-28.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-31.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-33.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-35.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-37.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-38.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/New Balance/PHOTO-2026-05-19-13-24-43.jpg"
    ]
  },
  {
    "id": 6,
    "title": "Nike Alphafly 3 Premium",
    "category": "performance",
    "price": 899.9,
    "oldPrice": 1079.88,
    "tag": "ALTA PERFORMANCE",
    "description": "O Nike Alphafly 3 Premium traz o perfeito equilíbrio entre visual contemporâneo, conforto e alta durabilidade para o seu dia a dia. Confeccionado com materiais selecionados de padrão internacional, garante estabilidade e amortecimento premium para quem não abre mão do estilo.",
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/PHOTO-2026-03-16-15-20-53.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/PHOTO-2026-03-16-15-20-53.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/PHOTO-2026-03-16-15-20-56.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/PHOTO-2026-03-16-15-20-58.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/VIDEO-2026-03-16-15-20-51.mp4"
      },
      {
        "name": "Chalk White",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/PHOTO-2026-03-16-15-27-40.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/PHOTO-2026-03-16-15-27-40.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/PHOTO-2026-03-16-15-27-43.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/PHOTO-2026-03-16-15-27-47.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/PHOTO-2026-03-16-15-27-50.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/VIDEO-2026-03-16-15-27-37.mp4"
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/PHOTO-2026-03-16-15-20-53.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/PHOTO-2026-03-16-15-20-56.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Nike alpha/PHOTO-2026-03-16-15-20-58.jpg"
    ]
  },
  {
    "id": 7,
    "title": "Nike Dunk Low — Estilo Urbano e Conforto Premium",
    "category": "sneakers",
    "price": 350.0,
    "oldPrice": null,
    "tag": "CLASSIC",
    "description": "O Nike Dunk Low combina design icônico, conforto e versatilidade em um modelo perfeito para o dia a dia. Produzido com materiais premium, o tênis conta com cabedal resistente em couro, oferecendo durabilidade e acabamento sofisticado.\nSeu visual de cano baixo proporciona ajuste confortável e estilo moderno, enquanto o clássico logo Swoosh nas laterais reforça a identidade autêntica da Nike. O solado de borracha garante ótima aderência e estabilidade, tornando o modelo ideal para composições streetwear, casuais e lifestyle.",
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-31-19.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-31-19.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-31-22.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-31-29.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-31-32.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-31-40.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-04-14-07-31-13.mp4"
      },
      {
        "name": "Chalk White",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-36-23.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-36-23.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-36-25.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-36-27.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-36-28.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-04-14-07-36-22.mp4"
      },
      {
        "name": "Obsidian Gray",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-17-10-21-32.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-17-10-21-32.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-17-10-21-35.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-17-10-21-38.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-17-10-21-40.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-17-10-21-43.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-17-10-21-45.jpg"
        ],
        "video": null
      },
      {
        "name": "Slate Blue",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-17-10-50-40.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-17-10-50-40.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-17-10-50-42.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-17-10-50-46.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-17-10-50-49.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-17-10-50-54.jpg"
        ],
        "video": null
      },
      {
        "name": "Aurora Green",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-20-10-33-29.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-20-10-33-29.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-20-10-33-32.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-20-10-33-34.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-20-10-33-37.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-20-10-33-39.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-04-20-10-33-41.mp4"
      },
      {
        "name": "Monochrome White",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-20-12-29-56.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-20-12-29-56.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-20-12-29-58(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-20-12-29-58.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-20-12-29-59.jpg"
        ],
        "video": null
      },
      {
        "name": "Midnight Onyx",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-20-12-30-00.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-20-12-30-00.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-04-20-12-30-01.mp4"
      },
      {
        "name": "Steel Gray",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-23-09-02-17(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-23-09-02-17(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-23-09-02-17.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-23-09-02-18.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-23-09-02-19.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-04-23-09-02-15.mp4"
      },
      {
        "name": "Sunset Orange",
        "hex": "#d4af37",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-07-24-32.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-07-24-32.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-07-24-38.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-07-24-41.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-07-24-44.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-07-24-46.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-07-24-48.jpg"
        ],
        "video": null
      },
      {
        "name": "Volt Green",
        "hex": "#b2533e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-13-10-01.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-13-10-01.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-13-10-03.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-13-10-04.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-13-10-06.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-13-10-07.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-13-10-08.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-13-10-09.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-24-13-10-10.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-04-24-13-10-12.mp4"
      },
      {
        "name": "Olive Cargo",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-27-15-33-17.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-27-15-33-17.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-27-15-33-20.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-27-15-33-21.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-27-15-33-25.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-27-15-33-30.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-27-15-33-32.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-04-27-15-33-23.mp4"
      },
      {
        "name": "Taupe Sand",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-28-10-16-27.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-28-10-16-27.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-28-10-16-28(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-28-10-16-28.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-04-28-10-16-26.mp4"
      },
      {
        "name": "Navy Classic",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-28-18-01-06.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-28-18-01-06.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-28-18-01-08.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-28-18-01-11.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-28-18-01-12(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-28-18-01-12.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-28-18-01-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-28-18-01-15.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-04-28-18-01-15.mp4"
      },
      {
        "name": "Crimson Red",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-07-14-32-35.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-07-14-32-35.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-07-14-32-40.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-07-14-32-54.jpg"
        ],
        "video": null
      },
      {
        "name": "Silver Metallic",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-08-06-38-13.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-08-06-38-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-08-06-38-24.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-08-06-38-26.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-08-06-38-27(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-08-06-38-27.jpg"
        ],
        "video": null
      },
      {
        "name": "Golden Shadow",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-10-02-20.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-10-02-20.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-10-02-22.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-10-02-23.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-10-02-25.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-05-12-10-02-26.mp4"
      },
      {
        "name": "Cream Linen",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-10-37.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-10-37.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-10-38.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-10-39.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-10-40.jpg"
        ],
        "video": null
      },
      {
        "name": "Lavender Ash",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-38-11.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-38-11.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-38-12.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-38-19.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-38-22.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-38-23.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-38-25.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-05-12-17-38-21.mp4"
      },
      {
        "name": "Teal Fusion",
        "hex": "#d4af37",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-48-40.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-48-40.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-48-42.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-48-44.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-48-45.jpg"
        ],
        "video": null
      },
      {
        "name": "Dusty Pink",
        "hex": "#b2533e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-55-03.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-55-03.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-55-04.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-55-06.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-55-07.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-55-08(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-55-08.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-12-17-55-10.jpg"
        ],
        "video": null
      },
      {
        "name": "Carbon Black 2",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-32-48.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-32-48.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-32-50.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-32-51.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-32-55.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-32-56.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-32-58.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-05-13-10-32-53.mp4"
      },
      {
        "name": "Chalk White 2",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-52-06.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-52-06.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-52-08.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-52-09.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-52-11.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-05-13-10-52-13.mp4"
      },
      {
        "name": "Obsidian Gray 2",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-55-17.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-55-17.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-55-18.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-55-19.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-55-20.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-55-21.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-10-55-22.jpg"
        ],
        "video": null
      },
      {
        "name": "Slate Blue 2",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-11-11-44.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-11-11-44.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-11-11-45(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-11-11-45.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-11-11-47.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-13-11-11-48.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-05-13-11-11-46.mp4"
      },
      {
        "name": "Aurora Green 2",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-15-10-26-28.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-15-10-26-28.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-15-10-26-29.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-15-10-26-30.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-15-10-26-32.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-15-10-26-34.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-05-15-10-26-36.mp4"
      },
      {
        "name": "Steel Gray 2",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-22-15-53-24.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-22-15-53-24.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-22-15-53-26.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-22-15-53-28.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-22-15-53-30.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-05-22-15-53-31.mp4"
      },
      {
        "name": "Sunset Orange 2",
        "hex": "#d4af37",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-22-15-54-03.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-22-15-54-03.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-22-15-54-04.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-22-15-54-06.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-22-15-54-08.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-05-22-15-54-10.mp4"
      },
      {
        "name": "Volt Green 2",
        "hex": "#b2533e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-25-10-33-25.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-25-10-33-25.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-25-10-33-26.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-25-10-33-27(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-25-10-33-27.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-25-10-33-28.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-25-10-33-29.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/VIDEO-2026-05-25-10-33-24.mp4"
      },
      {
        "name": "Olive Cargo 2",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-25-14-59-43.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-25-14-59-43.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-25-14-59-44.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-25-14-59-45(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-25-14-59-45.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-05-25-14-59-46.jpg"
        ],
        "video": null
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-31-19.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-31-22.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-31-29.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-31-32.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Nike Dunk low/PHOTO-2026-04-14-07-31-40.jpg"
    ]
  },
  {
    "id": 8,
    "title": "Nike Zoom Vomero 5 Premium — Conforto, Estilo e Performance",
    "category": "performance",
    "price": 650.0,
    "oldPrice": 780.0,
    "tag": "PREMIUM",
    "description": "O Nike Vomero Premium combina tecnologia, conforto e design moderno em um único modelo. Desenvolvido para proporcionar máximo amortecimento e leveza, o tênis conta com cabedal respirável em mesh, estrutura reforçada para maior estabilidade e solado resistente com excelente tração.\nSeu visual sofisticado inspirado no running retrô transforma o modelo em uma escolha perfeita tanto para o dia a dia quanto para composições streetwear e lifestyle. Ideal para quem busca conforto premium sem abrir mão do estilo.",
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Lilac Lavender",
        "hex": "#b0a2cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-17(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-17(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-17(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-17(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-17.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/VIDEO-2026-05-25-17-28-19.mp4"
      },
      {
        "name": "Carbon Black",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-18(5).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-18(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-18(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-18(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-18(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-18(5).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-18(6).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-18(7).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-18.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/VIDEO-2026-05-25-17-28-20.mp4"
      },
      {
        "name": "Platinum Grey",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-19(2).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-19(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-19(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-19(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-19(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-19(5).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-19(6).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-19(7).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-19.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/VIDEO-2026-05-25-17-28-21.mp4"
      },
      {
        "name": "Silver Metallic",
        "hex": "#c8c9c7",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-20.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-20.jpg"
        ],
        "video": null
      },
      {
        "name": "Sand Beige",
        "hex": "#d7ccc8",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-21.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-21(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-21.jpg"
        ],
        "video": null
      },
      {
        "name": "Cocoa Brown",
        "hex": "#5d4037",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-22(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-22(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-22(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-22(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-22.jpg"
        ],
        "video": null
      },
      {
        "name": "Chalk White",
        "hex": "#f5f5f5",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-23(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-23(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-23(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-23(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-23.jpg"
        ],
        "video": null
      },
      {
        "name": "Sail White",
        "hex": "#fffaf0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-31-53(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-31-53(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-31-53(2).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-31-53(3).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-31-53(4).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-31-53.jpg"
        ],
        "video": null
      },
      {
        "name": "Sail Neon Orange",
        "hex": "#ff6f00",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-27-21-05-38.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-27-21-05-38.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-27-21-05-38(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-27-21-05-38(2).jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/VIDEO-2026-05-27-21-05-38.mp4"
      },
      {
        "name": "Midnight Black",
        "hex": "#111111",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-27-21-05-40.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-27-21-05-40.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/VIDEO-2026-05-27-21-05-40.mp4"
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-17(1).jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-18(1).jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-19(1).jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-20.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-21(1).jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-22(1).jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-28-23(1).jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Nike Vomero/PHOTO-2026-05-25-17-31-53(1).jpg"
    ]
  },
  {
    "id": 9,
    "title": "Nike Air Force 1 — Clássico Atemporal e Conforto Premium",
    "category": "sneakers",
    "price": 300.0,
    "oldPrice": null,
    "tag": "ICÔNICO",
    "description": "O Nike Air Force 1 é um dos modelos mais icônicos da Nike, combinando estilo urbano, conforto e versatilidade em um design atemporal. Produzido com materiais resistentes e acabamento premium, o tênis oferece durabilidade e ajuste confortável para o uso diário.\nA tecnologia de amortecimento Air proporciona maior conforto e absorção de impacto, enquanto o solado de borracha garante excelente aderência e estabilidade. Seu visual clássico transforma o Air Force 1 em uma escolha perfeita para composições casuais, streetwear e lifestyle.",
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-36.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-36.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-38.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-39.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-41.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-42.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-44.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-45.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-03-26-08-43-46.mp4"
      },
      {
        "name": "Chalk White",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-09-14-15-25.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-09-14-15-25.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-09-14-15-27.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-09-14-15-31.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-09-14-15-36.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-09-14-15-41.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-04-09-14-15-38.mp4"
      },
      {
        "name": "Obsidian Gray",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-00-13.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-00-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-00-15.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-00-16.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-00-17.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-00-18.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-00-19.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-00-21.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-04-27-10-00-20.mp4"
      },
      {
        "name": "Slate Blue",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-12-49(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-12-49(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-12-49.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-12-50(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-12-50.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-12-52(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-12-52.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-12-53(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-12-53.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-12-54(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-12-54.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-12-55(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-27-10-12-55.jpg"
        ],
        "video": null
      },
      {
        "name": "Aurora Green",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-28-17-39-25.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-28-17-39-25.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-28-17-39-28.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-28-17-39-32.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-04-28-17-39-34.mp4"
      },
      {
        "name": "Monochrome White",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-29-16-35-36.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-04-29-16-35-36.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-04-29-16-35-33.mp4"
      },
      {
        "name": "Midnight Onyx",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-05-10-51-05.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-05-10-51-05.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-05-10-51-09.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-05-10-51-12.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-05-10-51-15.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-05-10-51-21.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-05-10-51-27.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-05-10-51-30.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-05-10-51-33.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-05-10-51-37.jpg"
        ],
        "video": null
      },
      {
        "name": "Steel Gray",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-06-07-07-43.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-06-07-07-43.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-06-07-07-45.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-06-07-07-51.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-06-07-07-52.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-05-06-07-07-48.mp4"
      },
      {
        "name": "Sunset Orange",
        "hex": "#d4af37",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-07-07-01-50.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-07-07-01-50.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-07-07-01-53.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-07-07-01-57.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-05-07-07-01-47.mp4"
      },
      {
        "name": "Volt Green",
        "hex": "#b2533e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-08-14-50-05.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-08-14-50-05.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-08-14-50-15.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-08-14-50-18.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-08-14-50-54.jpg"
        ],
        "video": null
      },
      {
        "name": "Olive Cargo",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-08-14-51-05.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-08-14-51-05.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-08-14-51-06.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-08-14-51-08.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-08-14-51-09.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-08-14-51-10.jpg"
        ],
        "video": null
      },
      {
        "name": "Taupe Sand",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-12-09-05-36.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-12-09-05-36.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-12-09-05-40.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-12-09-05-42.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-05-12-09-05-45.mp4"
      },
      {
        "name": "Navy Classic",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-12-17-25-25.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-12-17-25-25.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-12-17-25-26.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-12-17-25-28.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-12-17-25-29.jpg"
        ],
        "video": null
      },
      {
        "name": "Crimson Red",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-15-10-28-51.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-15-10-28-51.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-15-10-28-53.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-15-10-28-56.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-05-15-10-28-58.mp4"
      },
      {
        "name": "Silver Metallic",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-15-10-29-06.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-15-10-29-06.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-15-10-29-08.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-05-15-10-29-00.mp4"
      },
      {
        "name": "Golden Shadow",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-53-25.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-53-25.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-53-26.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-53-27.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-53-28.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-53-29.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-05-18-11-53-30.mp4"
      },
      {
        "name": "Cream Linen",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-55-46.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-55-46.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-55-47.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-55-48.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-55-50.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-55-51.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-55-52.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-55-53.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-11-55-54.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-05-18-11-55-55.mp4"
      },
      {
        "name": "Lavender Ash",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-15-24-46.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-15-24-46.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-15-24-47.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-15-24-49.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-15-24-50.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-15-24-52.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-15-24-53.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-15-24-56.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-18-15-24-57.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-05-18-15-24-54.mp4"
      },
      {
        "name": "Teal Fusion",
        "hex": "#d4af37",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-19-12-33-49.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-19-12-33-49.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-19-12-33-51.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-19-12-33-54.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-19-12-33-55.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-19-12-33-56.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-19-12-33-58.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-05-19-12-33-53.mp4"
      },
      {
        "name": "Dusty Pink",
        "hex": "#b2533e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-11-40-49.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-11-40-49.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-11-40-51.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-11-40-53.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-11-40-55.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-11-40-59.jpg"
        ],
        "video": null
      },
      {
        "name": "Carbon Black 2",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-11-41-02.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-11-41-02.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-05-20-11-41-29.mp4"
      },
      {
        "name": "Chalk White 2",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-12-02-45.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-12-02-45.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-12-02-47.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-12-02-49.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-05-20-12-02-50.mp4"
      },
      {
        "name": "Obsidian Gray 2",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-16-41-40.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-16-41-40.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-16-41-41.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-16-41-43.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-16-41-45.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/VIDEO-2026-05-20-16-41-47.mp4"
      },
      {
        "name": "Slate Blue 2",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-17-05-52.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-17-05-52.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-17-05-53.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-17-05-55.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-17-05-57.jpg"
        ],
        "video": null
      },
      {
        "name": "Aurora Green 2",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-17-29-50.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-17-29-50.jpg"
        ],
        "video": null
      },
      {
        "name": "Monochrome White 2",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-17-30-22.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-17-30-22.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-17-30-26.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-17-30-28.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-20-17-30-30.jpg"
        ],
        "video": null
      },
      {
        "name": "Midnight Onyx 2",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-25-08-26-08.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-25-08-26-08.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-25-08-26-10.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-25-08-26-11.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-05-25-08-26-13.jpg"
        ],
        "video": null
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-36.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-38.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-39.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-41.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-42.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-44.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Niker Air Force/PHOTO-2026-03-26-08-43-45.jpg"
    ]
  },
  {
    "id": 10,
    "title": "Olympikus Corre — Leveza, Performance e Conforto",
    "category": "performance",
    "price": 300.0,
    "oldPrice": 360.0,
    "tag": "LEVEZA",
    "description": "O Olympikus Corre foi desenvolvido para entregar máximo conforto, leveza e desempenho em corridas, treinos e no dia a dia. Com design moderno e construção respirável, o modelo oferece ajuste confortável e sensação de estabilidade durante o uso.\nSeu sistema de amortecimento proporciona excelente absorção de impacto e maior resposta a cada passada, garantindo conforto prolongado e desempenho eficiente. O solado resistente oferece ótima aderência e durabilidade, tornando o Olympikus Corre uma excelente escolha para quem busca performance e estilo esportivo.",
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-04-22-17-45-34.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-04-22-17-45-34.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-04-22-17-45-36.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-04-22-17-45-45.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-04-22-17-45-48.jpg"
        ],
        "video": null
      },
      {
        "name": "Chalk White",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-13-13-17-33.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-13-13-17-33.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-13-13-17-34.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-13-13-17-35.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-13-13-17-37.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-13-13-17-38.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/VIDEO-2026-05-13-13-17-36.mp4"
      },
      {
        "name": "Obsidian Gray",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-13-43-15.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-13-43-15.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-13-43-17.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-13-43-18.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-13-43-19.jpg"
        ],
        "video": null
      },
      {
        "name": "Slate Blue",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-13-44-21.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-13-44-21.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-13-44-23.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-13-44-25.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-13-44-27.jpg"
        ],
        "video": null
      },
      {
        "name": "Aurora Green",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-16-45-07.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-16-45-07.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-16-45-08.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-16-45-10.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-15-16-45-13.jpg"
        ],
        "video": null
      },
      {
        "name": "Monochrome White",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-20-11-01-18(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-20-11-01-18(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-20-11-01-18.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/VIDEO-2026-05-20-11-01-16.mp4"
      },
      {
        "name": "Midnight Onyx",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-20-11-03-53.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-20-11-03-53.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-20-11-03-54.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-20-11-03-55.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-20-11-03-57(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-20-11-03-57.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/VIDEO-2026-05-20-11-03-58.mp4"
      },
      {
        "name": "Steel Gray",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-22-09-21-24.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-22-09-21-24.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-22-09-21-25.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-22-09-21-27.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-22-09-21-28.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-05-22-09-21-29.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/VIDEO-2026-05-22-09-21-31.mp4"
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-04-22-17-45-34.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-04-22-17-45-36.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-04-22-17-45-45.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Olimpikus/PHOTO-2026-04-22-17-45-48.jpg"
    ]
  },
  {
    "id": 11,
    "title": "Colar Multicamadas Prata 925 2.50MM— Elegância e Estilo Sofisticado",
    "category": "acessorios",
    "price": 100.0,
    "oldPrice": null,
    "tag": "PRATA 925",
    "description": "O colar multicamadas em prata 925 combina sofisticação, modernidade e versatilidade em uma peça elegante e cheia de personalidade. Com acabamento refinado e composição de correntes em diferentes camadas, o acessório proporciona um visual moderno e estiloso para diversas ocasiões.\nProduzido em prata esterlina 925, o modelo oferece brilho duradouro, resistência e excelente qualidade. Os pingentes delicados complementam o design sofisticado, tornando a peça perfeita para compor looks casuais, minimalistas ou mais elegantes.\npingente 50 reais",
    "sizes": [
      "Único"
    ],
    "colors": [
      {
        "name": "Prata Legítima",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Prata + pingente_/IMG_5382.WEBP",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Prata + pingente_/IMG_5382.WEBP",
          "produtos/drive-download-20260526T181408Z-3-001/Prata + pingente_/IMG_5383.WEBP"
        ],
        "video": null
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/Prata + pingente_/IMG_5382.WEBP",
      "produtos/drive-download-20260526T181408Z-3-001/Prata + pingente_/IMG_5383.WEBP"
    ]
  },
  {
    "id": 12,
    "title": "Reserva R-Broox — Estilo Casual e Conforto Moderno",
    "category": "lifestyle",
    "price": 400.0,
    "oldPrice": 480.0,
    "tag": "CASUAL",
    "description": "O Reserva R-Broox combina design contemporâneo, conforto e versatilidade em um modelo ideal para o dia a dia. Com visual moderno e acabamento premium, o tênis entrega autenticidade e praticidade para composições casuais e urbanas.\nSeu cabedal proporciona ajuste confortável e excelente durabilidade, enquanto o solado resistente garante estabilidade e aderência durante o uso. Leve e estiloso, o R-Broox é perfeito para quem busca um tênis confortável, versátil e alinhado às tendências atuais.",
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-03-58.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-03-58.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-03-59.jpg"
        ],
        "video": null
      },
      {
        "name": "Chalk White",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-04-00.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-04-00.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-04-01.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-04-02.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-04-03.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-04-04.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-04-54.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-04-55.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-04-56.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-04-57.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-04-58.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-04-59.jpg"
        ],
        "video": null
      },
      {
        "name": "Obsidian Gray",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-07-09-56-44.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-07-09-56-44.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-07-09-56-45.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-07-09-56-47.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-07-09-56-48.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/VIDEO-2026-04-07-09-56-49.mp4"
      },
      {
        "name": "Slate Blue",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-20-14-56-21.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-20-14-56-21.jpg"
        ],
        "video": null
      },
      {
        "name": "Aurora Green",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-20-15-54-15(1).jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-20-15-54-15(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-20-15-54-15.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-20-15-54-16.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/VIDEO-2026-04-20-15-54-17.mp4"
      },
      {
        "name": "Monochrome White",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-20-15-56-21.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-20-15-56-21.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-20-15-56-22.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-20-15-56-23.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/VIDEO-2026-04-20-15-56-24.mp4"
      },
      {
        "name": "Midnight Onyx",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-22-15-48-57.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-22-15-48-57.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-22-15-48-58.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/VIDEO-2026-04-22-15-48-55.mp4"
      },
      {
        "name": "Steel Gray",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-22-15-49-00.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-22-15-49-00.jpg"
        ],
        "video": null
      },
      {
        "name": "Sunset Orange",
        "hex": "#d4af37",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-30-07-27-50.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-30-07-27-50.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-30-07-27-52.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-04-30-07-27-54.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Reserva_/VIDEO-2026-04-30-07-27-51.mp4"
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-03-58.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Reserva_/PHOTO-2026-03-25-10-03-59.jpg"
    ]
  },
  {
    "id": 13,
    "title": "Vans Old Skool — Estilo Clássico e Conforto Urbano",
    "category": "sneakers",
    "price": 340.0,
    "oldPrice": null,
    "tag": "SKATE",
    "description": "O Vans Old Skool é um dos modelos mais icônicos da marca, combinando estilo urbano, versatilidade e conforto para o dia a dia. Com design clássico e visual atemporal, o tênis é perfeito para composições casuais, streetwear e lifestyle.\nSeu cabedal resistente proporciona durabilidade e ajuste confortável, enquanto o tradicional solado waffle oferece excelente aderência e estabilidade. A clássica faixa lateral da Vans reforça a autenticidade do modelo, tornando-o uma escolha indispensável para quem busca estilo e praticidade.",
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-09-11-43-18.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-09-11-43-18.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-09-11-43-20.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-09-11-43-21.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-09-11-43-23.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-09-11-43-24.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-09-11-43-25.jpg"
        ],
        "video": null
      },
      {
        "name": "Chalk White",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-17-12-27-09.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-17-12-27-09.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-17-12-27-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-17-12-27-16.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-17-12-27-20.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-17-12-27-24.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-17-12-27-27.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Vans/VIDEO-2026-04-17-12-27-31.mp4"
      },
      {
        "name": "Obsidian Gray",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-24-08-58-44.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-24-08-58-44.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-24-08-58-46.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-24-08-58-47.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-24-08-58-50.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-24-08-58-52.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Vans/VIDEO-2026-04-24-08-58-48.mp4"
      },
      {
        "name": "Slate Blue",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-11-34-58.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-11-34-58.jpg"
        ],
        "video": null
      },
      {
        "name": "Aurora Green",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-11-35-00.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-11-35-00.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-11-35-01(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-11-35-01.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-11-35-02.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-11-35-03.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-11-35-05.jpg"
        ],
        "video": null
      },
      {
        "name": "Monochrome White",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-16-20-13.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-16-20-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-16-20-21.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-16-20-33.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-27-16-20-49.jpg"
        ],
        "video": null
      },
      {
        "name": "Midnight Onyx",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-28-16-07-55.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-28-16-07-55.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-28-16-07-57.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-28-16-07-59.jpg"
        ],
        "video": null
      },
      {
        "name": "Steel Gray",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-28-16-08-02.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-28-16-08-02.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-28-16-08-05.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-28-16-08-07.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-28-16-08-10.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Vans/VIDEO-2026-04-28-16-08-13.mp4"
      },
      {
        "name": "Sunset Orange",
        "hex": "#d4af37",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-29-11-54-52.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-29-11-54-52.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-29-11-54-54.jpg"
        ],
        "video": null
      },
      {
        "name": "Volt Green",
        "hex": "#b2533e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-29-11-55-21.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-29-11-55-21.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-29-11-55-22.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-29-11-55-24.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-29-11-55-25.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-29-11-55-27.jpg"
        ],
        "video": null
      },
      {
        "name": "Olive Cargo",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-30-16-20-46.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-30-16-20-46.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-30-16-20-48.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-30-16-20-51.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-30-16-20-53.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Vans/VIDEO-2026-04-30-16-20-56.mp4"
      },
      {
        "name": "Taupe Sand",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-04-08-41-00.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-04-08-41-00.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-04-08-41-02.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-04-08-41-05.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-04-08-41-08.jpg"
        ],
        "video": null
      },
      {
        "name": "Navy Classic",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-06-18-06-39.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-06-18-06-39.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-06-18-06-40.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-06-18-06-41(1).jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-06-18-06-41.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-06-18-06-42.jpg"
        ],
        "video": null
      },
      {
        "name": "Crimson Red",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-13-10-32-22.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-13-10-32-22.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-13-10-32-24.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-05-13-10-32-26.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Vans/VIDEO-2026-05-13-10-32-27.mp4"
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-09-11-43-18.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-09-11-43-20.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-09-11-43-21.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-09-11-43-23.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-09-11-43-24.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Vans/PHOTO-2026-04-09-11-43-25.jpg"
    ]
  },
  {
    "id": 14,
    "title": "Vans Hylane — Estilo Skate e Conforto Casual",
    "category": "sneakers",
    "price": 350.0,
    "oldPrice": null,
    "tag": "URBANO",
    "description": "O Vans Hylane combina visual moderno, inspiração skate e conforto para o dia a dia. Com design robusto e acabamento premium, o modelo entrega autenticidade e versatilidade para composições casuais e streetwear.\nSeu cabedal resistente proporciona ajuste confortável e maior durabilidade, enquanto o solado em borracha garante excelente aderência e estabilidade durante o uso. A identidade clássica da Vans aparece nos detalhes do design, tornando o Hylane uma escolha perfeita para quem busca estilo urbano e conforto em qualquer ocasião.",
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-16-11-55-36.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-16-11-55-36.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-16-11-55-37.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-16-11-55-38.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-16-11-55-39.jpg"
        ],
        "video": null
      },
      {
        "name": "Chalk White",
        "hex": "#ffffff",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-22-16-25-46.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-22-16-25-46.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-22-16-25-47.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-22-16-25-49.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-22-16-25-50.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-22-16-25-52.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-22-16-25-53.jpg"
        ],
        "video": null
      },
      {
        "name": "Obsidian Gray",
        "hex": "#8c8c8c",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-04-09-07-04.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-04-09-07-04.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-04-09-07-06.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-04-09-07-08.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-04-09-07-09.jpg"
        ],
        "video": null
      },
      {
        "name": "Slate Blue",
        "hex": "#2d4a6b",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-11-16-24-23.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-11-16-24-23.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-11-16-24-25.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-11-16-24-26.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-11-16-24-27.jpg"
        ],
        "video": null
      },
      {
        "name": "Aurora Green",
        "hex": "#1b4d3e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-12-13-28-05.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-12-13-28-05.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-12-13-28-06.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-12-13-28-07.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/VIDEO-2026-05-12-13-28-08.mp4"
      },
      {
        "name": "Monochrome White",
        "hex": "#dcd6cd",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-13-13-56-51.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-13-13-56-51.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-13-13-56-53.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-13-13-56-57.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/VIDEO-2026-05-13-13-56-55.mp4"
      },
      {
        "name": "Midnight Onyx",
        "hex": "#3e473f",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-13-13-57-02.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-13-13-57-02.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/VIDEO-2026-05-13-13-57-00.mp4"
      },
      {
        "name": "Steel Gray",
        "hex": "#c0c0c0",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-15-15-40-03.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-15-15-40-03.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-15-15-40-05.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-15-15-40-06.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-15-15-40-07.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-15-15-40-08.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/VIDEO-2026-05-15-15-40-09.mp4"
      },
      {
        "name": "Sunset Orange",
        "hex": "#d4af37",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-09-45-40.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-09-45-40.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-09-45-41.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-09-45-42.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-09-45-43.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/VIDEO-2026-05-20-09-45-44.mp4"
      },
      {
        "name": "Volt Green",
        "hex": "#b2533e",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-10-57-43.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-10-57-43.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-10-57-45.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-10-57-46.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-10-57-47.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-10-57-48.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-10-57-49.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-10-57-50.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-10-57-51.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-10-57-52.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-20-10-57-53.jpg"
        ],
        "video": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/VIDEO-2026-05-20-10-57-47.mp4"
      },
      {
        "name": "Olive Cargo",
        "hex": "#1a1a1a",
        "img": "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-21-17-38-05.jpg",
        "gallery": [
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-21-17-38-05.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-21-17-38-08.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-21-17-38-10.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-21-17-38-13.jpg",
          "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-05-21-17-38-15.jpg"
        ],
        "video": null
      }
    ],
    "gallery": [
      "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-16-11-55-36.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-16-11-55-37.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-16-11-55-38.jpg",
      "produtos/drive-download-20260526T181408Z-3-001/Vans Hylane/PHOTO-2026-04-16-11-55-39.jpg"
    ]
  }
];

// Normalize boilerplate color names programmatically to prevent mismatched/copied text labels
RAW_PRODUCTS_DATA.forEach(prod => {
  // Only normalize products that have the boilerplate copied color lists (all except ID 8 and 11)
  if (prod.id !== 8 && prod.id !== 11) {
    prod.colors.forEach((color, idx) => {
      const optionNum = String(idx + 1).padStart(2, '0');
      color.name = `Opção ${optionNum}`;
    });
  }
});

// Expand target products by color to inflate catalog and showcase variations immediately
function getExpandedProducts(products) {
  const expanded = [];
  products.forEach(prod => {
    // We split:
    // - Adidas Adizero Evo SL (id: 1)
    // - Mizuno Neo Vista 2 (id: 4)
    // - Nike Zoom Vomero 5 Premium (id: 8)
    // - Olympikus Corre (id: 10)
    if (prod.id === 1 || prod.id === 4 || prod.id === 8 || prod.id === 10) {
      prod.colors.forEach((color, colorIdx) => {
        // Clone the product object fully using JSON serialization
        const cloned = JSON.parse(JSON.stringify(prod));
        
        // Give it a unique ID to avoid any cart conflicts
        cloned.id = prod.id * 100 + colorIdx;
        
        // Format name to include color and premium branding suffixes
        const baseTitle = prod.title.split(" — ")[0].split(" - ")[0];
        cloned.title = `${baseTitle} — ${color.name}`;
        
        // Re-order the colors array to make this color the primary one (index 0)
        const colorsList = [...cloned.colors];
        const [selectedColor] = colorsList.splice(colorIdx, 1);
        colorsList.unshift(selectedColor);
        cloned.colors = colorsList;
        
        // Set the primary main gallery image of the card to this color's image
        cloned.gallery = color.gallery && color.gallery.length > 0 ? color.gallery : [color.img];
        
        expanded.push(cloned);
      });
    } else if (prod.id === 7 || prod.id === 3 || prod.id === 9 || prod.id === 13 || prod.id === 14 || prod.id === 5) {
      // Keep the main product card itself
      expanded.push(prod);

      // Map targets dynamically per product ID
      let targetIndices = [];
      if (prod.id === 7) targetIndices = [4, 7, 13, 18, 23, 24, 25, 27];
      else if (prod.id === 3) targetIndices = [1, 3, 4, 5, 7, 8];
      else if (prod.id === 9) targetIndices = [3, 7, 11, 16, 21, 26];
      else if (prod.id === 13) targetIndices = [2, 4, 5, 8, 12];
      else if (prod.id === 14) targetIndices = [1, 2, 3, 4, 10];
      else if (prod.id === 5) targetIndices = [4, 5, 9, 12, 13, 14];

      // Expand specific color indices as separate product cards on the homepage catalog
      targetIndices.forEach(colorIdx => {
        if (colorIdx < prod.colors.length) {
          const color = prod.colors[colorIdx];
          const cloned = JSON.parse(JSON.stringify(prod));
          
          cloned.id = prod.id * 100 + colorIdx;
          
          const baseTitle = prod.title.split(" — ")[0].split(" - ")[0];
          cloned.title = `${baseTitle} — ${color.name}`;
          
          const colorsList = [...cloned.colors];
          const [selectedColor] = colorsList.splice(colorIdx, 1);
          colorsList.unshift(selectedColor);
          cloned.colors = colorsList;
          
          cloned.gallery = color.gallery && color.gallery.length > 0 ? color.gallery : [color.img];
          
          expanded.push(cloned);
        }
      });
    } else {
      expanded.push(prod);
    }
  });

  // Separate accessories from footwear/lifestyle products to keep accessories at the bottom of the catalog
  const footwear = expanded.filter(p => p.category !== 'acessorios');
  const accessories = expanded.filter(p => p.category === 'acessorios');

  // Group footwear by their base product ID to interleave them round-robin
  const groups = {};
  footwear.forEach(p => {
    const baseId = p.id >= 100 ? Math.floor(p.id / 100) : p.id;
    if (!groups[baseId]) {
      groups[baseId] = [];
    }
    groups[baseId].push(p);
  });

  // Interleave different models round-robin to ensure visual brand/model diversity in the grid
  const shuffledFootwear = [];
  const groupIds = Object.keys(groups);
  let hasMore = true;
  let index = 0;
  
  while (hasMore) {
    hasMore = false;
    groupIds.forEach(gid => {
      if (groups[gid].length > index) {
        shuffledFootwear.push(groups[gid][index]);
        hasMore = true;
      }
    });
    index++;
  }

  // Combine footwear and accessories at the end
  return [...shuffledFootwear, ...accessories];
}

const PRODUCTS_DATA = getExpandedProducts(RAW_PRODUCTS_DATA);


/* --- 2. GLOBAL APP STATE VARIABLES --- */
let cart = [];
let selectedProduct = null;
let currentSelectedColor = null;
let currentSelectedSize = null;
let currentQuantity = 1;
let activePaymentMethod = 'pix';
let simulatedShippingCost = 0;
let simulatedShippingDays = 0;
let isCEPValid = false;

/* --- CHECKOUT OVERLAY ACTIONS --- */
window.openCheckout = function() {
  const checkoutEl = document.getElementById("checkout");
  if (checkoutEl) {
    checkoutEl.classList.add("active");
    document.body.style.overflow = "hidden"; // block background scroll
  }
};

window.closeCheckout = function() {
  const checkoutEl = document.getElementById("checkout");
  if (checkoutEl) {
    checkoutEl.classList.remove("active");
    document.body.style.overflow = ""; // restore scroll
  }
};

/* --- 3. DOM CACHING & SELECTORS --- */
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  // Setup Product Catalog Grid
  renderProductGrid(PRODUCTS_DATA);

  // Setup Event Listeners
  setupEventListeners();

  // Load cart from LocalStorage (if any)
  loadCartFromStorage();
  updateCartUI();

  // Setup Copy Protection Layer (Maestro Auditor Rule)
  setupCopyProtection();
}

/* --- 3.5. COPY PROTECTION LAYER --- */
function setupCopyProtection() {
  // 1. Bloquear menu de contexto (clique direito)
  document.addEventListener("contextmenu", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") {
      return;
    }
    e.preventDefault();
  });

  // 2. Bloquear arrastar imagens (impede baixar fotos dos produtos)
  document.addEventListener("dragstart", (e) => {
    if (e.target.tagName === "IMG") {
      e.preventDefault();
    }
  });

  // 3. Bloquear atalhos de desenvolvedor e salvar página
  document.addEventListener("keydown", (e) => {
    // F12
    if (e.key === "F12") {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I ou Ctrl+Shift+J ou Ctrl+Shift+C (Ferramentas de Desenvolvedor)
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C" || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
      e.preventDefault();
      return false;
    }
    // Ctrl+U (Visualizar Código Fonte)
    if (e.ctrlKey && (e.key === "u" || e.key === "U" || e.keyCode === 85)) {
      e.preventDefault();
      return false;
    }
    // Ctrl+S (Salvar Página)
    if (e.ctrlKey && (e.key === "s" || e.key === "S" || e.keyCode === 83)) {
      e.preventDefault();
      return false;
    }
    // Ctrl+C / Ctrl+X (Bloquear cópia e recorte, exceto nos inputs e áreas copiáveis)
    if (e.ctrlKey && (e.key === "c" || e.key === "C" || e.key === "x" || e.key === "X" || e.keyCode === 67 || e.keyCode === 88)) {
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA" || activeEl.classList.contains("pix-copia-cola-input") || activeEl.classList.contains("boleto-barcode-line"))) {
        return; // permite copiar chaves pix e inputs de texto
      }
      e.preventDefault();
      return false;
    }
  });
}

/* --- 4. EVENT LISTENERS DISPATCHER --- */
function setupEventListeners() {
  // Sticky Header Effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile Hamburger Drawer Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawerClose = document.getElementById("mobile-drawer-close");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileDrawerOverlay = document.getElementById("mobile-drawer-overlay");

  if (mobileMenuBtn && mobileDrawer && mobileDrawerOverlay) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileDrawer.classList.add("active");
      mobileDrawerOverlay.classList.add("active");
      mobileMenuBtn.setAttribute("aria-expanded", "true");
    });

    const closeDrawer = () => {
      mobileDrawer.classList.remove("active");
      mobileDrawerOverlay.classList.remove("active");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    };

    mobileDrawerClose.addEventListener("click", closeDrawer);
    mobileDrawerOverlay.addEventListener("click", closeDrawer);

    // Mobile nav link clicks
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", (e) => {
        closeDrawer();
        const cat = e.currentTarget.getAttribute("data-category");
        filterCatalogByCategory(cat);
      });
    });
  }

  // Desktop categories filter triggers
  document.querySelectorAll(".desktop-nav .nav-link, .footer-nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      // Remove active states from desktop header navs
      document.querySelectorAll(".desktop-nav .nav-link").forEach(el => el.classList.remove("active"));
      
      const category = e.currentTarget.getAttribute("data-category");
      // Add active to header matching nav link
      const matchingHeaderLink = document.querySelector(`.desktop-nav .nav-link[data-category="${category}"]`);
      if (matchingHeaderLink) {
        matchingHeaderLink.classList.add("active");
      }

      filterCatalogByCategory(category);
      
      // Smooth scroll if clicked from footer
      const catalogEl = document.getElementById("catalogo");
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Catalog Section Pills Filters
  document.querySelectorAll(".category-tabs .tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".category-tabs .tab-btn").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      e.currentTarget.classList.add("active");
      e.currentTarget.setAttribute("aria-selected", "true");

      const category = e.currentTarget.getAttribute("data-filter");
      
      // Synchronize with header nav active bar
      document.querySelectorAll(".desktop-nav .nav-link").forEach(el => el.classList.remove("active"));
      const matchingHeaderLink = document.querySelector(`.desktop-nav .nav-link[data-category="${category}"]`);
      if (matchingHeaderLink) matchingHeaderLink.classList.add("active");

      filterCatalogByCategory(category);
    });
  });

  // Cart Drawer open/close triggers
  const cartTrigger = document.getElementById("cart-trigger");
  const cartCloseBtn = document.getElementById("cart-close-btn");
  const cartContinueBtn = document.getElementById("cart-continue-btn");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartOverlay = document.getElementById("cart-overlay");

  const openCart = () => {
    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");
  };

  const closeCart = () => {
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
  };

  if (cartDrawer && cartOverlay) {
    if (cartTrigger) cartTrigger.addEventListener("click", openCart);
    if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);
    if (cartContinueBtn) cartContinueBtn.addEventListener("click", closeCart);
    cartOverlay.addEventListener("click", closeCart);

    // Bulletproof event delegation for closing the cart drawer
    document.addEventListener("click", (e) => {
      if (
        e.target.closest("#cart-close-btn") ||
        e.target.closest(".cart-close-btn") ||
        e.target.closest(".cart-continue-shopping") ||
        e.target.closest(".cart-explore-btn")
      ) {
        closeCart();
      }
    });
  }

  // Modal close trigger
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const productModal = document.getElementById("product-modal");

  const closeModal = () => {
    productModal.classList.remove("active");
    productModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = '';
    const mainVideo = document.getElementById("modal-main-gallery-video");
    if (mainVideo) mainVideo.pause();
  };
  window.closeModal = closeModal;

  if (modalCloseBtn && productModal) {
    modalCloseBtn.addEventListener("click", closeModal);
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) closeModal();
    });
  }

  // 1-Step Checkout Forms: Payment Tabs Switcher
  document.querySelectorAll(".pay-tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".pay-tab-btn").forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");

      const paymentMethod = e.currentTarget.getAttribute("data-payment");
      activePaymentMethod = paymentMethod;

      // Show hide payment info panels
      document.querySelectorAll(".payment-panel").forEach(p => p.classList.remove("active"));
      document.getElementById(`panel-${paymentMethod}`).classList.add("active");

      // Set input requirements dynamically
      setCreditCardRequirements(paymentMethod === 'card');
      
      // Update price calculation with PIX discount simulation if applied
      recalculateCheckoutSummary();
    });
  });

  // 1-Step Checkout Form Submission Handler
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      if (cart.length === 0) {
        alert("Adicione pelo menos 1 produto no carrinho para poder finalizar o pedido!");
        return;
      }

      handleCheckoutFormSubmit();
    });
  }

  // CEP input autocomplete triggering on focusout / 8 chars
  const cepInput = document.getElementById("checkout-cep");
  if (cepInput) {
    cepInput.addEventListener("input", (e) => {
      // Formatter: 00000-000
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 5) {
        value = value.substring(0, 5) + "-" + value.substring(5, 8);
      }
      e.target.value = value;

      if (value.replace("-", "").length === 8) {
        fetchCEPAddress(value.replace("-", ""));
      }
    });

    cepInput.addEventListener("blur", (e) => {
      const cepClean = e.target.value.replace(/\D/g, "");
      if (cepClean.length === 8) {
        fetchCEPAddress(cepClean);
      }
    });
  }

  // CPF Input Formatter
  const cpfInput = document.getElementById("checkout-cpf");
  if (cpfInput) {
    cpfInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 11) value = value.substring(0, 11);
      
      // Masking: 000.000.000-00
      if (value.length > 9) {
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, "$1.$2.$3-$4");
      } else if (value.length > 6) {
        value = value.replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3");
      } else if (value.length > 3) {
        value = value.replace(/^(\d{3})(\d{1,3})$/, "$1.$2");
      }
      e.target.value = value;
    });
  }

  // Phone Input Formatter (WhatsApp)
  const phoneInput = document.getElementById("checkout-phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 11) value = value.substring(0, 11);

      // Masking: (00) 00000-0000
      if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
      } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,4})$/, "($1) $2");
      }
      e.target.value = value;
    });
  }

  // Credit Card Realtime Mirror inputs triggers
  setupCreditCardVisualMirror();

  // Scroll indicator CTA click
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      document.getElementById("catalogo").scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Checkout back button trigger
  const checkoutBackBtn = document.getElementById("checkout-back-btn");
  if (checkoutBackBtn) {
    checkoutBackBtn.addEventListener("click", () => {
      closeCheckout();
    });
  }

  // Intercept all checkout links to open overlay
  document.querySelectorAll('a[href="#checkout"]').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      closeCart(); // close cart drawer
      const modal = document.getElementById("product-modal");
      if (modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
      }
      document.body.style.overflow = '';
      openCheckout();
    });
  });

  // Success Modal Close Btn trigger
  const successCloseBtn = document.getElementById("success-close-btn");
  if (successCloseBtn) {
    successCloseBtn.addEventListener("click", () => {
      document.getElementById("success-modal").classList.remove("active");
      closeCheckout();
      // Scroll to top home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* --- 5. CATALOG DOM RENDERING ENGINE --- */
// Premium Suffix Title Formatter for Hype Brand positioning
function getPremiumTitle(title) {
  let cleanTitle = title.split(" - ")[0].split(" — ")[0];
  if (!cleanTitle.includes("™") && !cleanTitle.includes("®")) {
    if (cleanTitle.toLowerCase().includes("premium")) {
      cleanTitle = cleanTitle.replace(/premium/i, "Premium Edition™");
    } else if (cleanTitle.toLowerCase().includes("adidas")) {
      cleanTitle = cleanTitle + " Retrofit™";
    } else if (cleanTitle.toLowerCase().includes("nike")) {
      cleanTitle = cleanTitle + " Essential™";
    } else if (cleanTitle.toLowerCase().includes("new balance")) {
      cleanTitle = cleanTitle + " Heritage®";
    } else if (cleanTitle.toLowerCase().includes("vans")) {
      cleanTitle = cleanTitle + " Classics®";
    } else if (cleanTitle.toLowerCase().includes("mizuno")) {
      cleanTitle = cleanTitle + " Velocity®";
    } else {
      cleanTitle = cleanTitle + "™";
    }
  }
  return cleanTitle;
}

/* --- 5. CATALOG DOM RENDERING ENGINE --- */
function renderProductGrid(products) {
  const container = document.getElementById("products-grid-container");
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = `
      <div class="empty-results" style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: var(--color-text-muted);">
        <i class="fa-solid fa-ban" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--color-cyan);"></i>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente selecionar outra categoria de vestuário.</p>
      </div>
    `;
    return;
  }

  let cardsHtml = "";
  products.forEach((prod, index) => {
    // Generate pricing labels
    const hasDiscount = prod.oldPrice !== null;
    const oldPriceHtml = hasDiscount ? `<span class="price-old">R$ ${prod.oldPrice.toFixed(2).replace(".", ",")}</span>` : '';
    const discountBadge = hasDiscount ? `<span class="badge badge-sale">-${Math.round((1 - (prod.price / prod.oldPrice)) * 100)}%</span>` : '';
    const hotBadge = prod.tag === 'HOT' ? `<span class="badge badge-hot">Best Seller</span>` : '';
    const newBadge = prod.tag === 'NEW' ? `<span class="badge badge-new">Drop Novo</span>` : (prod.tag && prod.tag !== 'HOT' && prod.tag !== 'NEW' ? `<span class="badge badge-new">${prod.tag}</span>` : '');
    
    // Choose primary and secondary hover images
    const primaryImg = prod.colors[0].img;
    const secondaryImg = prod.gallery[1] || prod.gallery[0];

    // High-conversion scarcity & urgency badges
    let scarcityHtml = "";
    if (prod.tag === 'HOT') {
      scarcityHtml = `<span class="scarcity-tag hot"><i class="fa-solid fa-fire"></i> Mais Vendido</span>`;
    } else if (index % 3 === 0) {
      scarcityHtml = `<span class="scarcity-tag limited"><i class="fa-solid fa-hourglass-half"></i> Drop Limitado</span>`;
    } else if (index % 3 === 1) {
      scarcityHtml = `<span class="scarcity-tag warning"><i class="fa-solid fa-triangle-exclamation"></i> Últimas Unidades</span>`;
    } else {
      scarcityHtml = `<span class="scarcity-tag express"><i class="fa-solid fa-bolt"></i> Envio Prioritário</span>`;
    }

    const premiumTitle = getPremiumTitle(prod.title);

    cardsHtml += `
      <div class="product-card" onclick="openProductDetailModal(${prod.id})">
        <div class="prod-img-box">
          <div class="prod-badges">
            ${discountBadge}
            ${hotBadge}
            ${newBadge}
          </div>
          
          <img src="${primaryImg}" alt="${premiumTitle}" class="img-primary" loading="lazy" decoding="async">
          <img src="${secondaryImg}" alt="${premiumTitle}" class="img-hover" loading="lazy" decoding="async">

          <!-- Hover Overlay quick controls -->
          <div class="prod-action-overlay" onclick="event.stopPropagation();">
            <button class="prod-action-btn" onclick="openProductDetailModal(${prod.id})">Visualizar</button>
            <button class="prod-action-btn icon-only" onclick="directBuyItem(${prod.id})" title="Compra Expressa"><i class="fa-solid fa-bolt"></i></button>
          </div>
        </div>

        <div class="prod-meta">
          ${scarcityHtml}
          <span class="prod-category">${prod.category}</span>
          <h3 class="prod-title">${premiumTitle}</h3>
          <div class="prod-price-row">
            <span class="price-current">R$ ${prod.price.toFixed(2).replace(".", ",")}</span>
            ${oldPriceHtml}
          </div>
          <span class="prod-installments">Ou até 6x de R$ ${(prod.price / 6).toFixed(2).replace(".", ",")} sem juros</span>
        </div>
      </div>
    `;

    // STRATEGIC BRAND SHOWCASE: Insert a beautiful card displaying our logo in major evidence!
    if (index === 2) {
      cardsHtml += `
        <div class="product-card brand-highlight-card" style="grid-column: span 1; justify-content: center; align-items: center; text-align: center; padding: 40px 24px; background: linear-gradient(135deg, rgba(25, 28, 33, 0.6) 0%, rgba(12, 14, 16, 0.9) 100%); border: 1.5px solid var(--color-border); border-radius: var(--border-radius-lg); position: relative; overflow: hidden; backdrop-filter: blur(15px); min-height: 420px; display: flex; flex-direction: column;">
          <!-- Glowing background circles -->
          <div style="position: absolute; top: -50px; left: -50px; width: 150px; height: 150px; background: rgba(0, 240, 255, 0.15); filter: blur(60px); border-radius: 50%;"></div>
          <div style="position: absolute; bottom: -50px; right: -50px; width: 150px; height: 150px; background: rgba(112, 0, 255, 0.15); filter: blur(60px); border-radius: 50%;"></div>
          
          <div style="margin-bottom: 24px; filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.4));">
            <img src="produtos/logo .PNG" alt="HYPEFIT Logo" style="max-height: 65px; object-fit: contain;">
          </div>
          
          <h3 style="font-family: var(--font-family-title); font-size: 1.3rem; font-weight: 800; color: var(--color-white); letter-spacing: 0.05em; margin-bottom: 12px; text-transform: uppercase;">
            STREETWEAR <span class="text-glow-cyan" style="color: var(--color-cyan);">DE ELITE</span>
          </h3>
          
          <p style="font-size: 0.8rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 24px; max-width: 220px;">
            Importação premium e edições limitadas de sneakers de performance, lifestyle e acessórios do Brasil.
          </p>
          
          <div style="display: flex; flex-direction: column; gap: 10px; width: 100%; text-align: left; font-size: 0.75rem; color: var(--color-white); border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-shield-halved" style="color: var(--color-cyan); width: 16px;"></i>
              <span>Garantia de Qualidade Premium Hypefit</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-truck-fast" style="color: var(--color-cyan); width: 16px;"></i>
              <span>Envios Seguros para todo o Brasil</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-arrow-rotate-left" style="color: var(--color-cyan); width: 16px;"></i>
              <span>Primeira Troca de Tamanho Grátis</span>
            </div>
          </div>
        </div>
      `;
    }
  });

  container.innerHTML = cardsHtml;
}

// Category filter
function filterCatalogByCategory(category) {
  if (category === "all" || category === "lifestyle") {
    renderProductGrid(PRODUCTS_DATA);
  } else {
    const filtered = PRODUCTS_DATA.filter(p => p.category === category);
    renderProductGrid(filtered);
  }
}

/* --- 6. DYNAMIC PRODUCT DETAIL MODAL CONTROLLER --- */
window.openProductDetailModal = function(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  selectedProduct = prod;
  currentSelectedColor = prod.colors[0]; // Set default color swatch
  currentSelectedSize = prod.sizes[0];   // Set default size swatch
  currentQuantity = 1;

  const detailContainer = document.getElementById("modal-product-detail");
  if (!detailContainer) return;

  // Compile color swatches HTML
  const colorsHtml = prod.colors.map((color, index) => `
    <div class="swatch-color-item ${index === 0 ? 'active' : ''}" 
         title="${color.name}"
         onclick="selectModalColor(this, ${index})">
      <img src="${color.img}" alt="${color.name}" class="swatch-color-img" loading="lazy" decoding="async">
      <span class="swatch-color-name">${color.name}</span>
    </div>
  `).join("");

  // Compile size swatches HTML
  const sizesHtml = prod.sizes.map((size, index) => `
    <div class="swatch-size-item ${index === 0 ? 'active' : ''}" 
         onclick="selectModalSize(this, '${size}')">
      ${size}
    </div>
  `).join("");

  // Helper to compile dynamic thumbnails row including video support
  window.renderModalThumbnailsHtml = function(color, product) {
    let html = "";
    if (color.gallery && color.gallery.length > 0) {
      html += color.gallery.map((img, index) => `
        <div class="gallery-thumb-item ${img === color.img ? 'active' : ''}" onclick="selectModalThumb(this, '${img}')">
          <img src="${img}" alt="${product.title} Miniatura ${index + 1}" loading="lazy" decoding="async">
        </div>
      `).join("");
    } else {
      html += `
        <div class="gallery-thumb-item active" onclick="selectModalThumb(this, '${color.img}')">
          <img src="${color.img}" alt="${product.title}">
        </div>
      `;
    }

    if (color.video) {
      html += `
        <div class="gallery-thumb-item video-thumb" onclick="selectModalVideo(this, '${color.video}')">
          <img src="${color.img}" alt="Play Video" style="opacity: 0.55;">
          <div class="play-icon-overlay">
            <i class="fa-solid fa-circle-play"></i>
          </div>
        </div>
      `;
    }
    return html;
  };

  const thumbsHtml = window.renderModalThumbnailsHtml(currentSelectedColor, prod);

  // Pricing calculations
  const hasDiscount = prod.oldPrice !== null;
  const oldPriceHtml = hasDiscount ? `<span class="price-old">R$ ${prod.oldPrice.toFixed(2).replace(".", ",")}</span>` : '';
  const discountLabelBadge = hasDiscount ? `<span class="badge badge-sale">EXCLUSIVO -${Math.round((1 - (prod.price / prod.oldPrice)) * 100)}%</span>` : `<span class="badge badge-new">Premium Drop</span>`;

  detailContainer.innerHTML = `
    <!-- Gallery Pane (Left Column) -->
    <div class="modal-gallery-pane">
      <div class="gallery-main-img" id="modal-main-media-container" style="position: relative;">
        <img id="modal-main-gallery-img" src="${currentSelectedColor.img}" alt="${getPremiumTitle(prod.title)}" decoding="async">
        <video id="modal-main-gallery-video" loop muted controls style="display: none;">
          <source id="modal-video-source" src="" type="video/mp4">
        </video>
      </div>
      <div class="gallery-thumbs-row">
        ${thumbsHtml}
      </div>
    </div>

    <!-- Attributes details pane (Right Column) -->
    <div class="modal-details-pane">
      <div>${discountLabelBadge}</div>
      
      <h2 class="modal-prod-title">${getPremiumTitle(prod.title)}</h2>
      
      <div class="modal-prod-price-row">
        <span class="price-current">R$ ${prod.price.toFixed(2).replace(".", ",")}</span>
        ${oldPriceHtml}
      </div>
      <p class="modal-price-installments">Ou em até 6x de R$ ${(prod.price / 6).toFixed(2).replace(".", ",")} sem juros no cartão.</p>

      <!-- Color Swatch Selectors -->
      <div class="modal-section-title">COR: <span id="modal-selected-color-label" style="font-weight: 600; text-transform: none; color: var(--color-cyan);">${currentSelectedColor.name}</span></div>
      <div class="swatches-color-list">
        ${colorsHtml}
      </div>

      <!-- Size Swatch Selectors -->
      <div class="modal-section-title">TAMANHO BR:</div>
      <div class="swatches-size-grid">
        ${sizesHtml}
      </div>

      <!-- Action Selectors and CTAs -->
      <div class="modal-section-title">QUANTIDADE:</div>
      <div class="modal-actions-container">
        <!-- Qty input -->
        <div class="quantity-control">
          <button class="qty-btn" onclick="adjustModalQty(-1)"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-val" id="modal-qty-display">1</span>
          <button class="qty-btn" onclick="adjustModalQty(1)"><i class="fa-solid fa-plus"></i></button>
        </div>
        
        <button class="btn btn-primary btn-add-cart" onclick="addSelectedProductToCart()">
          <i class="fa-solid fa-bag-shopping" style="margin-right: 8px;"></i> Adicionar ao Carrinho
        </button>
        
        <button class="btn btn-outline btn-buy-now" onclick="directCheckoutModalProduct()">
          <i class="fa-solid fa-bolt" style="margin-right: 6px;"></i> Comprar Já
        </button>
      </div>

      <!-- Tech accordions descriptions -->
      <div class="product-description-accordions">
        <div class="accordion-tab active">
          <div class="accordion-tab-header" onclick="toggleModalAccordion(this)">
            <h4>Descrição do Produto</h4>
            <i class="fa-solid fa-chevron-down accordion-icon"></i>
          </div>
          <div class="accordion-tab-body" style="height: auto;">
            <div class="accordion-content">
              ${prod.description}
            </div>
          </div>
        </div>

        <div class="accordion-tab">
          <div class="accordion-tab-header" onclick="toggleModalAccordion(this)">
            <h4>Materiais e Detalhes Técnicos</h4>
            <i class="fa-solid fa-chevron-down accordion-icon"></i>
          </div>
          <div class="accordion-tab-body">
            <div class="accordion-content">
              • Categoria de Importação Premium de Alto Padrão.<br>
              • Materiais: Tecidos técnicos ultra respiráveis, couros nobres e camurça de alta gramatura.<br>
              • Palmilha interna anatômica com amortecimento adaptável para máxima ergonomia.<br>
              • Solado de alta fricção cupsole vulcanizado que garante aderência superior e estabilidade.<br>
              • Ajuste perfeito com acabamentos premium de alta costura streetwear.
            </div>
          </div>
        </div>

        <div class="accordion-tab">
          <div class="accordion-tab-header" onclick="toggleModalAccordion(this)">
            <h4>Envios, Prazos e Garantias</h4>
            <i class="fa-solid fa-chevron-down accordion-icon"></i>
          </div>
          <div class="accordion-tab-body">
            <div class="accordion-content">
              Enviamos com seguro de postagem completo para todo o território nacional através dos Correios (Sedex ou PAC). O prazo para despacho é de até 24 horas úteis após a confirmação. Garantia incondicional de até 7 dias de garantia de troca para trocas de numeração ou insatisfação com a primeira devolução totalmente grátis!
            </div>
          </div>
        </div>
      </div>

    </div>
  `;

  // Display modal
  const productModal = document.getElementById("product-modal");
  productModal.classList.add("active");
  productModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = 'hidden'; // block backdrop scroll
};

/* --- Swatch selectors triggers inside modal --- */
window.selectModalColor = function(element, colorIndex) {
  if (!selectedProduct) return;

  // Switch active state visuals
  document.querySelectorAll(".swatches-color-list .swatch-color-item").forEach(item => item.classList.remove("active"));
  element.classList.add("active");

  const color = selectedProduct.colors[colorIndex];
  currentSelectedColor = color;

  // Update visual text label
  document.getElementById("modal-selected-color-label").innerText = color.name;

  // Re-render gallery thumbnails for the new color swatch dynamically!
  const thumbsRow = document.querySelector(".gallery-thumbs-row");
  if (thumbsRow) {
    thumbsRow.innerHTML = window.renderModalThumbnailsHtml(color, selectedProduct);
  }

  // Restore main gallery to image view, reset video
  const mainImg = document.getElementById("modal-main-gallery-img");
  const mainVideo = document.getElementById("modal-main-gallery-video");
  
  if (mainImg && mainVideo) {
    mainVideo.pause();
    mainVideo.style.display = "none";
    mainImg.style.display = "block";
    mainImg.src = color.img;
  }
};

window.selectModalSize = function(element, size) {
  document.querySelectorAll(".swatches-size-grid .swatch-size-item").forEach(item => item.classList.remove("active"));
  element.classList.add("active");
  currentSelectedSize = size;
};

window.selectModalThumb = function(element, imgSrc) {
  document.querySelectorAll(".gallery-thumbs-row .gallery-thumb-item").forEach(item => item.classList.remove("active"));
  element.classList.add("active");
  
  const mainImg = document.getElementById("modal-main-gallery-img");
  const mainVideo = document.getElementById("modal-main-gallery-video");
  
  if (mainImg && mainVideo) {
    mainVideo.pause();
    mainVideo.style.display = "none";
    mainImg.style.display = "block";
    mainImg.src = imgSrc;
  }
};

window.selectModalVideo = function(element, videoSrc) {
  document.querySelectorAll(".gallery-thumbs-row .gallery-thumb-item").forEach(item => item.classList.remove("active"));
  element.classList.add("active");

  const mainImg = document.getElementById("modal-main-gallery-img");
  const mainVideo = document.getElementById("modal-main-gallery-video");
  const videoSource = document.getElementById("modal-video-source");

  if (mainImg && mainVideo && videoSource) {
    mainImg.style.display = "none";
    mainVideo.style.display = "block";
    
    if (videoSource.getAttribute("src") !== videoSrc) {
      videoSource.setAttribute("src", videoSrc);
      mainVideo.load();
    }
    
    mainVideo.play().catch(err => {
      console.warn("Auto-play blocked or failed:", err);
    });
  }
};

window.adjustModalQty = function(amount) {
  currentQuantity += amount;
  if (currentQuantity < 1) currentQuantity = 1;
  document.getElementById("modal-qty-display").innerText = currentQuantity;
};

window.toggleModalAccordion = function(header) {
  const tab = header.parentElement;
  const body = tab.querySelector(".accordion-tab-body");
  
  if (tab.classList.contains("active")) {
    tab.classList.remove("active");
    body.style.height = "0";
  } else {
    // Close other tabs
    tab.parentElement.querySelectorAll(".accordion-tab").forEach(t => {
      t.classList.remove("active");
      t.querySelector(".accordion-tab-body").style.height = "0";
    });

    tab.classList.add("active");
    body.style.height = "auto";
  }
};

/* --- 7. CART STATE ENGINE --- */
function saveCartToStorage() {
  localStorage.setItem("hypefit_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
  const stored = localStorage.getItem("hypefit_cart");
  if (stored) {
    try {
      cart = JSON.parse(stored);
    } catch (e) {
      cart = [];
    }
  }
}

// Add modal product into cart drawer
window.addSelectedProductToCart = function() {
  if (!selectedProduct || !currentSelectedColor || !currentSelectedSize) return;

  const cartItemId = `${selectedProduct.id}_${currentSelectedColor.name.replace(/\s/g, "")}_${currentSelectedSize}`;
  
  // Check if item details match any item already inside cart
  const existingItem = cart.find(item => item.cartItemId === cartItemId);
  if (existingItem) {
    existingItem.quantity += currentQuantity;
  } else {
    cart.push({
      cartItemId: cartItemId,
      id: selectedProduct.id,
      title: getPremiumTitle(selectedProduct.title),
      color: currentSelectedColor.name,
      size: currentSelectedSize,
      price: selectedProduct.price,
      quantity: currentQuantity,
      img: currentSelectedColor.img
    });
  }

  saveCartToStorage();
  updateCartUI();

  // Close modal and slide drawer open
  document.getElementById("product-modal").classList.remove("active");
  document.body.style.overflow = '';
  
  // Slide cart open
  setTimeout(() => {
    document.getElementById("cart-drawer").classList.add("active");
    document.getElementById("cart-overlay").classList.add("active");
  }, 250);
};

// Express Checkout direct buying from quick-view or CTA
window.directBuyItem = function(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  const defaultColor = prod.colors[0];
  const defaultSize = prod.sizes[0];
  const cartItemId = `${prod.id}_${defaultColor.name.replace(/\s/g, "")}_${defaultSize}`;

  const existingItem = cart.find(item => item.cartItemId === cartItemId);
  if (!existingItem) {
    cart.push({
      cartItemId: cartItemId,
      id: prod.id,
      title: getPremiumTitle(prod.title),
      color: defaultColor.name,
      size: defaultSize,
      price: prod.price,
      quantity: 1,
      img: defaultColor.img
    });
  } else {
    existingItem.quantity += 1;
  }

  saveCartToStorage();
  updateCartUI();

  // Open checkout overlay
  openCheckout();
};

// Checkout direct button inside modal
window.directCheckoutModalProduct = function() {
  if (!selectedProduct) return;
  
  // Add item into cart state first
  const cartItemId = `${selectedProduct.id}_${currentSelectedColor.name.replace(/\s/g, "")}_${currentSelectedSize}`;
  const existingItem = cart.find(item => item.cartItemId === cartItemId);
  if (existingItem) {
    existingItem.quantity += currentQuantity;
  } else {
    cart.push({
      cartItemId: cartItemId,
      id: selectedProduct.id,
      title: getPremiumTitle(selectedProduct.title),
      color: currentSelectedColor.name,
      size: currentSelectedSize,
      price: selectedProduct.price,
      quantity: currentQuantity,
      img: currentSelectedColor.img
    });
  }

  saveCartToStorage();
  updateCartUI();

  // Close product details modal
  document.getElementById("product-modal").classList.remove("active");
  document.body.style.overflow = '';

  // Open checkout overlay
  openCheckout();
};

/* --- Cart Drawer elements update and recalculation --- */
function updateCartUI() {
  // Items counts badge header
  const countBadge = document.getElementById("cart-badge-count");
  const drawerCount = document.getElementById("cart-items-count-badge");
  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (countBadge) countBadge.innerText = totalQty;
  if (drawerCount) drawerCount.innerText = `(${totalQty})`;

  // Render items list inside Drawer body
  const listContainer = document.getElementById("cart-items-list");
  const emptyState = document.getElementById("empty-cart-state");
  const footerPanel = document.getElementById("cart-footer-panel");

  if (!listContainer) return;

  // Clear previous dynamic items
  document.querySelectorAll(".cart-drawer .cart-item").forEach(item => item.remove());

  if (cart.length === 0) {
    if (emptyState) emptyState.style.display = 'flex';
    if (footerPanel) footerPanel.style.display = 'none';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    if (footerPanel) footerPanel.style.display = 'block';

    // Render new list elements in reverse order
    const itemsHtml = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-thumb">
          <img src="${item.img}" alt="${item.title}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title-row">
            <h4 class="cart-item-title">${item.title}</h4>
            <button class="cart-item-remove" onclick="removeCartItem('${item.cartItemId}')" aria-label="Remover item do carrinho">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
          <div class="cart-item-meta">
            <span>TAM: <strong>${item.size}</strong></span>
            <span>COR: <strong>${item.color}</strong></span>
          </div>
          <div class="cart-item-bottom">
            <div class="cart-item-qty-selector">
              <button onclick="adjustCartItemQty('${item.cartItemId}', -1)"><i class="fa-solid fa-minus"></i></button>
              <span>${item.quantity}</span>
              <button onclick="adjustCartItemQty('${item.cartItemId}', 1)"><i class="fa-solid fa-plus"></i></button>
            </div>
            <span class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}</span>
          </div>
        </div>
      </div>
    `).join("");

    // Insert items before the emptyState container
    listContainer.insertAdjacentHTML('beforeend', itemsHtml);
  }

  // Recalculate Subtotal / Free shipping indicators
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  const subtotalVal = document.getElementById("cart-subtotal-val");
  const totalVal = document.getElementById("cart-total-val");
  const installmentsVal = document.getElementById("cart-installments-val");

  if (subtotalVal) subtotalVal.innerText = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;
  
  // Calculate shoe quantity in cart (excluding accessories)
  const shoeQty = cart.reduce((acc, item) => {
    const prod = PRODUCTS_DATA.find(p => p.id === item.id);
    const cat = prod ? prod.category : '';
    return cat !== 'acessorios' ? acc + item.quantity : acc;
  }, 0);

  // Simulate shipping logic (Free shipping for 2+ pairs)
  const isFreeShipping = (shoeQty >= 2);
  const progressPercent = isFreeShipping ? 100 : (shoeQty / 2) * 100;
  
  const progressBar = document.getElementById("shipping-progress-bar");
  const progressText = document.getElementById("shipping-tracker-text");
 
  if (progressBar && progressText) {
    progressBar.style.width = `${progressPercent}%`;
    if (isFreeShipping) {
      progressBar.classList.add("unlocked");
      progressText.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--color-cyan); margin-right: 6px;"></i> Parabéns! Levando <strong>2 ou mais pares</strong>, você ganhou <strong>FRETE GRÁTIS!</strong>`;
      simulatedShippingCost = 0;
    } else {
      progressBar.classList.remove("unlocked");
      const remainingPairs = 2 - shoeQty;
      progressText.innerHTML = `Adicione mais <strong>${remainingPairs} ${remainingPairs === 1 ? 'par' : 'pares'}</strong> de tênis para ganhar <strong>Frete Grátis!</strong>`;
    }
  }

  // Calculate simulated shipping flat value for cart estimation before zip insertion
  let totalCalculated = subtotal;
  const shippingValEl = document.getElementById("cart-shipping-val");
  
  if (cart.length > 0) {
    if (isFreeShipping) {
      if (shippingValEl) {
        shippingValEl.innerText = "GRÁTIS";
        shippingValEl.className = "price-value success-text";
      }
    } else {
      if (shippingValEl) {
        shippingValEl.innerText = "A calcular no checkout";
        shippingValEl.className = "price-value";
      }
    }
  }

  if (totalVal) totalVal.innerText = `R$ ${totalCalculated.toFixed(2).replace(".", ",")}`;
  if (installmentsVal) installmentsVal.innerText = `Ou até 6x de R$ ${(totalCalculated / 6).toFixed(2).replace(".", ",")} sem juros`;

  // Sync with Express Checkout views
  syncCheckoutProductsSummary();
}

window.adjustCartItemQty = function(cartItemId, amount) {
  const item = cart.find(i => i.cartItemId === cartItemId);
  if (!item) return;

  item.quantity += amount;
  if (item.quantity < 1) {
    removeCartItem(cartItemId);
    return;
  }

  saveCartToStorage();
  updateCartUI();
};

window.removeCartItem = function(cartItemId) {
  cart = cart.filter(item => item.cartItemId !== cartItemId);
  saveCartToStorage();
  updateCartUI();
};

/* --- 8. 1-STEP CHECKOUT ENGINE & REAL VIA-CEP INTEGRATION --- */
function syncCheckoutProductsSummary() {
  const container = document.getElementById("checkout-summary-items-container");
  const emptyState = document.getElementById("empty-checkout-summary");
  const pricingPanel = document.getElementById("checkout-pricing-panel");
  const itemsCountText = document.getElementById("checkout-summary-items-count");

  if (!container) return;

  // Clear previous listings
  document.querySelectorAll(".checkout-summary-items .checkout-item").forEach(item => item.remove());

  const totalItemsQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (itemsCountText) itemsCountText.innerText = `(${totalItemsQty} ${totalItemsQty === 1 ? 'item' : 'itens'})`;

  if (cart.length === 0) {
    if (emptyState) emptyState.style.display = 'flex';
    if (pricingPanel) pricingPanel.style.display = 'none';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    if (pricingPanel) pricingPanel.style.display = 'flex';

    // Render items list inside checkout summary panel
    const checkoutItemsHtml = cart.map(item => `
      <div class="checkout-item">
        <div class="checkout-item-thumb">
          <img src="${item.img}" alt="${item.title}">
        </div>
        <div class="checkout-item-details">
          <h4 class="checkout-item-title">${item.title}</h4>
          <div class="checkout-item-meta">
            TAM: ${item.size} | COR: ${item.color}
          </div>
        </div>
        <div class="checkout-item-price-col">
          <span class="checkout-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}</span>
          <div class="checkout-item-qty">Qtd: ${item.quantity}</div>
        </div>
      </div>
    `).join("");

    container.insertAdjacentHTML('beforeend', checkoutItemsHtml);
  }

  recalculateCheckoutSummary();
}

// Calculate total costs including dynamic shipping options, discounts
function recalculateCheckoutSummary() {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Set elements
  const subtotalEl = document.getElementById("checkout-subtotal-val");
  const shippingEl = document.getElementById("checkout-shipping-val");
  const discountRow = document.getElementById("checkout-discount-row");
  const discountLabelEl = document.getElementById("checkout-discount-label");
  const discountValEl = document.getElementById("checkout-discount-val");
  const totalEl = document.getElementById("checkout-total-val");
  const installmentsEl = document.getElementById("checkout-installments-disclaimer");

  if (subtotalEl) subtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;

  // Calculate shoe quantity
  const shoeQty = cart.reduce((acc, item) => {
    const prod = PRODUCTS_DATA.find(p => p.id === item.id);
    const cat = prod ? prod.category : '';
    return cat !== 'acessorios' ? acc + item.quantity : acc;
  }, 0);

  // Evaluate shipping cost (Free for 2+ pairs)
  let finalShippingCost = 0;
  if (cart.length > 0) {
    if (shoeQty >= 2) {
      finalShippingCost = 0;
      if (shippingEl) shippingEl.innerHTML = `<span style="color: var(--color-cyan); font-weight: 700;">GRÁTIS (Sedex)</span>`;
    } else if (isCEPValid) {
      finalShippingCost = simulatedShippingCost;
      if (shippingEl) shippingEl.innerText = `R$ ${finalShippingCost.toFixed(2).replace(".", ",")}`;
    } else {
      if (shippingEl) shippingEl.innerText = "A calcular CEP";
    }
  }

  // Evaluate discount: 5% off on PIX payment method
  let discountAmount = 0;
  if (activePaymentMethod === 'pix' && subtotal > 0) {
    discountAmount = (subtotal + finalShippingCost) * 0.05;
    if (discountRow && discountLabelEl && discountValEl) {
      discountRow.style.display = 'flex';
      discountLabelEl.innerHTML = `<i class="fa-solid fa-percent"></i> Desconto PIX (5%)`;
      discountValEl.innerText = `- R$ ${discountAmount.toFixed(2).replace(".", ",")}`;
    }
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  const finalTotal = subtotal + finalShippingCost - discountAmount;
  if (totalEl) totalEl.innerText = `R$ ${finalTotal.toFixed(2).replace(".", ",")}`;

  // Update dynamic visa card options parcel selections
  updateCreditCardInstallmentOptions(finalTotal);

  if (installmentsEl) {
    if (activePaymentMethod === 'card') {
      const selectedInst = document.getElementById("card-installments");
      const installmentsNum = selectedInst ? parseInt(selectedInst.value) : 1;
      const valPerMonth = finalTotal / installmentsNum;
      installmentsEl.innerText = `Ou parcelado em ${installmentsNum}x de R$ ${valPerMonth.toFixed(2).replace(".", ",")} sem juros`;
      installmentsEl.style.display = 'block';
    } else if (activePaymentMethod === 'pix') {
      installmentsEl.innerText = "Aprovação instantânea e Prioritária no PIX!";
      installmentsEl.style.display = 'block';
    } else {
      installmentsEl.style.display = 'none';
    }
  }
}

// Populate card installment dropdown based on current final total
function updateCreditCardInstallmentOptions(totalValue) {
  const selector = document.getElementById("card-installments");
  if (!selector) return;

  const currentVal = selector.value; // retain user selection if viable
  
  let optionsHtml = '';
  for (let i = 1; i <= 6; i++) {
    const valPerMonth = totalValue / i;
    optionsHtml += `<option value="${i}">${i}x de R$ ${valPerMonth.toFixed(2).replace(".", ",")} sem juros</option>`;
  }
  
  selector.innerHTML = optionsHtml;
  if (currentVal && parseInt(currentVal) <= 6) {
    selector.value = currentVal;
  }
}

// Trigger input elements matching credit card panels validation requirements
function setCreditCardRequirements(isRequired) {
  const ccInputs = [
    document.getElementById("card-num"),
    document.getElementById("card-name"),
    document.getElementById("card-expiry"),
    document.getElementById("card-cvv")
  ];

  ccInputs.forEach(input => {
    if (input) {
      if (isRequired) {
        input.setAttribute("required", "");
      } else {
        input.removeAttribute("required");
        input.value = "";
      }
    }
  });
}

// CEP ViaCEP API Autocomplete fetch
async function fetchCEPAddress(cep) {
  const loaderSpinner = document.getElementById("cep-loader-spinner");
  const shippingBadge = document.getElementById("checkout-shipping-badge");

  if (loaderSpinner) loaderSpinner.style.display = 'block';
  if (shippingBadge) shippingBadge.style.display = 'none';

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) throw new Error("CEP API connection failed");
    
    const data = await response.json();
    if (data.erro) {
      alert("CEP não encontrado. Por favor, preencha seu endereço manualmente.");
      isCEPValid = false;
      if (loaderSpinner) loaderSpinner.style.display = 'none';
      return;
    }

    // Auto-fill values
    const addressInput = document.getElementById("checkout-address");
    const neighborhoodInput = document.getElementById("checkout-neighborhood");
    const cityInput = document.getElementById("checkout-city");
    const stateInput = document.getElementById("checkout-state");

    if (addressInput) addressInput.value = data.logradouro || "";
    if (neighborhoodInput) neighborhoodInput.value = data.bairro || "";
    if (cityInput) cityInput.value = data.localidade || "";
    if (stateInput) stateInput.value = data.uf || "";

    // Set dynamic shipping values flat based on CEP state prefix
    isCEPValid = true;
    simulateShippingCostByState(data.uf);

    // Prompt visual badge of success
    if (shippingBadge) {
      shippingBadge.style.display = 'flex';
      shippingBadge.innerHTML = `<i class="fa-solid fa-circle-check"></i> Endereço carregado para: <strong>${data.localidade} - ${data.uf}</strong>`;
    }

    // Trigger focus on Number input as it's the next empty field
    const numberInput = document.getElementById("checkout-number");
    if (numberInput) numberInput.focus();

  } catch (error) {
    console.error("CEP autocomplete error:", error);
    isCEPValid = false;
  } finally {
    if (loaderSpinner) loaderSpinner.style.display = 'none';
    recalculateCheckoutSummary();
  }
}

// Simulates shipping price and days based on state UF
function simulateShippingCostByState(stateUf) {
  // Sul & Sudeste gets flat R$ 19,90 flat or free, other states get R$ 29,90 flat
  const sulSudeste = ["SP", "RJ", "MG", "ES", "PR", "SC", "RS"];
  
  if (sulSudeste.includes(stateUf.toUpperCase())) {
    simulatedShippingCost = 19.90;
    simulatedShippingDays = Math.floor(Math.random() * 3) + 2; // 2 to 4 days
  } else {
    simulatedShippingCost = 29.90;
    simulatedShippingDays = Math.floor(Math.random() * 4) + 5; // 5 to 8 days
  }
}

/* --- 9. CREDIT CARD DYNAMIC VISUALS & INPUTS MIRRORING --- */
function setupCreditCardVisualMirror() {
  const container = document.getElementById("credit-card-container-visual");
  const cardNumInput = document.getElementById("card-num");
  const cardNameInput = document.getElementById("card-name");
  const cardExpiryInput = document.getElementById("card-expiry");
  const cardCvvInput = document.getElementById("card-cvv");
  const instDropdown = document.getElementById("card-installments");

  const visualNumber = document.getElementById("card-visual-number");
  const visualHolder = document.getElementById("card-visual-holder");
  const visualExpiry = document.getElementById("card-visual-expiry");
  const visualCvv = document.getElementById("card-visual-cvv");
  const visualBrandLogo = document.getElementById("card-visual-brand");
  const inputBrandIcon = document.getElementById("card-input-brand-icon");

  if (!cardNumInput) return;

  // Mirror Number Input
  cardNumInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    
    // Mask spacing: 0000 0000 0000 0000
    let formatted = "";
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) formatted += " ";
      formatted += value[i];
    }
    e.target.value = formatted;

    // Card mirroring
    visualNumber.innerText = formatted.padEnd(19, "•");

    // Dynamic brand identifier detection
    let brand = getCreditCardBrand(value);
    updateCreditCardBrandVisuals(brand, visualBrandLogo, inputBrandIcon);
  });

  // Mirror Name Input
  cardNameInput.addEventListener("input", (e) => {
    let value = e.target.value.toUpperCase().replace(/[^a-zA-Z\s]/g, "");
    e.target.value = value;

    visualHolder.innerText = value.length === 0 ? "NOME COMPLETO" : value;
  });

  // Mirror Expiry Input
  cardExpiryInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.substring(0, 4);

    // Formatting: MM/AA
    let formatted = "";
    if (value.length > 2) {
      formatted = value.substring(0, 2) + "/" + value.substring(2, 4);
    } else {
      formatted = value;
    }
    e.target.value = formatted;

    visualExpiry.innerText = formatted.length === 0 ? "MM/AA" : formatted;
  });

  // Mirror CVV Input & triggering visual 3D Card flip rotation!
  cardCvvInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    e.target.value = value;

    visualCvv.innerText = value.length === 0 ? "•••" : value;
  });

  cardCvvInput.addEventListener("focus", () => {
    container.classList.add("flip");
  });

  cardCvvInput.addEventListener("blur", () => {
    container.classList.remove("flip");
  });

  // Installment change trigger recalculate text display
  if (instDropdown) {
    instDropdown.addEventListener("change", () => {
      recalculateCheckoutSummary();
    });
  }
}

// Evaluates brand logo matching starting numbers prefix
function getCreditCardBrand(number) {
  if (number.startsWith("4")) return "visa";
  if (number.startsWith("5")) return "mastercard";
  if (number.startsWith("34") || number.startsWith("37")) return "amex";
  if (number.startsWith("36") || number.startsWith("38") || number.startsWith("30")) return "diners";
  return "generic";
}

function updateCreditCardBrandVisuals(brand, visualLogoEl, inputIconEl) {
  let fontAwesomeClass = "fa-solid fa-credit-card";
  
  switch(brand) {
    case "visa":
      fontAwesomeClass = "fa-brands fa-cc-visa";
      break;
    case "mastercard":
      fontAwesomeClass = "fa-brands fa-cc-mastercard";
      break;
    case "amex":
      fontAwesomeClass = "fa-brands fa-cc-amex";
      break;
    case "diners":
      fontAwesomeClass = "fa-brands fa-cc-diners-club";
      break;
  }

  if (visualLogoEl) visualLogoEl.innerHTML = `<i class="${fontAwesomeClass}"></i>`;
  if (inputIconEl) inputIconEl.className = `${fontAwesomeClass} card-input-icon`;
}

/* --- 10. CHECKOUT SUBMIT & GATEWAY SIMULATION --- */
function handleCheckoutFormSubmit() {
  const loadingModal = document.getElementById("gateway-loading-modal");
  const progressBar = document.getElementById("gateway-progress-bar-el");
  const gatewayTitle = document.getElementById("gateway-title");
  const gatewayDesc = document.getElementById("gateway-description");
  const processingTypeIcon = document.getElementById("processing-type-icon");

  if (!loadingModal || !progressBar) return;

  // Open the Gateway Loading Processing modal screen
  loadingModal.classList.add("active");
  
  // Set icons based on payment method
  processingTypeIcon.className = "fa-brands fa-whatsapp processing-card-icon";
  gatewayTitle.innerText = "PREPARANDO SEU PEDIDO...";
  gatewayDesc.innerText = "Aguarde enquanto estruturamos os dados da sua compra e preparamos a conexão direta e criptografada com o WhatsApp de finalização HYPEFIT.";

  // Progress bar animation simulation (takes ~1.8 seconds for WhatsApp redirection)
  let progress = 0;
  const intervalTime = 50; 
  const totalDuration = 1800; 
  const increments = 100 / (totalDuration / intervalTime);

  const stepsText = [
    { threshold: 10, text: "Compilando itens do carrinho..." },
    { threshold: 30, text: "Formatando metadados de entrega..." },
    { threshold: 55, text: "Gerando código identificador único HYPEFIT..." },
    { threshold: 80, text: "Estruturando link da API oficial do WhatsApp..." },
    { threshold: 95, text: "Conectando..." }
  ];

  const simulationInterval = setInterval(() => {
    progress += increments;
    if (progress > 100) progress = 100;
    
    progressBar.style.width = `${progress}%`;

    // Dynamic text update matching stages
    const matchedStep = stepsText.find((step, idx, arr) => {
      const nextStep = arr[idx + 1];
      return progress >= step.threshold && (!nextStep || progress < nextStep.threshold);
    });

    if (matchedStep) {
      gatewayDesc.innerText = matchedStep.text;
    }

    if (progress >= 100) {
      clearInterval(simulationInterval);
      
      // Close Gateway Sim Modal and Open Checkout Success Modal
      setTimeout(() => {
        loadingModal.classList.remove("active");
        progressBar.style.width = "0%"; // reset
        
        // Show Success Confirm Window and open WhatsApp
        showCheckoutSuccessWindow();
      }, 250);
    }
  }, intervalTime);
}

/* --- Render Confirm Success Screen with Confetti --- */
function showCheckoutSuccessWindow() {
  const successModal = document.getElementById("success-modal");
  if (!successModal) return;

  const dynamicPaymentBox = document.getElementById("success-payment-details-dynamic");
  const orderCodeEl = document.getElementById("success-order-code");
  const customerNameEl = document.getElementById("success-customer-name");
  const totalValueEl = document.getElementById("success-total-value");
  const shippingTimeEl = document.getElementById("success-shipping-time");

  // Generate random order code
  const randomOrderCode = `HPF-${Math.floor(100000 + Math.random() * 900000)}-BR`;
  if (orderCodeEl) orderCodeEl.innerText = randomOrderCode;

  // Customer Name display
  const customerName = document.getElementById("checkout-name").value;
  if (customerNameEl) customerNameEl.innerText = customerName;

  // Subtotal and calculations for success display
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Calculate shoe quantity
  const shoeQty = cart.reduce((acc, item) => {
    const prod = PRODUCTS_DATA.find(p => p.id === item.id);
    const cat = prod ? prod.category : '';
    return cat !== 'acessorios' ? acc + item.quantity : acc;
  }, 0);

  const isFree = (shoeQty >= 2);
  let shippingCost = isFree ? 0 : simulatedShippingCost;
  let discountPix = activePaymentMethod === 'pix' ? (subtotal + shippingCost) * 0.05 : 0;
  const finalTotal = subtotal + shippingCost - discountPix;
  
  if (totalValueEl) totalValueEl.innerText = `R$ ${finalTotal.toFixed(2).replace(".", ",")}`;

  // Shipping delivery estimations
  const calculatedDays = isFree ? 3 : simulatedShippingDays;
  if (shippingTimeEl) shippingTimeEl.innerText = `${calculatedDays} a ${calculatedDays + 3} dias úteis`;

  // Render dynamic payment confirmation modules depending on payment method
  if (activePaymentMethod === 'pix') {
    dynamicPaymentBox.innerHTML = `
      <div class="success-pix-instructions-box">
        <h4><i class="fa-brands fa-pix" style="color: var(--color-cyan); margin-right: 6px;"></i> Chave PIX modelo registrada:</h4>
        <p style="font-size: 0.75rem; color: var(--color-text-muted); text-align: center; margin-bottom: 12px;">Se quiser pagar via Pix dinâmico agora, utilize a chave Copia e Cola abaixo. Envie o comprovante em nossa conversa de WhatsApp.</p>
        <div class="pix-copia-cola-wrapper">
          <input type="text" readonly class="pix-copia-cola-input" id="pix-copia-cola-key" value="00020101021226920014br.gov.bcb.pix2570hypefit.pix.secure.pay98301049925204000053039865802BR5913Hypefit%20Loja6009GOIANIA62070503***6304CA12">
          <button class="pix-copy-btn" onclick="copyPixCopiaColaKey()"><i class="fa-regular fa-copy"></i> Copiar</button>
        </div>
      </div>
    `;
  } else if (activePaymentMethod === 'boleto') {
    dynamicPaymentBox.innerHTML = `
      <div class="success-boleto-box">
        <h4 style="font-size: 0.9rem; margin-bottom: 10px;"><i class="fa-solid fa-barcode" style="margin-right: 6px;"></i> Linha Digitável do Boleto:</h4>
        <p style="font-size: 0.75rem; color: var(--color-text-muted); text-align: center; margin-bottom: 16px;">O arquivo PDF do boleto será fornecido no atendimento do WhatsApp. Pague com o código de barras abaixo:</p>
        <div class="boleto-barcode-line">34191.79001 01043.513184 91020.150008 7 930400000${Math.floor(100 + Math.random() * 900)}</div>
      </div>
    `;
  } else {
    // Credit card displays approval directly
    dynamicPaymentBox.innerHTML = `
      <div class="success-card-approved-box">
        <i class="fa-solid fa-circle-check"></i>
        <span>DADOS COPIADOS! Transação do cartão de crédito será finalizada no link de checkout seguro enviado no WhatsApp.</span>
      </div>
    `;
  }

  // Generate WhatsApp Redirect Link and Open WhatsApp Tab!
  const whatsappUrl = generateWhatsAppMessageUrl(randomOrderCode, customerName, subtotal, shippingCost, discountPix, finalTotal, calculatedDays);
  
  // Update Success WhatsApp backup link
  const whatsDirectBtn = document.getElementById("success-whatsapp-direct-link");
  if (whatsDirectBtn) {
    whatsDirectBtn.setAttribute("href", whatsappUrl);
  }

  // Open WhatsApp in a new tab asynchronously
  window.open(whatsappUrl, '_blank');

  // Trigger confetti particles effects (visual luxury)
  triggerSuccessConfettiShower();

  // Clear shopping cart state!
  cart = [];
  saveCartToStorage();
  updateCartUI();

  // Open Success modal container
  successModal.classList.add("active");

  // Auto scroll to top window
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Formats and encodes the message for WhatsApp API
function generateWhatsAppMessageUrl(orderCode, name, subtotal, shipping, discount, total, shippingDays) {
  const phoneVal = document.getElementById("checkout-phone").value;
  const cpfVal = document.getElementById("checkout-cpf").value;
  const cepVal = document.getElementById("checkout-cep").value;
  const addressVal = document.getElementById("checkout-address").value;
  const numVal = document.getElementById("checkout-number").value;
  const compVal = document.getElementById("checkout-complement").value;
  const neighborhoodVal = document.getElementById("checkout-neighborhood").value;
  const cityVal = document.getElementById("checkout-city").value;
  const stateVal = document.getElementById("checkout-state").value;

  // Format products list
  const productsListText = cart.map(item => {
    return `- ${item.quantity}x ${item.title} | Cor: ${item.color} | Tam: ${item.size} (R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")})`;
  }).join("\n");

  // Format payment method text
  let paymentText = '';
  if (activePaymentMethod === 'pix') {
    paymentText = "PIX Expresso (Garante 5% de Desconto)";
  } else if (activePaymentMethod === 'card') {
    paymentText = "Cartão de Crédito (Link de Pagamento via WhatsApp)";
  } else {
    paymentText = "Boleto Bancário";
  }

  // Formulate text template
  const textMsg = `Olá, HYPEFIT! Gostaria de finalizar meu pedido.

📌 DETALHES DO PEDIDO:
• Código: ${orderCode}
• Cliente: ${name}
• WhatsApp: ${phoneVal}
• CPF: ${cpfVal}

📦 ENDEREÇO DE ENTREGA:
• CEP: ${cepVal}
• Endereço: ${addressVal}, nº ${numVal}${compVal ? ' - ' + compVal : ''}
• Bairro: ${neighborhoodVal}
• Cidade: ${cityVal} - ${stateVal}

🛍️ ITENS DO PEDIDO:
${productsListText}

💳 DADOS DE PAGAMENTO:
• Forma de Pagamento: ${paymentText}
• Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}
• Frete: ${shipping === 0 ? 'GRÁTIS (Sedex)' : 'R$ ' + shipping.toFixed(2).replace(".", ",")}
• Descontos/Bônus: ${discount === 0 ? 'R$ 0,00' : '- R$ ' + discount.toFixed(2).replace(".", ",")}
• TOTAL FINAL: R$ ${total.toFixed(2).replace(".", ",")}
• Prazo Estimado PAC: ${shippingDays} a ${shippingDays + 3} dias úteis

Aguardando atendimento para confirmação e despacho do sneaker. Obrigado!`;

  return `https://api.whatsapp.com/send?phone=556294879501&text=${encodeURIComponent(textMsg)}`;
}

// Copy Pix Copia e Cola key
window.copyPixCopiaColaKey = function() {
  const keyInput = document.getElementById("pix-copia-cola-key");
  if (keyInput) {
    keyInput.select();
    keyInput.setSelectionRange(0, 99999); // for mobile
    navigator.clipboard.writeText(keyInput.value);
    
    // Switch copy btn text momentarily
    const copyBtn = document.querySelector(".pix-copy-btn");
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copiado!`;
    setTimeout(() => {
      copyBtn.innerHTML = originalText;
    }, 2000);
  }
};

// Generates micro-animations of floating success colored confetti
function triggerSuccessConfettiShower() {
  const card = document.querySelector(".success-card");
  if (!card) return;

  // Remove old ones
  document.querySelectorAll(".success-card .confetti-particle").forEach(c => c.remove());

  const colors = ["#00f0ff", "#7000ff", "#ffffff", "#00ffff", "#8b5cf6"];
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti-particle";
    
    const size = Math.floor(Math.random() * 8) + 6;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.floor(Math.random() * 100);
    const top = Math.floor(Math.random() * 20) - 20; // start slightly above
    const rotation = Math.floor(Math.random() * 360);
    const delay = Math.random() * 1.5;
    const duration = Math.random() * 2 + 1.5;

    // Apply inline style declarations for particle
    Object.assign(confetti.style, {
      position: 'absolute',
      width: `${size}px`,
      height: `${size * (Math.random() > 0.5 ? 1.5 : 1)}px`,
      backgroundColor: color,
      left: `${left}%`,
      top: `${top}px`,
      opacity: Math.random() * 0.7 + 0.3,
      transform: `rotate(${rotation}deg)`,
      borderRadius: '2px',
      zIndex: '1',
      pointerEvents: 'none',
      animation: `fallAndSpin ${duration}s linear ${delay}s infinite`
    });

    card.appendChild(confetti);
  }

  // Inject temporary fall keyframe animation inside document stylesheet if missing
  if (!document.getElementById("success-confetti-keyframes")) {
    const style = document.createElement("style");
    style.id = "success-confetti-keyframes";
    style.innerHTML = `
      @keyframes fallAndSpin {
        0% { top: -20px; transform: rotate(0deg) translateX(0px); }
        50% { transform: rotate(180deg) translateX(15px); }
        100% { top: 100%; transform: rotate(360deg) translateX(-15px); opacity: 0; }
      }
      .confetti-particle {
        will-change: top, transform, opacity;
      }
    `;
    document.head.appendChild(style);
  }
}

// ==========================================================================
// POLICY MODAL CONTROLLER (EXCHANGE & RETURNS)
// ==========================================================================
const initPolicyModal = () => {
  const policyModal = document.getElementById("policy-modal");
  const policyModalCloseBtn = document.getElementById("policy-modal-close-btn");

  const openPolicyModal = (e) => {
    if (e) e.preventDefault();
    if (policyModal) {
      policyModal.classList.add("active");
      policyModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = 'hidden';
    }
  };

  const closePolicyModal = () => {
    if (policyModal) {
      policyModal.classList.remove("active");
      policyModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = '';
    }
  };

  // Bind all triggers
  document.querySelectorAll(".policy-trigger").forEach(link => {
    link.addEventListener("click", openPolicyModal);
  });

  if (policyModalCloseBtn) {
    policyModalCloseBtn.addEventListener("click", closePolicyModal);
  }
  if (policyModal) {
    policyModal.addEventListener("click", (e) => {
      if (e.target === policyModal) closePolicyModal();
    });
  }
};

// Initialize policy modal listeners immediately
initPolicyModal();

// ==========================================================================
// FAQ MODAL & ACCORDION CONTROLLER
// ==========================================================================
const initFaqModal = () => {
  const faqModal = document.getElementById("faq-modal");
  const faqModalCloseBtn = document.getElementById("faq-modal-close-btn");

  const openFaqModal = (e) => {
    if (e) e.preventDefault();
    if (faqModal) {
      faqModal.classList.add("active");
      faqModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = 'hidden';
    }
  };

  const closeFaqModal = () => {
    if (faqModal) {
      faqModal.classList.remove("active");
      faqModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = '';
    }
  };

  // Bind trigger links
  document.querySelectorAll(".faq-trigger").forEach(link => {
    link.addEventListener("click", openFaqModal);
  });

  if (faqModalCloseBtn) {
    faqModalCloseBtn.addEventListener("click", closeFaqModal);
  }
  if (faqModal) {
    faqModal.addEventListener("click", (e) => {
      if (e.target === faqModal) closeFaqModal();
    });
  }
};

// Toggle individual FAQ item accordion height
window.toggleFaqAccordion = function(header) {
  const item = header.parentElement;
  const body = item.querySelector(".faq-answer-body");
  
  if (item.classList.contains("active")) {
    item.classList.remove("active");
    body.style.height = "0";
  } else {
    // Close other active FAQ items
    item.parentElement.querySelectorAll(".faq-item").forEach(t => {
      t.classList.remove("active");
      const b = t.querySelector(".faq-answer-body");
      if (b) b.style.height = "0";
    });

    item.classList.add("active");
    body.style.height = body.scrollHeight + "px"; // Dynamic height transition!
  }
};

// Initialize FAQ modal
initFaqModal();

// ==========================================================================
// SHIPPING MODAL CONTROLLER (DISPATCH & SHIPPING TIMES)
// ==========================================================================
const initShippingModal = () => {
  const shippingModal = document.getElementById("shipping-modal");
  const shippingModalCloseBtn = document.getElementById("shipping-modal-close-btn");

  const openShippingModal = (e) => {
    if (e) e.preventDefault();
    if (shippingModal) {
      shippingModal.classList.add("active");
      shippingModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = 'hidden';
    }
  };

  const closeShippingModal = () => {
    if (shippingModal) {
      shippingModal.classList.remove("active");
      shippingModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = '';
    }
  };

  document.querySelectorAll(".shipping-trigger").forEach(link => {
    link.addEventListener("click", openShippingModal);
  });

  if (shippingModalCloseBtn) {
    shippingModalCloseBtn.addEventListener("click", closeShippingModal);
  }
  if (shippingModal) {
    shippingModal.addEventListener("click", (e) => {
      if (e.target === shippingModal) closeShippingModal();
    });
  }
};

// Initialize shipping modal listeners
initShippingModal();

