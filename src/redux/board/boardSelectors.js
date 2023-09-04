export const selectBoards = state => state.boards.allBoards;
export const selectBoardById = state => state.boards.boardById;
export const selectColumns = state => state.boards.boardById.columns;
export const selectIsLoading = state => state.boards.isLoading;
export const selectError = state => state.boards.error;