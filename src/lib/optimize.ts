// eslint-disable-next-line @typescript-eslint/no-explicit-any
const debounce = <F extends (...args: any[]) => any>(
  func: F,
  wait: number,
  immediate = false,
): ((...args: Parameters<F>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any, ...args: Parameters<F>) {
    const doLater = () => {
      timeoutId = undefined;
      if (!immediate) {
        func.apply(this, args);
      }
    };

    const shouldCallNow = immediate && timeoutId === undefined;

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, wait);

    if (shouldCallNow) {
      func.apply(this, args);
    }
  };
};

export { debounce };
