# The solution (and how to run it)

<https://github.com/experiment322/react-native-challenge/assets/26217940/8c36eba5-f700-4c1c-a519-cec7df58e7df>

Some versions:

- nvm: 0.39.5
- node: 20.12.0
- npm: 10.8.1
- yarn: 1.22.22
- rbenv: 1.2.0
- ruby: 3.2.2
- bundle: 2.5.10
- ios-deploy: 1.12.2
- OpenJDK: 17.0.11
- Xcode: 15.3
- Android Studio: 2024.1.1

```sh
npm install
npm run start:server
cd CuisineNavigation
yarn
bundle install
cd ios
bundle exec pod install
cd ..
yarn start --reset-cache
# after the dev server started, you can press "i" or "a"
# to build and run the app for either ios or android

# run this for android (with emulator booted/device connected)
# to be able to hit the api server
adb reverse tcp:3000 tcp:3000
```

I used jotai for state management, reanimated and gesture-handler for animations.

I would've also used expo-image for image preloading/in-memory caching, but in the end I thought it was too much.

I've handled as much error states as I could think of for the data and also handled a lot of layout states
for the animation to be smooth and foolproof as much as possible:

- animated content size changes which also work if they happen during dragging
- interrupting and correctly resuming the drag while not finished
- made collapsing/expanding speed decay based on the velocity of the finger when released then calculated the closest snap point and snapped to it with a constant speed
- prevent dragging when content height is 0
- scrolled the list of categories to the beginning when navigating to another parent category
- also made the collapsible content expand if it was collapsed but the user navigated to another category

# The challenge

Implement a React Native application for a cuisine navigation app.

## Screens

| Screen             | Description              |
| ------------------ | ------------------------ |
| Root Level         | <https://zpl.io/Gn7x1z9> |
| Intermediate Level | <https://zpl.io/1MyMzgw> |
| Last Level         | <https://zpl.io/QM0MKzn> |

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

The filter buttons (distance, time, and price) should not trigger any actions when tapped, but they should provide visual feedback to indicate they have been pressed. <u>The button's content is variable so make sure that users can reach all of them</u>.

### 2. Intermediate and last level

Tapping on any category should replace the existing data in the categories list with the direct children of the tapped item.

We can navigate back one level by tapping on the navigation bar.

We can return to the root level by tapping on the X button inside the navigation bar.

### Examples

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
