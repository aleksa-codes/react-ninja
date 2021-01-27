import { useState } from 'react';

const Home = () => {
  //   let name = 'Mario';
  //   const [name, setName] = useState('Mario');
  //   const [age, setAge] = useState(25);

  //   const handleClick = () => {
  //     setName('Luigi');
  //     setAge(31);
  //   };
  //   const handleClickAgain = (name, e) => {
  //     console.log('hello ' + name, e.target);
  //   };

  const [blogs, setBlogs] = useState([
    {
      title: 'My girst post',
      body: 'Lorem ipsum afjasnfas...',
      author: 'Mario',
      id: 1
    },
    {
      title: 'My fitnest guide 101',
      body: 'Lorem ipsum jmrtlkhrtklr...',
      author: 'Luigi',
      id: 2
    },
    {
      title: "Hey look at me I'm a blog post",
      body: 'Lorem ipsum gjlweglwej...',
      author: 'Chun-li',
      id: 3
    }
  ]);

  return (
    <div className="home">
      <h2>Homepage</h2>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}

      {/* <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click me</button> */}
      {/* <button
        onClick={(e) => {
          handleClickAgain('Mario', e);
        }}
      >
        Click me again
      </button> */}
    </div>
  );
};

export default Home;
