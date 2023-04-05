import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { v4 as uuid } from 'uuid';

const storage = getStorage();

const uploadImage = async (file) => {
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
