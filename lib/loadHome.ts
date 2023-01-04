interface Data {
  message: string;
  content: {
    about: { title: string; content: string[] };
    experience: { title: string; content: string[] };
    technologies: { title: string };
  };
}

export const loadHome = async () => {
  const res = await fetch("http:localhost:3000/api/home");
  const data: Data = await res.json();

  return data;
};
