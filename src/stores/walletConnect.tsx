import { create } from "zustand";

type WalletConnectedStatusType = "connected" | "disconnected";

type WalletConnectState = {
  walletConnectStatus: WalletConnectedStatusType;
  setWalletConnectedStatus: (status: WalletConnectedStatusType) => void;
  toggleWalletConnectedStatus: () => void;
};

export const useWalletConnectStore = create<WalletConnectState>()((set) => ({
  walletConnectStatus: "disconnected",
  setWalletConnectedStatus: (status) => set((state) => ({ ...state, walletConnectStatus: status })),
  toggleWalletConnectedStatus: () =>
    set((state) => ({
      ...state,
      status: state.walletConnectStatus === "connected" ? "disconnected" : "connected",
    })),
}));
