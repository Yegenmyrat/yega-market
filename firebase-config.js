// ====== 1) Firebase Console > Project settings > Your apps > Web > firebaseConfig ======
// Bu ýerdäki "BU_YERE" ýazgylaryny öz maglumatlaryňyz bilen çalyşyň.
export const firebaseConfig = {
  apiKey: "BU_YERE",
  authDomain: "BU_YERE.firebaseapp.com",
  projectId: "BU_YERE",
  appId: "BU_YERE"
};

// ====== 2) Admin Gmail adresi (firestore.rules faýlynda hem şol adres bolmaly) ======
export const ADMIN_EMAIL = "BU_YERE@gmail.com";

export const configured = !String(firebaseConfig.apiKey).startsWith("BU_");

export const CATEGORIES = [
  { id: "clothes", emoji: "👔" },
  { id: "electronics", emoji: "📱" },
  { id: "home", emoji: "🏡" },
  { id: "beauty", emoji: "✿" },
  { id: "sport", emoji: "⚽" },
  { id: "accessories", emoji: "⌚" }
];
