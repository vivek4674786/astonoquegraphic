
const Logo = () => {
  const websiteTitle = "Astonoquegraphic";
  let logo = "https://img.freepik.com/premium-vector/test-icon-vector-design-templates_1172029-3113.jpg?w=900";

  return(
    <div className="flex items-center">
      {logo && <img className="w-20 h-20" src={logo} alt="logo" />}
      <div>
        <h2 className="text-4xl font-bold">{websiteTitle}</h2>
      </div>
    </div>
  )
}

export default Logo;
