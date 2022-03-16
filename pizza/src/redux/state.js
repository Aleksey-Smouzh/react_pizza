let state = {
  meatData: [
    { id: 1, name: "Опята и грудинка", cost: 5  },
    { id: 2, name: "Баварская" , cost:  6},
    { id: 3, name: "Сырный цыпленок", cost: 7 },
    { id: 4, name: "Гавайская", cost: 2 },
    { id: 5, name: "Деревенская" , cost: 4},
    { id: 6, name: "Французкий цыпленок" , cost: 6},
    { id: 7, name: "Цыпленок дорблю" , cost: 8},
    { id: 8, name: "Мясная" , cost: 9},
  ],

  meatThinData26: [
    { id: 1, name: "Опята и грудинка", cost: 5  },
    { id: 2, name: "Баварская" , cost:  6},
    { id: 3, name: "Сырный цыпленок", cost: 7 },
    { id: 4, name: "Гавайская", cost: 2 },
    { id: 5, name: "Деревенская" , cost: 4},
    { id: 6, name: "Французкий цыпленок" , cost: 6},
    { id: 7, name: "Цыпленок дорблю" , cost: 8},
    { id: 8, name: "Мясная" , cost: 9},
  ],
  meatThinData30: [
    { id: 1, name: "Опята и грудинка", cost: 6  },
    { id: 2, name: "Баварская" , cost:  7},
    { id: 3, name: "Сырный цыпленок", cost: 8 },
    { id: 4, name: "Гавайская", cost: 9 },
    { id: 5, name: "Деревенская" , cost: 5},
    { id: 6, name: "Французкий цыпленок" , cost: 7},
    { id: 7, name: "Цыпленок дорблю" , cost: 9},
    { id: 8, name: "Мясная" , cost: 10},
  ],
  meatThinData40: [
    { id: 1, name: "Опята и грудинка", cost: 7  },
    { id: 2, name: "Баварская" , cost:  8},
    { id: 3, name: "Сырный цыпленок", cost: 9 },
    { id: 4, name: "Гавайская", cost: 5 },
    { id: 5, name: "Деревенская" , cost: 7},
    { id: 6, name: "Французкий цыпленок" , cost: 9},
    { id: 7, name: "Цыпленок дорблю" , cost: 11},
    { id: 8, name: "Мясная" , cost: 12},
  ],
  meatTraditionalData26: [
    { id: 1, name: "Опята и грудинка", cost: 2  },
    { id: 2, name: "Баварская" , cost:  3},
    { id: 3, name: "Сырный цыпленок", cost: 4 },
    { id: 4, name: "Гавайская", cost: 5 },
    { id: 5, name: "Деревенская" , cost: 4},
    { id: 6, name: "Французкий цыпленок" , cost: 6},
    { id: 7, name: "Цыпленок дорблю" , cost: 2},
    { id: 8, name: "Мясная" , cost: 7},
  ],
  meatTraditionalData30: [
    { id: 1, name: "Опята и грудинка", cost: 1  },
    { id: 2, name: "Баварская" , cost:  3},
    { id: 3, name: "Сырный цыпленок", cost: 5 },
    { id: 4, name: "Гавайская", cost: 6 },
    { id: 5, name: "Деревенская" , cost: 7},
    { id: 6, name: "Французкий цыпленок" , cost: 4},
    { id: 7, name: "Цыпленок дорблю" , cost: 9},
    { id: 8, name: "Мясная" , cost: 6},
  ],
  meatTraditionalData40: [
    { id: 1, name: "Опята и грудинка", cost: 3  },
    { id: 2, name: "Баварская" , cost:  5},
    { id: 3, name: "Сырный цыпленок", cost: 8 },
    { id: 4, name: "Гавайская", cost: 9},
    { id: 5, name: "Деревенская" , cost: 6},
    { id: 6, name: "Французкий цыпленок" , cost: 7},
    { id: 7, name: "Цыпленок дорблю" , cost: 9},
    { id: 8, name: "Мясная" , cost: 9},
  ],










  veganData: [
    { id: 1, name: "Вегетарианская" , cost: 2},
    { id: 2, name: "Четыре сыра" , cost: 5},
    { id: 3, name: "Сырная" , cost: 8},
    { id: 4, name: "Грибная" , cost: 9},
    { id: 5, name: "Филадельфия" , cost: 8},
  ],
  grillData: [
    { id: 1, name: "Цыпленок гриль" , cost: 2},
    { id: 2, name: "Пепперони грудинка барбекю" , cost: 6},
    { id: 3, name: "Цыпленок с соусом гриль" , cost: 8},
    { id: 4, name: "Цыпленок барбекю" , cost: 4},
    { id: 5, name: "Колбаски барбекю" , cost: 3},
    { id: 6, name: "Копченый цыпленок и охотничныи колбаски" , cost: 2}
  ],
  spicyData: [
    { id: 1, name: "Пепперони" , cost: 9},
    { id: 2, name: "Итальянская" , cost: 8},
    { id: 3, name: "Острая чили" , cost: 6},
    { id: 4, name: "Биф тейсти" , cost: 7},
    { id: 5, name: "Ранч пицца" , cost: 3}
  ],
  closedData: [
    { id: 1, name: "Опята и грудинка барбекю" , cost: 2},
    { id: 2, name: "Чесночный цыпленок" , cost: 9},
    { id: 3, name: "Салями, ветчина, грибы" , cost: 5},
    { id: 4, name: "Чизбургер пицца" , cost: 4},
    { id: 5, name: "Украинская" , cost: 7},
  ],
};
thin: 