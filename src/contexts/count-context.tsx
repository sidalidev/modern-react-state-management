import { atom, selector } from "recoil";

export const countState = atom({
  key: "countState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

const fetchDoubleCount = (count: number) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(count * 2);
    }, 1000);
  });
};

export const doubleCountState = selector({
  key: "doubleCountState",
  get: async ({ get }) => {
    const doubledCount = await fetchDoubleCount(get(countState));
    console.log(doubledCount);
    return doubledCount;
  },
});
