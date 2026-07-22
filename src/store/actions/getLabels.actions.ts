import type { Labels } from '../../models/labels.type';
import { requestAPI } from '../../services/requestAPI';

export const getLabels = async (): Promise<Labels[]> => {
    const { data } = await requestAPI<Labels[]>('/labels');
    return data;
};
