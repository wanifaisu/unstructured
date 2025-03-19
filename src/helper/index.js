import CryptoJS from 'crypto-js';
export const formatPhoneNumber = (value) => {
  if (!value) return '';

  // Remove all non-digit characters
  let cleaned = value?.replace(/\D/g, '');

  // Truncate to a maximum of 10 digits
  cleaned = cleaned?.substring(0, 10);

  // Match the cleaned value to the desired format
  let match = cleaned?.match(/^(\d{3})(\d{3})(\d{0,4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}${match[3] ? '-' + match[3] : ''}`;
  }

  return value;
};
export const unformatPhoneNumber = (value) => {
  if (!value) return '';

  // Remove all non-digit characters
  return value?.replace(/\D/g, '');
};
export function decryptSSN(encryptedSSN) {
  console.log(import.meta.env.VITE_PUBLIC_KEY, 'VITE_PUBLIC_KEY');
  try {
    if (!encryptedSSN) {
      throw new Error('Encrypted SSN is missing');
    }

    // Split the encrypted string into IV, encrypted data, and authTag
    const parts = encryptedSSN.split(':');
    if (parts.length !== 3) {
      throw new Error('Invalid encrypted SSN format');
    }

    const iv = CryptoJS.enc.Hex.parse(parts[0]); // Convert IV from hex to WordArray
    const encryptedText = parts[1]; // Encrypted data
    const authTag = CryptoJS.enc.Hex.parse(parts[2]); // Convert authTag from hex to WordArray

    console.log('IV:', iv.toString());
    console.log('Encrypted Data:', encryptedText);
    console.log('Auth Tag:', authTag.toString());

    // Convert the secret key from environment variable to WordArray
    const secretKey = CryptoJS.enc.Hex.parse(import.meta.env.VITE_PUBLIC_KEY);

    // Decrypt the data using AES-256-GCM
    const decrypted = CryptoJS.AES.decrypt(
      { ciphertext: CryptoJS.enc.Hex.parse(encryptedText) }, // Encrypted data
      secretKey, // Secret key
      {
        iv: iv, // Initialization vector
        mode: CryptoJS.mode.GCM, // AES-GCM mode
        padding: CryptoJS.pad.NoPadding, // No padding for GCM
      }
    );

    // Convert the decrypted data to a UTF-8 string
    const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

    return decryptedText;
  } catch (error) {
    console.error('❌ Decryption failed:', error);
    return null;
  }
}
