import { useState } from "react"
import Categories from "./components/Categories"

function App() {
  const [categories, setCategories] = useState(["Jose", "Maria"])

  return (
    <div className="m-5">
      <h3>Gif Demo App</h3>
      <hr />
      <Categories
        categories={categories}
        setCategories={setCategories}
      />
      <hr />
    </div>
  )
}

export default App