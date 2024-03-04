#include <stdio.h>

int main() {
    // Variables to store the numbers
    int num1, num2;

    // Input the first number
    printf("Enter the first number: ");
    scanf("%d", &num1);

    // Input the second number
    printf("Enter the second number: ");
    scanf("%d", &num2);

    // Compare and print the result
    if (num1 > num2) {
        printf("%d is bigger than %d\n", num1, num2);
    } else if (num1 < num2) {
        printf("%d is bigger than %d\n", num2, num1);
    } else {
        printf("Both numbers are equal\n");
    }

    return 0;
}
