-- Last updated: 16/7/2026, 9:17:46 pm
# Write your MySQL query statement below
select EmployeeUni.unique_id,Employees.name from Employees left JOIN EmployeeUNI on Employees.id = EmployeeUNI.id; 