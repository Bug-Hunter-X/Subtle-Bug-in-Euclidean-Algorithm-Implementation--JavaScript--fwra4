# Subtle Bug in Euclidean Algorithm Implementation (JavaScript)

This repository demonstrates a subtle bug in a JavaScript implementation of the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers.  The original code handles positive inputs correctly, but fails to handle negative inputs gracefully. 

The `bug.js` file contains the buggy code. The `bugSolution.js` file presents a corrected version that addresses the issue.

## Bug Description

The Euclidean algorithm works by repeatedly applying the modulo operator until the remainder is zero. The last non-zero remainder is the GCD. However, the original code doesn't explicitly handle negative inputs. This can lead to an infinite loop or incorrect results.