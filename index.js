// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

//answer
function renderList(array, elementId, errorElementId = null){
  const list = document.getElementById(elementId);
  const errorDiv = errorElementId ? document.getElementById(errorElementId) : null
  list.innerHTML = "";
  if(errorDiv) errorDiv.innerHTML = "";

  array.forEach((item) => {
    try{
      if(!item.name){
        throw new Error(`Object with id ${item.id} is missing "name" property`);
      }
      console.log(item.name);
      const li = document.createElement("li");
      li.textContent = item.name;
      list.appendChild(li);
    } catch (err) {
      console.error(err.message);
      if (errorDiv) {
        const p = document.createElement("p");
        p.classList.add("error-message");
        p.textContent = err.message;
        errorDiv.appendChild(p);
      }
    }
  });
}

//exercise 1
renderList(users, "names-list");

//exercise 2
const youngCharacters = users.filter((u) => u.age < 40);
renderList(youngCharacters, "young-characters-list");

//exercise 3
renderList(users, "function-list");

//exercise 4
function filterAge(array, threshold){
  return array.filter((u) => u.age < threshold);
}
const under50 = filterAge(users, 50);
renderList(under50, "age-filter-list");

//exercise 5
renderList(users, "error-handling-list", "error-messages");

//exercise 6
const brokenUsers = [
  { id: 1, age: 23},
  { id: 2, name: "Ryan Mark"},
  { id: 3}
]
renderList(brokenUsers, "broken-array-list", "broken-array-errors") 