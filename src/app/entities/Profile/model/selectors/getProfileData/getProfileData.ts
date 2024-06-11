import { StateSchema } from "app/providers/StoreProvider";
import { Profile } from "../../types/ProfileSchema";


export const getProfileData = (state: StateSchema): Profile | undefined => {
  return state?.profile?.data;
};
