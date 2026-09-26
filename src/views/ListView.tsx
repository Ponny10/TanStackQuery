import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { LoadingSpinner } from '../shared/LoadingSpinner';
import { useIssues } from '../hooks/useIssues';
import { useState } from 'react';
import type { State } from '../models/issues.type';

export const ListView = () => {
    const [state, setState] = useState<State>('all');
    const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

    const { issueQuery, currentPage, nextPage, prevPage } = useIssues({ state, selectedLabels });

    const toggleSelectedLabels = (label: string) => {
        if (selectedLabels.includes(label)) {
            setSelectedLabels(selectedLabels.filter((currentLabel) => currentLabel !== label));
        } else {
            setSelectedLabels([...selectedLabels, label]);
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
            <div className="col-span-1 sm:col-span-2">
                {issueQuery.isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <IssueList
                            issues={issueQuery.data ?? []}
                            onChangeState={setState}
                            state={state}
                        />
                        {issueQuery.data?.length !== 0 ? (
                            <div className="flex justify-between items-center mt-2">
                                <button
                                    onClick={prevPage}
                                    className="p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all">
                                    Anteriores
                                </button>
                                <p>{currentPage}</p>
                                <button
                                    onClick={nextPage}
                                    className="p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all">
                                    Siguiente
                                </button>
                            </div>
                        ) : (
                            <p>No existen issues</p>
                        )}
                    </>
                )}
            </div>

            <div className="col-span-1 px-2">
                <LabelPicker
                    onSelectedLabels={toggleSelectedLabels}
                    selectedLabel={selectedLabels}
                />
            </div>
        </div>
    );
};
