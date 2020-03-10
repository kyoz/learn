def gen_number(end, step):
    i = 0
    numbers = []

    while i < end:
        numbers.append(i)
        i += step

    return numbers

def gen_number_with_range(end, step):
    return range(0, end, step)

print("gen_number(10, 2)", gen_number(10,2))
print("gen_number_with_range(10, 2)", [*gen_number_with_range(10, 2)])
