const initialState = {
  skin: localStorage.getItem('skin') == null ? 'light' : localStorage.getItem('skin'),
};

export default (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'skin':
      newState.skin = action.val;
      localStorage.setItem('skin', action.val);
      document.body.className = `theme-${action.val}`;
      break;
    default:
      break;
  }
  return newState;
};
