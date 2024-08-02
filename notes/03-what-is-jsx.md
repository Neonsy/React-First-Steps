# What is JSX?

JSX is a special syntax called `JavaScript Extension`, that allows to combine HTML with JavaScript.

For example, we can create a variable and then use it in the HTML.
The only requirement is that the variable is wrapped in curly braces.

It's important to note that it's not just variables, but any valid JavaScript expression.

## Rules

Whenever you return JSX, you must return a single element.

A common thing to do is to return a div as the root element and then have other elements nested inside of it.

>[!IMPORTANT]
> You can also return fragments, which are a way to return multiple elements at once.
>
> You can do that by using the `<></>` syntax. Explicitly you could also do it by using the `React.Fragment` component.