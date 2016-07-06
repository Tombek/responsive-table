# Responsive table

Lightweight and dependencie free responsive tables library

## Installation

You just have to import `responsive-table.min.js` and `responsive-table.min.css` and load it using `responsiveTable.init()`

Use class `.rt` on tables you want to be responsive and class `.rt-mobile-hide` on `th` you want to hide on mobile.

Default breakpoint for mobile version is at 640px but you can generate a custom build to modify it.

You can also modify the name of the class apply to `th` in you HTML or separators between fake mobile `th` and cells value, passing an object to the `init` function, like so :

```
responsiveTable.init({
  hideClass: 'rt-mobile-hide',
  separator: ' :'
});
```

## Custom build

If you want to modify default breakpoint of this product, clone this project, run `npm install` and modify `/src/responsive-table.css`

__Don't forget to run the `gulp` task in order to regenerate the library.__
