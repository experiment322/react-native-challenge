# The challenge

Implement a React Native application for a cuisine navigation app.

## Screens

| Screen             | Description            |
| ------------------ | ---------------------- |
| Root Level         | https://zpl.io/Gn7x1z9 |
| Intermediate Level | https://zpl.io/1MyMzgw |
| Last Level         | https://zpl.io/QM0MKzn |

## The interface

The user interface needs to be implemented pixel perfect as presented in the design.
All the image assets can be found in this repo under `assets/app-assets`. Colors and measurements can be found in Zeplin.

You were invited to the Zeplin project or credentials were provided to you. In case you can’t find the invitation in your inbox or spam please let us know.

## State management

You are free to use any state management library you want, but you must use a library and not the internal state or async storage.
Some examples you can use:

- Redux;
- Jotai;
- Zustand;
- XState;

## API

An API was provided with the categories to display on the screen.
Start the API from this Repository by using the command `npm run start:server`

You can hit server at the following url:

```bash
GET http://localhost:3000
```

## The workflow

### 1. Root level

Using the API, fetch the categories provided and display only the ones that should be on the root level.
They should be placed inside a Horizontal Scroll container.

The order of items from the list should be like this:

```
1  3  5
2  4  6
```

![step-one](/assets/examples/step-one.png)

The buttons should not do anything if tapped, but should provide feedback. The button's content is variable so make sure that users can reach all of them.

### 2. Intermediate and last level

Tapping on any category should replace the existing data in the categories list with the direct children of the tapped item.

We can navigate back one level by tapping on the navigation bar.

We can return to the root level by tapping on the X button inside the navigation bar.

### Examples:

1. Tapping on Europe should take you to see the following:

![example-one-step-two](/assets/examples/example-one-step-two.png)

2. Tapping on British should not show any items in the list.

![example-one-step-three](/assets/examples/example-one-step-three.png)

3. Tapping on Fusion should not show any items in the list.

![example-two-step-twp](/assets/examples/example-two-step-two.png)

4. Tapping on African should take you to see the following:

![example-three-step-two](/assets/examples/example-three-step-two.png)

If there are only 2 items in the result set. Display them horizontally like this:

```
1  2
```

### Constraints

1. <u>The container should resize itself based on the number of items displayed:</u>

   a. If we have 2 items the container should resize to only show the those 2, without white space at the bottom.

   b. If we don't have any item to display the container should collapse to only show the navigation bar and the buttons from the design.

2. Be careful with performance. In the real world there could be hundreds or thousands of cuisines so make sure to handle the different states that the user might be in.
3. <u>There is no limit on the depth of the cuisines</u>.

## Delivering the code

Your code must be <u>modular</u>, <u>clean</u> and <u>easy to understand</u>. Make sure to properly <u>separate concerns</u>, <u>use suggestive names</u>, etc. We are particularly interested in all these aspects.

Please share your code within a public Github repository. You can create your own repository or can fork this one.

Create a screen recording session to demonstrate how the app works. All implemented features (navigation, collapsing, ) should be part of the demo.

Explain in a Readme file how to run your code.

## Timeline

The challenge should take around 4-5h, but you are welcome to spend more time on it if you want to perfect your solution. The challenge must be submitted within 24h after receiving it.

If you have ideas of how to improve your solution further, please share them in the Readme file of your repository.

## Notes

For details that the document does not specify, just use your own judgment and decide based on what you think makes the most sense. We are interested to see how you think.

When doing technical challenges, everyone gets a bit nervous. There is no reason to. We want you to enjoy building this algo. Have fun coding!
