import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuid } from 'uuid';

const storage = getStorage();

/**
 * Uploads the selected file object to Firebase Storage and retrieves the image URL.
 * @param {object} file
 * Object of the image the user has selected to save to Firebase Storage.
 * @returns
 * The image URL of the image from Firebase Storage.
 */
const uploadImage = async (file) => {
  console.log('File: ', file);
  try {
    const imageRef = ref(storage, `${uuid()}--${file.name}`);
    const snapshot = await uploadBytes(imageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch {
    return null;
  }
};

export { uploadImage };
