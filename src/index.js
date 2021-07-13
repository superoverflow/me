import theme from "@theme-ui/preset-swiss";

const myTheme = {
  ...theme,
  links: {
    nav: {
      fontWeight: "bold",
      color: "inherit",
      textDecoration: "none",
    },
  },
  badges: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
      p: 1
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  styles: {
    ...theme.styles,
    hr: {
      border: 1,
      borderBottom: '1px solid',
      borderColor: 'gray',
    },
  },
};

export default myTheme;
