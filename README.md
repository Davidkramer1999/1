# React + Vite Pivot Table Challenge

## Project Overview
This project demonstrates a pivot table implementation using Jspreadsheet library in a React + Vite + TypeScript application.

## Setup Instructions

### Prerequisites
- Node.js (v20.15.1 or higher)
- npm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## Features Implemented

### ✅ Core Features
- **Data Worksheet**: Editable spreadsheet with 24 rows and 4 columns (Category, Subcategory, Region, Sales)
- **Pivot Table Worksheet**: Dynamic pivot table that aggregates data based on user-selected grouping
- **Two-Dimensional Grouping**: Group data by any two columns (e.g., Category + Subcategory, Category + Region)
- **Aggregation**: Sum aggregation for numeric columns
- **Sub-totals and Grand Totals**: Automatically calculated and displayed in the pivot table
- **User Controls**: UI controls to select grouping dimensions and aggregation column

### 🎯 Technical Stack
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Jspreadsheet v12** for spreadsheet functionality
- **ESLint** for code quality

## Project Structure
```
src/
├── components/
│   ├── DataWorksheet.tsx       # Main data input spreadsheet
│   ├── PivotControls.tsx       # Configuration controls
│   └── PivotTableWorksheet.tsx # Pivot table display
├── config/
│   └── jspreadsheet.config.ts  # License configuration
├── data/
│   └── sampleData.ts           # Sample dataset
├── types/
│   └── jspreadsheet.d.ts       # TypeScript declarations
├── App.tsx                      # Main application component
└── App.css                      # Styling
```

## How It Works

1. **Data Worksheet**: Displays the source data in an editable Jspreadsheet instance
2. **Pivot Controls**: Allows users to select:
   - Primary grouping dimension (Category, Subcategory, or Region)
   - Secondary grouping dimension
   - Aggregation column (Sales)
3. **Pivot Table**: Automatically generates aggregated view with:
   - Grouped rows by selected dimensions
   - Sub-totals for each primary group
   - Grand total at the bottom

## Approach & Design Decisions

### Component Architecture
- **Separation of Concerns**: Data worksheet, controls, and pivot table are separate components
- **State Management**: React useState for managing data and configuration
- **Type Safety**: Full TypeScript support with custom type declarations for Jspreadsheet

### Pivot Table Algorithm
The pivot table generation follows these steps:
1. Parse source data based on selected grouping columns
2. Build a nested Map structure for efficient aggregation
3. Calculate sub-totals for each primary group
4. Calculate grand total across all groups
5. Format output data for Jspreadsheet display

### Challenges Encountered

1. **TypeScript Support**: Jspreadsheet v12 doesn't have official TypeScript types
   - **Solution**: Created custom type declarations in `src/types/jspreadsheet.d.ts`

2. **License Key Management**: Daily license key expires after 24 hours
   - **Solution**: Centralized configuration in `jspreadsheet.config.ts` for easy updates

3. **Dynamic Pivot Updates**: Ensuring pivot table refreshes when configuration changes
   - **Solution**: Used React useEffect with dependencies on config and data

## Future Enhancements (Not Implemented)

### Advanced Features
- **Spreadsheet Formulas**: Cross-sheet references using GETPIVOTDATA or SUM formulas
- **Reactive Updates**: Automatic pivot table updates when data worksheet changes
- **Multiple Aggregations**: Support for AVG, COUNT, MIN, MAX in addition to SUM
- **Filtering**: Add filters to exclude certain data from pivot calculations
- **Export**: Export pivot table to CSV or Excel

### UI Improvements
- Drag-and-drop column selection
- Collapsible sub-groups in pivot table
- Chart visualization of pivot data
- Dark/light theme toggle

## Known Limitations

1. **Manual Refresh**: Pivot table requires clicking "Update Pivot Table" button to refresh
2. **Single Aggregation**: Only SUM aggregation is currently supported
3. **No Formulas**: Cross-sheet formulas not implemented due to time constraints
4. **Static License**: Daily license key needs manual update every 24 hours

## Next Steps

If continuing development:
1. Implement cross-sheet formulas for reactive updates
2. Add more aggregation functions (AVG, COUNT, etc.)
3. Implement data validation and error handling
4. Add unit tests for pivot calculation logic
5. Optimize performance for larger datasets

## License

This project uses Jspreadsheet v12 with a daily trial license. For production use, obtain a proper license from [jspreadsheet.com](https://jspreadsheet.com).

## Author

Created as part of a technical challenge to demonstrate rapid prototyping with unfamiliar libraries.
