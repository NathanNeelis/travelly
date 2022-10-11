import { atom } from "recoil";

export const recoilFilters = atom({
  key: "recoilFilters",
  default: {
    isIsland: undefined, // boolean
    metroCategory: undefined, // boolean
    mountainCategory: undefined, // enum [1, 2, 3, 4]
    urbanRuralRemoteCategory: undefined, // enum [1, 21, 22, 31, 32]
    coastalCategory: undefined, // enum [0, 1, 2]
    borderCategory: undefined, // enum [0, 9]
    currencyCode: undefined, // enum [EUR, CZK, DKK, HUF, PLN, ROL, SEK, GBP, ISK, CHF, NOK, TRY]
    schengenMembership: undefined, // boolean
    euMembership: undefined, //boolean
    q: undefined, // string format search query -> countries / region / district
  },
});
