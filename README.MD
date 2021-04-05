## Movie crafting weekend project

Pull movies and show it in a nice layout.

### How to run

`yarn install`

`cd ios && pod install`

`npm run start`

`npm run ios`

### Possible Improvements

- Write detox tests
- Write snapshot tests
- Use Fastimage to cache the images
- Implement cache to not request the movies all the time
- More screens ? (Movie detail)

### What did i learned

- Mobx now requires `makeObservable(this);`
- `Pressable` style can get `pressed` as a prop but typings are a tough one to crack.
- Mocking fetch is cool
- In order to use ts in jest of course you need to use `ts-jest` (insert facepalm meme)
- Since react native's uses "density independent pixel", we need to normalize the font sizes  
