export function getFinalState(baseState, queue) {
  let finalState = baseState;
  for (let i = 0; i < queue.length; i++) {
    const action = queue[i];

    if (typeof action === "function") {
      finalState = action(finalState);
    } else {
      finalState = action;
    }
  }
  return finalState;
}
