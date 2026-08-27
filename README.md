Create and push a new branch using **git checkout -b kata-javascript-name** and **git push -u origin kata-javascript-name**

# **Client management with react and hooks**

Our company has created a React app to manage our customers.

Use correct node version: **nvm use**

Install dependencies: **npm install**

Run app: **npm run dev**

**Info:** it's not a problem that customers are lost when website is reloaded because in a future an API will be used to get them.

**Exercise 1.**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

In the last push, the imports/exports were broken. If possible, could you fix them by modifying only the imports? Please, modify the exports only if it's not possible to fix the issue through the imports.

**Exercise 1.1**
Could you use export default for all React components?

**Exercise 2**
CustomerForm.jsx is not working correctly. 
When we add a customer the list of customers is not shown. 
For the purpose of this exercise, all you need to know is that the problem is because the method updateCustomerList is modifying the existing array instead of creating a new one.

Using array methods forEach and push, modify updateCustomerList to create a new array which contains the elements from originalCustomerList (the array that's passed into it) and add the new customer to the array and return the new array.

Note: The reason why this behavior is needed will be explained in the future React session, where we will learn how React hooks work.

**Exercise 2.1**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring#syntax

Use array destructoring and implicit return to return the new array with the last customer added. No array method is allowed in this exercise.

**Exercise 3**
In CustomerForm.jsx create a new button called "Clear" under "Add customer" button. This button should clear all inputs when is clicked.

**Exercise 3.1**
Reuse the functionality used on "Clear" button to clear the inputs when a new customer is submitted.

**Exercise 4**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body

Refactor CustomerList.jsx using an implicit return for function CustomerList and using array method called map on customers variable.

![Demo](https://github.com/ReactMrk/lifecycle-kata/blob/main/src/assets/hooks-kata-solution-kata.gif?raw=true)
