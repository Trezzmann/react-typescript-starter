export type todoType = {
  id: number;
  description: string | number;
};

export type actionType = {
  type: "ADD_TODO" | "REMOVE_TODO";
  payload: string | number;
};
