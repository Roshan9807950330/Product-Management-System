import { Link } from "react-router-dom"

const Card = () => {
  return (
    <>
     <Link to="/product">
     <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="img/card-top.jpg" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae, quod sapiente, ut facere debitis consectetur cupiditate optio natus enim ex laboriosam ipsam et molestias modi voluptatibus voluptatum deleniti. Dicta quam dolorem doloribus tempora!
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photograph</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>

        </div>
      </div> 
     </Link>
    </>
  )
}

export default Card
