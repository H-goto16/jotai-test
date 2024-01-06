import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const state = atom<string>("");
export const stateWithStorage = atomWithStorage("storageKey", "");
