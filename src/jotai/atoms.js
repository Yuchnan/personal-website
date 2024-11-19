import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const modeAtom = atomWithStorage("day", "night")