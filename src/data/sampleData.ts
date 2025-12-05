/**
 * Sample dataset for the pivot table challenge
 * Minimum 20 rows, 4 columns as per requirements
 */

export interface SalesData {
    category: string;
    subcategory: string;
    region: string;
    sales: number;
}

export const sampleData: (string | number)[][] = [
    ['Electronics', 'Laptops', 'North', 15000],
    ['Electronics', 'Laptops', 'South', 12000],
    ['Electronics', 'Laptops', 'East', 18000],
    ['Electronics', 'Laptops', 'West', 14000],
    ['Electronics', 'Phones', 'North', 25000],
    ['Electronics', 'Phones', 'South', 22000],
    ['Electronics', 'Phones', 'East', 28000],
    ['Electronics', 'Phones', 'West', 24000],
    ['Furniture', 'Chairs', 'North', 8000],
    ['Furniture', 'Chairs', 'South', 7500],
    ['Furniture', 'Chairs', 'East', 9000],
    ['Furniture', 'Chairs', 'West', 8500],
    ['Furniture', 'Desks', 'North', 12000],
    ['Furniture', 'Desks', 'South', 11000],
    ['Furniture', 'Desks', 'East', 13000],
    ['Furniture', 'Desks', 'West', 12500],
    ['Clothing', 'Shirts', 'North', 5000],
    ['Clothing', 'Shirts', 'South', 4500],
    ['Clothing', 'Shirts', 'East', 6000],
    ['Clothing', 'Shirts', 'West', 5500],
    ['Clothing', 'Pants', 'North', 7000],
    ['Clothing', 'Pants', 'South', 6500],
    ['Clothing', 'Pants', 'East', 8000],
    ['Clothing', 'Pants', 'West', 7500],
];

export const columnHeaders = [
    { title: 'Category', width: '150px' },
    { title: 'Subcategory', width: '150px' },
    { title: 'Region', width: '100px' },
    { title: 'Sales', width: '100px' },
];
