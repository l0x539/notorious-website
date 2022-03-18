# Notorious Pirates website

This is the official website for Notorious Pirates NFTs game.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Technologies used

* [https://reactjs.org/](ReactJS).
* [https://nextjs.org/](NextJS).

## Site Design

We use Figma design to build and update the website:

* [https://www.figma.com/file/FMx29zUxHbEPzJYtzynhQB/Notorious-Pirates](Figma Design).

## Files Structure

* The files structure for the project:

    .
    ├── components
    │   ├── atoms               # Holds atom components (ex: button, text, input, divider, banner, badge ...etc)
    │   ├── layout              # This the pages layout for different layout (ex: public page, loggedin ...etc)
    │   ├── molecules           # Holds a group of atom components to be used in a frame (ex: Card, Carousel, Banner ...etc)
    │   ├── organisms           # Holds a group of molecules components to be used in pages and templates (ex: Header, Footer, MainNews ...etc)
    │   └── templates           # Holds the molecules to be used in a page but without a populated layout (ex: MainPage, Article Page)
    ├── pages                   # All the website pages (this a special next js folder), check [NextJS pages](https://nextjs.org/docs/basic-features/pages)
    │   ├── ...                 # This a file for a page route, holds a template and should be wrapped in the according layout.
    │   └── api                 # Unit tests
    ├── public                   # Test files (alternatively `spec` or `tests`)
    └── ...

## Note

Please note that only the developers that have access to this repository are allowed to have access to the code and codebase.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
