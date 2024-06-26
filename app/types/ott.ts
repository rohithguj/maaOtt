interface ott {
  name: string;
  logoSrc: string;
  code: ottCode;
}

// Datatype for ott codes
type ottCode =
  | "runnTv"
  | "sanskarTv"
  | "shemarooTv"
  | "shortFundly"
  | "shortsTv"
  | "sonyLiv"
  | "stage"
  | "sunNxt"
  | "ulluTv"
  | "ultraJhakaas"
  | "vercel"
  | "vrOtt"
  | "zee5"
  | "aaoNxt"
  | "ahaTamil"
  | "ahaTelugu"
  | "altBalaji"
  | "bgimg"
  | "bhaktiFlix"
  | "chaupal"
  | "cinemaWorld"
  | "dangalPlay"
  | "distroTv"
  | "docuBay"
  | "dollywoodPlay"
  | "etvWin"
  | "fancode"
  | "iStream"
  | "iTap"
  | "kancchaLanka"
  | "lionsgatePlay"
  | "liveTv"
  | "logo"
  | "nammaFlix"
  | "next"
  | "omTv"
  | "playFlix"
  | "powerKids"
  | "pragPlay"
  | "primeFilx"
  | "ptcPlay"
  | "rajTv"
  | "reelDrama"
  | "hotstar"
  | "primeVideo";

type PricingDuration = "1m" | "3m" | "6m" | "1y";
