export interface ValentineDay {
  date: number; // 7–15
  name: string;
  subtitle: string;
  lines: string[]; // metaphorical lines for the day
  componentKey: string;
}

export const VALENTINE_DAYS: ValentineDay[] = [
  {
    date: 7,
    name: "Rose Day",
    subtitle: "Where every petal holds a promise",
    lines: [
      "Like a rose that blooms only for the one who tends it—you are that bloom in my life.",
      "Not one thorn could keep me from reaching for you; every petal was worth the wait.",
      "Some love is red like roses, fierce and full; ours is that kind.",
    ],
    componentKey: "rose",
  },
  {
    date: 8,
    name: "Propose Day",
    subtitle: "The day words became forever",
    lines: [
      "I didn’t just ask a question—I offered my tomorrows, and you said yes.",
      "Every ‘will you’ led to your ‘I will,’ and that’s the only answer I’ll ever need.",
      "You turned a moment into a promise; that’s the magic of your yes.",
    ],
    componentKey: "propose",
  },
  {
    date: 9,
    name: "Chocolate Day",
    subtitle: "Sweetness we share",
    lines: [
      "Life with you is like the best kind of chocolate—rich, a little bittersweet, and impossible to have just once.",
      "You’re the sweetness that doesn’t melt away when the day gets hard.",
      "We’re not just sharing chocolate; we’re sharing the same kind of sweet.",
    ],
    componentKey: "chocolate",
  },
  {
    date: 10,
    name: "Teddy Day",
    subtitle: "Comfort and warmth",
    lines: [
      "You’re my safe place—the hug that doesn’t need a reason, the comfort that never asks why.",
      "Like a teddy that’s always there, you’re the softness I come home to.",
      "Some days all I need is the warmth of knowing you’re mine—my forever teddy.",
    ],
    componentKey: "teddy",
  },
  {
    date: 11,
    name: "Promise Day",
    subtitle: "Words we keep",
    lines: [
      "I don’t promise you perfect days—I promise you my hand through every one.",
      "Every promise I make is a thread; together we’re weaving something that lasts.",
      "Your trust is the greatest gift; I’ll spend every day earning it again.",
    ],
    componentKey: "promise",
  },
  {
    date: 12,
    name: "Hug Day",
    subtitle: "Closeness without words",
    lines: [
      "Your hug is the only language that needs no translation—it just says ‘you’re home.’",
      "We don’t need a day to hug; we need a day to celebrate that we always can.",
      "The best place in the world is right inside your arms.",
    ],
    componentKey: "hug",
  },
  {
    date: 13,
    name: "Kiss Day",
    subtitle: "A breath of love",
    lines: [
      "A kiss from you isn’t just a touch—it’s a quiet ‘I choose you’ every time.",
      "We’ve turned ordinary moments into memories with a single kiss.",
      "You’re the one I want to kiss good morning and goodnight—and every moment in between.",
    ],
    componentKey: "kiss",
  },
  {
    date: 14,
    name: "Valentine’s Day",
    subtitle: "A day that’s ours",
    lines: [
      "Valentine’s Day isn’t a date on the calendar—it’s every day I get to love you.",
      "We didn’t need a day to fall in love; we need today to celebrate that we did.",
      "You’re not my Valentine for a day—you’re my always, with a special day to say it louder.",
    ],
    componentKey: "valentine",
  },
  {
    date: 15,
    name: "Mahashivratri",
    subtitle: "Blessings and new beginnings",
    lines: [
      "On this night of Shiva, I pray for our bond to be as timeless as the divine—steady, sacred, and true.",
      "Like the one who watches over the world, may we watch over each other with the same devotion.",
      "Mahashivratri brings blessings; you’re already mine—so today we celebrate both.",
    ],
    componentKey: "mahashivratri",
  },
];

export function getValentineDayDate(year: number, dayOfMonth: number): Date {
  return new Date(year, 1, dayOfMonth); // month 1 = February
}

export function isDayUnlocked(dayDate: number, today: Date): boolean {
  const year = today.getFullYear();
  const ref = new Date(year, 1, dayDate);
  return today >= ref;
}

export function getLatestUnlockedDay(today: Date): number {
  for (let d = 15; d >= 7; d--) {
    if (isDayUnlocked(d, today)) return d;
  }
  return 6; // none yet
}
