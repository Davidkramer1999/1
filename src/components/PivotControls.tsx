import { useState } from 'react';

export interface PivotConfig {
    groupBy1: string;
    groupBy2: string;
    aggregateColumn: string;
}

interface PivotControlsProps {
    onConfigChange: (config: PivotConfig) => void;
}

export default function PivotControls({ onConfigChange }: PivotControlsProps) {
    const [groupBy1, setGroupBy1] = useState('Category');
    const [groupBy2, setGroupBy2] = useState('Subcategory');
    const [aggregateColumn, setAggregateColumn] = useState('Sales');

    const handleUpdate = () => {
        onConfigChange({
            groupBy1,
            groupBy2,
            aggregateColumn,
        });
    };

    return (
        <div className="pivot-controls">
            <h3>Pivot Table Configuration</h3>
            <div className="control-group">
                <label>
                    Group By (Primary):
                    <select
                        value={groupBy1}
                        onChange={(e) => setGroupBy1(e.target.value)}
                    >
                        <option value="Category">Category</option>
                        <option value="Subcategory">Subcategory</option>
                        <option value="Region">Region</option>
                    </select>
                </label>

                <label>
                    Group By (Secondary):
                    <select
                        value={groupBy2}
                        onChange={(e) => setGroupBy2(e.target.value)}
                    >
                        <option value="Category">Category</option>
                        <option value="Subcategory">Subcategory</option>
                        <option value="Region">Region</option>
                    </select>
                </label>

                <label>
                    Aggregate Column:
                    <select
                        value={aggregateColumn}
                        onChange={(e) => setAggregateColumn(e.target.value)}
                    >
                        <option value="Sales">Sales (Sum)</option>
                    </select>
                </label>

                <button onClick={handleUpdate}>Update Pivot Table</button>
            </div>
        </div>
    );
}
