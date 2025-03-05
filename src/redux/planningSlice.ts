import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlanningItem {
  id: string;
  name: string;
  quantity: number;
  status: "pending" | "completed" | "canceled";
}

interface PlanningState {
  plans: PlanningItem[];
}

const initialState: PlanningState = {
  plans: [],
};

const planningSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {
    addPlan: (state, action: PayloadAction<PlanningItem>) => {
      state.plans.push(action.payload);
    },
    updatePlan: (state, action: PayloadAction<PlanningItem>) => {
      const index = state.plans.findIndex(
        (plan) => plan.id === action.payload.id
      );
      if (index !== -1) {
        state.plans[index] = action.payload;
      }
    },
    removePlan: (state, action: PayloadAction<string>) => {
      state.plans = state.plans.filter((plan) => plan.id !== action.payload);
    },
  },
});

export const { addPlan, updatePlan, removePlan } = planningSlice.actions;
export default planningSlice.reducer;
