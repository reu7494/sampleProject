export function getFinalState(baseState, queue) {
  let finalState = baseState;
  queue.forEach((action) => {
    if (typeof action === "function") {
      finalState = action(finalState);
    } else {
      finalState = action;
    }
  });
  return finalState;
}
