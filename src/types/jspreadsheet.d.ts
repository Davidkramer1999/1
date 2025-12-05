/**
 * TypeScript declarations for Jspreadsheet
 * This provides basic type support for the library
 */

declare module 'jspreadsheet' {
    export interface JspreadsheetColumn {
        title?: string;
        width?: string;
        type?: string;
        mask?: string;
        decimal?: string;
    }

    export interface JspreadsheetWorksheet {
        data?: (string | number)[][];
        columns?: JspreadsheetColumn[];
        minDimensions?: [number, number];
        tableOverflow?: boolean;
        tableWidth?: string;
        tableHeight?: string;
    }

    export interface JspreadsheetOptions {
        worksheets?: JspreadsheetWorksheet[];
        tabs?: boolean;
        toolbar?: boolean;
    }

    export interface JspreadsheetInstance {
        destroy: () => void;
        getData: () => (string | number)[][];
        setData: (data: (string | number)[][]) => void;
        getWorksheet: (index: number) => any;
    }

    function jspreadsheet(
        element: HTMLElement,
        options: JspreadsheetOptions
    ): JspreadsheetInstance;

    namespace jspreadsheet {
        function setLicense(key: string): void;
    }

    export default jspreadsheet;
}

declare module '@jspreadsheet/react' {
    import { ReactElement } from 'react';
    import type { JspreadsheetInstance, JspreadsheetColumn } from 'jspreadsheet';

    export interface WorksheetProps {
        data?: (string | number)[][];
        columns?: JspreadsheetColumn[];
        minDimensions?: [number, number];
        tableOverflow?: boolean;
        tableWidth?: string;
        tableHeight?: string;
    }

    export interface SpreadsheetProps {
        tabs?: boolean;
        toolbar?: boolean;
        onload?: (instance: JspreadsheetInstance) => void;
        onchange?: () => void;
        children?: ReactElement<WorksheetProps> | ReactElement<WorksheetProps>[];
    }

    export function Spreadsheet(props: SpreadsheetProps): ReactElement;
    export function Worksheet(props: WorksheetProps): ReactElement;

    export const jspreadsheet: {
        setLicense: (key: string) => void;
    };
}
