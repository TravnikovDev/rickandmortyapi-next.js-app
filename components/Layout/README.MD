# Layout Component

The `Layout` component provides a consistent structure for the application's pages. It serves as a wrapper for page content and ensures a consistent look and feel across the app.

## Props

- `title`: (Optional) A string representing the title of the current page. If not provided, the default title is "Rick and Morty App".
- `children`: The content to be displayed within the layout.

## Usage

Import the `Layout` component and wrap the desired content in it. You can optionally provide a `title` prop to set the page's title.

Example:

```jsx
import Layout from "path/to/Layout";

const HomePage = () => {
  return (
    <Layout title="Home">
      <div>Your content goes here</div>
    </Layout>
  );
};

export default HomePage;
```

## Structure

The Layout component consists of:

A `<Head>` component that sets the page title using the title prop.
A `<Box>` component that serves as a background container and sets the background image, position, color, and size.
A `<Container>` component that provides a responsive container for the content, including padding and maximum width settings.
A `<Heading>` component that displays the page title centered at the top of the page.
The children prop, which is used to render the content wrapped by the Layout component.
