let counter = 1;
let defaultGridColor = "#F17013";

//action
export const addGrid = () => ({
  type: "ADD_GRID",
  id: "r" + counter++
})

export const delGrid = (id) => ({
  type: "DEL_GRID",
  id
})

export const modGrid = (content) => ({
  type: "MOD_GRID",
  content
})

export const setGridColor = (color) => ({
  type: "GRID_COLOR",
  color
})

export const updateActivePage = (page) => ({
  type: "UPDATE_ACTIVE",
  page
})

const stateTemplate = {
  grids: [

  ],
  gridColor: defaultGridColor,
  activePage: 0
}

export const grids = (state = stateTemplate, action) => {
  switch (action.type) {
    case "ADD_GRID":
      return { ...state, grids: [...state.grids, grid(state, action)] }
    case "DEL_GRID":
      const newGrids = state.grids.filter(grid => grid.i !== action.id);
      return { ...state, grids: newGrids }
    case "MOD_GRID":
      const newState2 = { ...state, grids: action.content }
      return newState2;
    case "GRID_COLOR":
      return {...state, color: action.color}
    case "UPDATE_ACTIVE":
      return {...state, activePage: action.page}
    default:
      return state;
  }
}

const grid = (state, action) => {
  switch (action.type) {
    case "ADD_GRID":
      return {
        i: action.id,
        x: (state.length * 2) % (state.cols || 12),
        y: Infinity,
        w: 2,
        h: 2
      }
    default:
      return {};
  }
}
