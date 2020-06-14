export const getState = (key) => {
    const state = localStorage.getItem(key);
  
    if (state !== null) {
      return JSON.parse(state);
    }
  
    return undefined;
  };
  
  export const setState = (key, state) => {
    const stateToSave = JSON.stringify(state);
    localStorage.setItem(key, stateToSave);
  };