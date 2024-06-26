import { redirect } from "next/dist/server/api-utils";
import {create} from "zustand";

interface AppState {
  referral: string | null;
  loggedIn: boolean;
  isCollaborator: boolean;
  redirect: string | null;
  redirectedFromAuth: boolean;
}

interface Actions {
  setReferral: (referral: string | null) => void;
  setLoggedin: (loggedIn: boolean) => void;
  setRedirect: (redirect: string | null) => void;
  setRedirectedFromAuth: (redirectedFromAuth: boolean) => void;
}

const defaultStates: AppState = {
  referral: null,
  loggedIn: false,
  isCollaborator: false,
  redirect: null,
  redirectedFromAuth: false,
};

export const useAppStore = create<AppState & Actions>((set, get) => ({
  ...defaultStates,
  setReferral: (referral: string | null) => set({ referral }),
  setLoggedin: (loggedIn: boolean) => set({ loggedIn }),
  setRedirect: (redirect: string | null) => set({ redirect }),
  setRedirectedFromAuth: (redirectedFromAuth: boolean) =>
    set({ redirectedFromAuth }),
}));
