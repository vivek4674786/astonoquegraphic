import AdvertiseIcon from "../assets/Icons/AdvertiseIcon";
import CardIcon from "../assets/Icons/CardIcon";
import ImageIcon from "../assets/Icons/ImageIcon";
import SecurityIcon from "../assets/Icons/SecurityIcon";
import Card from "../components/Card";
import { ReactNode } from "react";

function WorkScopeCard({ title, description, children, color }: { title: string, description: string, children: ReactNode, color: string }) {
  return (
    <Card>
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color}`}>
        {children}
      </div>
      <h4 className="text-xl font-semibold mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}

export default function WorkScope() {
  const WorkScopeCardsData = [
    {
      title: "Logo Design",
      color: "bg-blue-100",
      description: "Create unique and memorable brand identities that capture your company's essence and values.",
      icon: <SecurityIcon />
    },
    {
      title: "Posters",
      color: "bg-purple-100",
      description: "Design eye-catching posters that effectively communicate your message and attract attention.",
      icon: <ImageIcon />
    },
    {
      title: "Visiting Cards",
      color: "bg-green-100",
      description: "Create professional and elegant business cards that leave a lasting impression on your clients.",
      icon: <CardIcon />
    },
    {
      title: "Advertisement",
      color: "bg-red-100",
      description: "Design compelling advertisements that effectively promote your products and services to your target audience.",
      icon: <AdvertiseIcon />
    }
  ]
  
  return (
    <div id="what-we-do" className="work-scope px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-4xl font-bold mb-4 text-gray-800">Our Work Scope</h3>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We specialize in creating stunning visual designs that help businesses stand out and make a lasting impression.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Design Card */}
          {WorkScopeCardsData.map((card) => (
            <WorkScopeCard key={card.title} title={card.title} description={card.description} color={card.color}>
              {card.icon}
            </WorkScopeCard>
          ))}
        </div>

      </div>
    </div>
  )
}