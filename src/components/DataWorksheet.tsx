import { useRef, useEffect } from 'react';
import jspreadsheet from 'jspreadsheet';
import type { JspreadsheetInstance } from 'jspreadsheet';
import { JSPREADSHEET_LICENSE_KEY } from '../config/jspreadsheet.config';
import { sampleData, columnHeaders } from '../data/sampleData';
import 'jsuites/dist/jsuites.css';
import 'jspreadsheet/dist/jspreadsheet.css';

interface DataWorksheetProps {
    onDataChange?: (data: (string | number)[][]) => void;
    onInstanceReady?: (instance: any) => void;
}

export default function DataWorksheet({ onDataChange, onInstanceReady }: DataWorksheetProps) {
    const jssRef = useRef<HTMLDivElement>(null);
    const instanceRef = useRef<any>(null);

    useEffect(() => {
        if (!jssRef.current || instanceRef.current) return;

        // Set license key
        jspreadsheet.setLicense(JSPREADSHEET_LICENSE_KEY);

        // Create the spreadsheet instance
        const instance = jspreadsheet(jssRef.current, {
            worksheets: [{
                data: sampleData,
                columns: columnHeaders,
                minDimensions: [4, 25],
                tableOverflow: true,
                tableWidth: '100%',
                tableHeight: '500px',
            }],
            tabs: true,
            toolbar: true,
        });

        instanceRef.current = instance;

        // Notify parent component
        if (onInstanceReady) {
            onInstanceReady(instance);
        }

        // Cleanup
        return () => {
            if (instanceRef.current) {
                if (typeof instanceRef.current.destroy === 'function') {
                    instanceRef.current.destroy();
                }
                instanceRef.current = null;
            }
        };
    }, [onInstanceReady]);

    // Handle data changes
    useEffect(() => {
        if (onDataChange && instanceRef.current) {
            const handleChange = () => {
                try {
                    const worksheet = instanceRef.current[0];
                    if (worksheet && worksheet.getData) {
                        onDataChange(worksheet.getData());
                    }
                } catch (error) {
                    console.error('Error getting data:', error);
                }
            };

            // Call initially
            handleChange();

            // Set up interval to check for changes (simple approach)
            const interval = setInterval(handleChange, 1000);

            return () => clearInterval(interval);
        }
    }, [onDataChange]);

    return (
        <div className="data-worksheet">
            <h2>Data Worksheet</h2>
            <p>Edit the data below. Changes will automatically update the pivot table.</p>
            <div ref={jssRef} />
        </div>
    );
}
