import { studentWithGradesType } from "../utils/types";

// Question: Write a function that reverses a string.
// The function should take a string as input and return the string reversed.
export const reverseString = (string: string): string => {
  // put your code here and return the reversed string
  return "";
};

// Question: Write a function that finds the maximum number in an array.
// The function should take an array of numbers and return the largest number.
// If the array is empty, return undefined.
export const findMax = (numbers: number[]): number | undefined => {
  // put your code here and return the largest number
  return 0;
};

// Question: Write a function return a student object by id.
// The function should take an array of student objects and return the student object by id.
// if the student is not found, return undefined.
export const findStudent = (studentWithGrades: studentWithGradesType[], studentId: number): studentWithGradesType | undefined => {
  // put your code here and return the student object
  return {} as studentWithGradesType;
};

// Question: Write a function return average of student grades.
// The function should take an array of student grades and return the average number.
// if the student is not found, return "Student not found".
// if the student has no grades, return "No grades found".
export const findAverage = (studentWithGrades: studentWithGradesType[], studentId: number): number | string => {
  // put your code here and return the average number
  return 0;
};

// Question: Write a function that removes duplicates from an array.
// The function should take an array and return a new array with only unique elements.
export const removeDuplicates = (array: number[]): number[] => {
  // put your code here and return the new array
  return [];
};

// Question: Write a function to fetch data from an API.
// The function should make a GET request to the specified URL and return the data.
export const fetchData = async <T>(url: string): Promise<T> => {
  // put your code here and return the fetched data
  return {} as T;
};
