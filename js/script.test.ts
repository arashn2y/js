import { students } from "../utils/db";
import { removeDuplicates, findMax, reverseString, fetchData, findStudent, findAverageGradesForStudent } from "./script";

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("world")).toBe("dlrow");
  expect(reverseString("")).toBe("");
});

test("finds the maximum number in an array", () => {
  expect(findMax([1, 2, 3, 4, 5])).toBe(5);
  expect(findMax([-10, -5, -2])).toBe(-2);
  expect(findMax([])).toBe(undefined);
});

test("finds a student by id", () => {
  expect(findStudent(students, 1)).toEqual(students[0]);
  expect(findStudent(students, 2)).toEqual(students[1]);
  expect(findStudent(students, 3)).toEqual(students[2]);
  expect(findStudent(students, 4)).toBe(undefined);
});

test("finds the average of student grades", () => {
  expect(findAverageGradesForStudent(students, 1)).toBe(90);
  expect(findAverageGradesForStudent(students, 2)).toBe(85);
  expect(findAverageGradesForStudent(students, 3)).toBe("No grades found");
  expect(findAverageGradesForStudent(students, 4)).toBe("Student not found");
});

test("removes duplicates from an array", () => {
  expect(removeDuplicates([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
  expect(removeDuplicates([5, 5, 5])).toEqual([5]);
  expect(removeDuplicates([])).toEqual([]);
});

test("fetches data from an API", async () => {
  const data = await fetchData("https://dummyjson.com/carts");
  expect(data).toBeDefined();
  expect(data).toHaveProperty("carts");
});
