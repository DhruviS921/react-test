const storage = {
  getTheme: () => {
    return localStorage.getItem('theme');
  },
  setTheme: (theme: string) => {
    localStorage.setItem('theme', theme);
  },
};

export default storage;
