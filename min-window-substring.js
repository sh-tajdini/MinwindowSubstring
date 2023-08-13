function MinWindowSubstring(strArr) {
  const [N, K] = strArr;
  const charCount = new Map();
  for (const char of K) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  let left = 0;
  let right = 0;
  let minWindow = '';
  let minWindowLength = Infinity;
  let remainingChars = K.length;
  while (right < N.length) {
    const char = N[right];
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) - 1);
      if (charCount.get(char) >= 0) {
        remainingChars--;
      }
    }
    while (remainingChars === 0) {
      const windowLength = right - left + 1;
      if (windowLength < minWindowLength) {
        minWindow = N.substring(left, right + 1);
        minWindowLength = windowLength;
      }
      const leftChar = N[left];
      if (charCount.has(leftChar)) {
        charCount.set(leftChar, charCount.get(leftChar) + 1);
        if (charCount.get(leftChar) > 0) {
          remainingChars++;
        }
      }
      left++;
    }
    right++;
  }
  return minWindow;
}