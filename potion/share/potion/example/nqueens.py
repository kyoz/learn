def queensproblem(rows, columns):
    solutions = [[]]
    for row in range(rows):
        solutions = add_one_queen(row, columns, solutions)
    return solutions
 
def add_one_queen(new_row, columns, prev_solutions):
    return [solution + [new_column]
            for solution in prev_solutions
            for new_column in range(columns)
            if no_conflict(new_row, new_column, solution)]
 
def no_conflict(new_row, new_column, solution):
    return all(solution[row]       != new_column           and
               solution[row] + row != new_column + new_row and
               solution[row] - row != new_column - new_row
               for row in range(new_row))

n = 4 
solutions = queensproblem(n, n)
print(len(solutions))
for solution in solutions:
    print(solution)

