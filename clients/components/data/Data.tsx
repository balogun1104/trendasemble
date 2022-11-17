



const Data = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}

export default Data