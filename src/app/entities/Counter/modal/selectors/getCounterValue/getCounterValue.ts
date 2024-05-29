import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "../getCounter/getCounter";
import { CounterSchema } from "../../types/counterShema";

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
)