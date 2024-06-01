import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, HomeLayout, Landing, Error, Newsletter, Cocktail, SinglePageError } from './pages'
import { loader as landingLoader } from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SinglePageError />
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />
      },
      {
        path: 'newsletter',
        element: <Newsletter />
      },
      {
        path: 'about',
        element: <About />
      }

    ]
  }

])

function App() {

  class Animal {
    constructor(name, weight) {
      this.name = name;
      this.weight = weight;
    }
    eat() {
      return `${this.name} is eating`;
    }
    sound() {
      return `${this.name} is says`;
    }
  }
  class Cat extends Animal {
    constructor(name, weight) {
      super(name, weight);
    }
    sound() {
      return `${super.sound()} Meow!`;
    }
  }
  let felix = new Cat("felix", 5)
  console.log(felix.sound())

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
