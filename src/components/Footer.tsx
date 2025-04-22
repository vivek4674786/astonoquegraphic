import ImageIcon from "../assets/Icons/ImageIcon";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="mb-4">
              We are a team of designers who are passionate about creating beautiful and functional designs.
            </p>
          </div>
        </div>
        <div className=" py-5 flex gap-5 justify-center items-center">
          <div className="flex flex-col items-center">
          <ImageIcon />
          Instagram 
          </div>
          <div className="flex flex-col items-center">
          <ImageIcon />
          Facebook
          </div>
          <div className="flex flex-col items-center">
          <ImageIcon />
          X
          </div>
          <div className="flex flex-col items-center">
          <ImageIcon />
          LinkedIn
          </div>

        </div>
      </div>
    </div>
  )
}
