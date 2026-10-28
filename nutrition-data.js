// 熱量估算資料：正常份量以常見的一份食物作為教學估計，並非正式營養標示。
// 少量、正常、大量沿用原本份量選單的相對係數：0.8、1、1.25。
window.CALORIE_MODEL = {
  portionMultipliers: {
    '0.8': '少量',
    '1': '正常',
    '1.25': '大量'
  },
  foods: {
    water: { normalGrams: 500, normalKcal: 0 },
    alcohol: { normalGrams: 330, normalKcal: 140 },
    drink: { normalGrams: 500, normalKcal: 210 },
    rice: { normalGrams: 150, normalKcal: 210 },
    steak: { normalGrams: 150, normalKcal: 375 },
    vegetable: { normalGrams: 150, normalKcal: 45 },
    pearl: { normalGrams: 100, normalKcal: 150 },
    bubbleTea: { normalGrams: 500, normalKcal: 350 },
    fried: { normalGrams: 150, normalKcal: 450 },
    apple: { normalGrams: 180, normalKcal: 95 },
    bread: { normalGrams: 60, normalKcal: 160 },
    egg: { normalGrams: 50, normalKcal: 70 },
    easy: { normalGrams: 300, normalKcal: 180 },
    hard: { normalGrams: 150, normalKcal: 400 }
  }
};
