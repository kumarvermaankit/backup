import { ModalState } from '../contexts/BookingModalContext';

// To stop the `onClick` event on Child element to trigger `onClick` event on Parent.
export const stopBubbling = (event: any) => {
  event.stopPropagation();
  event.cancelBubble = true;
};

export const isOnApplyPage = (path: string) =>
  path.includes('/apply') ? true : false;

export const initModalState = (path: string): ModalState => {
  return isOnApplyPage(path) ? ModalState.OPEN : ModalState.CLOSE;
};

/**
 * Decode a Base64 string to a JSON String and then to a JSON object.
 *
 * @param encodedStr Object encoded as string with Base64
 * @returns Decoded Object from `encodedStr`.
 * @returns undefined if the `encodedStr` is invalid/malformed.
 */
export const decodeStrToObj = (
  encodedStr: string
): Record<string, unknown> | undefined => {
  try {
    const decodedStr = Buffer.from(encodedStr, 'base64').toString();
    const decodedObj = JSON.parse(decodedStr);
    return decodedObj;
  } catch {
    return undefined;
  }
};
