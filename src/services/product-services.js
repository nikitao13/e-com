import { db } from "../config/firestore.js";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const getAllProducts = async () => {
  const collectionRef = collection(db, "products");
  const snapshot = await getDocs(collectionRef);
  const docData = snapshot.docs[0].data();
  return docData.products;
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error(`could not find product with id: ${id}`);
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};
