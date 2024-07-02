import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { create } from "zustand";

interface AppState {
  referral: string | null;
  loggedIn: boolean;
  isCollaborator: boolean;
  redirect: string | null;
  redirectedFromAuth: boolean;
  activeCount: number | null;
}

interface Actions {
  setReferral: (referral: string | null) => void;
  setLoggedin: (loggedIn: boolean) => void;
  setRedirect: (redirect: string | null) => void;
  setRedirectedFromAuth: (redirectedFromAuth: boolean) => void;
  getActiveCount: (uid: string) => Promise<number>;
}

const defaultStates: AppState = {
  referral: null,
  loggedIn: false,
  isCollaborator: false,
  redirect: null,
  redirectedFromAuth: false,
  activeCount: null,
};

export const useAppStore = create<AppState & Actions>((set, get) => ({
  ...defaultStates,
  setReferral: (referral: string | null) => set({ referral }),
  setLoggedin: (loggedIn: boolean) => set({ loggedIn }),
  setRedirect: (redirect: string | null) => set({ redirect }),
  setRedirectedFromAuth: (redirectedFromAuth: boolean) =>
    set({ redirectedFromAuth }),
  getActiveCount: async (uid: string) => {
    try {
      // Query against collection1
      const collection1Ref = collection(db, 'users');
      const q = query(collection1Ref, where('refal', '==', uid), where('active', '==', true));
      const querySnapshot = await getDocs(q);

      // Get counts from both collections
      const count = querySnapshot.size;

      return count;
    } catch (error) {
      console.error("Error getting counts from collections:", error);
      throw error;
    }
  },
}));
