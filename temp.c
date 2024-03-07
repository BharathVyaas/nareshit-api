def fibonacci(n):
    fib_series = [0, 1]  # Initialize Fibonacci series with first two elements

    # Generate Fibonacci series up to n
    for i in range(2, n):
        next_num = fib_series[-1] + fib_series[-2]
        fib_series.append(next_num)

    return fib_series

# Example usage:
n = 10  # Change this value to generate Fibonacci series up to a different number
print(fibonacci(n))
undefined
