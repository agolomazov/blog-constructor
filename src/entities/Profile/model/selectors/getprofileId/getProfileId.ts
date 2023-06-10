import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileId = (state: StateSchema) => state.profile?.data?.id;
