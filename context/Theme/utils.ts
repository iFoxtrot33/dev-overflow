export const handleThemeChange = (
  mode: string,
  setMode: (mode: string) => void
) => {
  if (mode === "dark") {
    setMode("light");
    document.documentElement.classList.add("light");
  } else {
    setMode("dark");
    document.documentElement.classList.add("dark");
  }
};
