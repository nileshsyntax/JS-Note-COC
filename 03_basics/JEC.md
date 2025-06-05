
# JavaScript Execution Context

We will learn. How JavaScript execute code or call stack.

### Execution Context

Execution context in JavaScript means how JavaScript run a file. JavaScript runs a program in two phase.

Whenever a code file given to JavaScript it creates a Global Execution Context and the Global EC are referred to a variable called "this". The "this" variable holds the the Global EC. The Global Execution contxt for broser and node environment are different, as so for other environment.

Inside browser the value of "this" variable is Window Object.

- Global Execution Context
- Function Execution Context
- Eval Execution Context (optional)

> JavaScript is Single thread and it execute in a thread.


## Execution Context

### JavaScript code runs in two phase

- Memory Creation Phase (MCP)
- Execution Phase (EP)


### Basic difference between MCP & EP

Memory creation phase allocate space or memory for the variables and other declarations. It doesn't execute anything. Execution Phase execution like functions or calculations etc.

## Start with this code Example
``` js
1. let val1 = 10;
2. let val2 = 5;
3. function addNum(num1, num2){
4.     let total = num1 + num2;
5.     return total
6. }
7. let result1 = addNum(val1, val2);
8. let result2 = addNum(10, 2);
```

### **Phase 1: Global Execution/environment:** 
Any code/programme file first runs through Global Execution and it allocates in "this" variable.

### **Phase 2: Memory Creation Phase:**  
All variable are collected and kept in this phase. Like, from the above code example this will process as below..

Collect variable assign `undefined` value. For function it assign the function defination.

1. Line Number 1: `val1` --> `undefined`
2. Line Number 2: `val2` --> `undefined`
3. Line Number 3-6: `addNum` --> `defination` of function
4. Line Number 7: `result1` --> `undefined`
5. Line Number 8: `result2` --> `undefined`

### **Phase 3: Execution Phase:** 

1. **Line Number 1:** `val1` <-- 10
2. **Line Number 2:** `val2` <-- 5
3. **From line no 3-6:** will not execute even it's in execution phase will do nothing as it's function defination are holds in `addNum()`. 

4. **Line Number 7: (let result1 = addNum(val1, val2);)**  
As the variable `result1` executes a function call. So it creates a new sandbox for **new Executional Context**.  

    The **New Executional Context** will create a  
    - New Variable environment
    - Execution Thread.
    
    Which start the following two phase again for the function.

    -- Memory Phase  
    -- Execution Phase  

    > **Note:** Global Execution will creates once. But for each funtion in programe it creates a new sandbox of Executional Context which starts the Memory Phase and Execution Phase again.

    - **Memory Phase:**     
    Line 3: `val1` --> `undefined`  
    Line 3: `val2` --> `undefined`  
    Line 4: `total` --> `undefined`  

    - **Execution Phase:**  
    `num1` --> `10` as `val1` was 10  
    `num2` --> `5` as `val2` was 5
    `total` --> 15 (calculation)
    
        then total returns to "**Global Execution Context**"  
        `result` <-- `15`

        > ⚠️ **Most Important Note:** The New Executional Context automatically get deletes after it done it's job/process.

        ###

5. **Line Number 8: let result2 = addNum(10, 2);**  
-- Again line number 8 variable `result2` execute a function.  
-- Create new Execution Context  
-- New Variable Env and Execution Thread
    - Memory Phase
    - Execution Phase
        - `num1` <-- `10`  
        - `num2` <-- `2`
        - `total` returns to Global Execution Context `result2` <-- `15`

    - Delete New Execution Context.
###

# Call Stack and LIFO (Last in fast out)
