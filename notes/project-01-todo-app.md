# My Journey Building a React 18 Todo App

## Step 1: Input Field and Submit Button

I started by creating an input field and a submit button.  
I quickly realized that I needed to handle events properly since React takes over the input field, which means it doesn’t work out of the box like regular HTML.

## Step 2: Prevent Default Submit Behavior

Next, I focused on preventing the default submit behavior of the form.  
I added the todo string to an array by combining the previous values with the new one using the spread operator.

## Step 3: Render the Todo List

Then, I created a `TodoItem` component to render each todo.  
I mapped over the todo list and made sure to provide a unique key for each item to help React keep track of changes.

## Step 4: Adding a Header and Styling

After that, I added a header to my app and started styling it.  
I learned about CSS modules and how to style the `App` class, which helped me scope my CSS and avoid style conflicts.

## Step 5: Separating Components

As I continued, I decided to separate the components further due to dependencies between the form and the list.  
This made my code cleaner and easier to manage.

## Step 6: Styling the Form

I then focused on styling the form to enhance its visual appeal and improve the overall user experience.

## Step 7: Styling the Todo List Component and Items

Next, I styled the todo list component and each individual todo item.  
I wanted to ensure that the list was visually appealing and easy to read.

## Step 8: Adding and Styling a Remove Button

I added a remove button for each todo item and styled it to make it clear and accessible.  
This way, users could easily remove items from the list when they needed to.

## Step 9: Adding Remove Functionality

I implemented the functionality to actually remove items from the list when the remove button was clicked.  
It felt great to see it all come together!

## Step 10: Marking Items as Completed

I added a feature that allowed users to mark items as completed by clicking on the span.  
I made sure the span was centered, so users needed to click right in the middle of the visual item to mark it as completed.

## Step 11: Adding a Footer

To wrap things up, I added a footer to display the number of completed and total todos.  
I also included buttons to remove completed todos or clear all todos from the list.

## Step 12: Fixing HTML and Using Public Directory

Finally, I tidied up the HTML structure and utilized the public directory for assets like the favicon.  
This ensured my app looked polished and professional in the end!
