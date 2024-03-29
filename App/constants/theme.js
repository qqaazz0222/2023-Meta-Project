import { Platform } from "react-native";

const COLORS = {
    white: "#F6F8FA",
    gray1: "#EAECED",
    gray2: "#CBCDD3",
    gray3: "#9EA4A8",
    gray4: "#75777D",
    gray5: "#464B53",
    gray6: "#26282C",
    black: "#1C1E1F",
    danger: "#FF6676",
};

const FONTS = {
    regular: "Pretendard-Regular",
    medium: "Pretendard-Medium",
    semibold: "Pretendard-SemiBold",
    bold: "Pretendard-Bold",
};

const SIZES =
    Platform.OS === "ios"
        ? {
              dp0: 2,
              dp1: 4,
              dp2: 8,
              dp3: 12,
              dp4: 16,
              dp5: 20,
              dp6: 24,
              dp7: 28,
              dp8: 32,
              dp9: 36,
              dp10: 40,
              dp12: 48,
              dp16: 64,
          }
        : {
              dp0: 1.5,
              dp1: 3.5,
              dp2: 7,
              dp3: 10.5,
              dp4: 14,
              dp5: 17.5,
              dp6: 21,
              dp7: 24.5,
              dp8: 28,
              dp9: 31.5,
              dp10: 35,
              dp12: 42,
              dp16: 56,
          };

const Margin =
    Platform.OS === "ios" ? { safeAreaMargin: 0 } : { safeAreaMargin: 28 };

const PADDING = {
    l0: "4 0",
    l1: "8 4",
    l2: "12 8",
    l3: "16 12",
    l4: "20 16",
    l5: "24 20",
    l6: "28 24",
};

export { COLORS, FONTS, SIZES, Margin, PADDING };
