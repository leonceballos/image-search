This is a [`ReacJS`](https://reactjs.org/) project bootstrapped with [`vite`](https://vitejs.dev/)

## Description

The project basically has two main components, a SearchInput to wire keywords and a ImagesResult that list the response of [`pixabay API`](https://pixabay.com/api/docs/)

- The searchBar is inside and tiny form that triggers submit when the user press ENTER
- The ImageResults waits for API response and shows first 30 items, after that it continues adding next page of 30 results when the user goes to the final item by scrolling

## How to run

first, you need to change the enviroment variable in .env file: `VITE_API_KEY=EXAMPLE_SECRET_KEY` to a real API KEY

then, in the root folder run the commands:

```bash
npm install && npm run dev
```

Open [http:http://127.0.0.1:5174/](http://127.0.0.1:5174/) or the full url you will see in the terminal with your browser to see the result

## Decistions/tradeoffs

- I used [`TailwindCSS`](https://tailwindcss.com/) for styling because even being highly opinionated, the utility first principle makes able to style faster and have really nice layout in no time, besides I really like the tooling in the ID and the small css file size when it compiles to production.
- For this small layout it had been better to make a simple scss and css modules approach, and I noticed that with tailwind there is a kind of issue or missing configuration in order to work properly when testing his utility classes with jest.
- I used [`axios`](https://axios-http.com/docs/intro) over basic fetch because I believe it is easier to read and has nice features for configuring default services methods.
- Before using [`ReactQuery`](https://tanstack.com/query/v4/docs/adapters/react-query) I was going for an use reducer approuch to handle the data, error, and loading state, but I really liked the small config and simplicity of the useQuery hook.

## What I will improve with more time

- Find a way to mock reactQuery hooks in orther to add tests for the API Calls
- Think of the posibility of add integrations test of e2e testing.
- Add selectable filters to make more advance search, like category of types
- Show more infomation in a modal when click the image before going to the source page.

## What additional features/achitecture before production

- Use [`husky`](https://typicode.github.io/husky/) precommit hooks to run test, tsc or lint before adding a new commit.
- Add a pullRequest template and rules to block push to main branch and implement Code review practice
- Add a deploy process depending of the provider, could be a docker file to configure a pipeline with github actions
