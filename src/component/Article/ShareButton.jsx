import { AiOutlineShareAlt } from "react-icons/ai";
function ShareButton() {
  return (
    <button className="bg-gray-100 rounded-full py-1 px-4 flex mx-4 text-sm items-center">
      <AiOutlineShareAlt/>
      <p className="ml-1">Share</p>
    </button>
  )
}

export default ShareButton
