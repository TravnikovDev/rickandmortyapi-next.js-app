# Pagination Component

This component provides a simple and accessible pagination navigation for your application.

## Usage

```tsx
import { Pagination } from "./components/Pagination/Pagination";

function ExampleComponent() {
  const currentPage = 1;
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    // Handle page change logic here.
  };

  return <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />;
}
```

## Props

| Prop       | Type              | Description                                              |
| ---------- | ----------------- | -------------------------------------------------------- |
| currentPage | number | The current active page in the pagination. |
| totalPages | number | The total number of pages available. |
| onPageChange | (page: number) => void | A callback function that will be called when the user clicks on a page button. |

## Accessibility

This component is designed to be accessible, with ARIA attributes and keyboard navigation support. The current active page is indicated using the aria-current attribute, and the "Previous" and "Next" buttons have aria-label attributes describing their purpose.