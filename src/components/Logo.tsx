const Logo = (logoData: { logoName: string, logoImage: string }) => {
  console.log("insideLogo : ",logoData);
  const websiteTitle = logoData?.logoName || "Astonoquegraphic";
  let logo = logoData?.logoImage?.url || "https://img.freepik.com/premium-vector/test-icon-vector-design-templates_1172029-3113.jpg?w=900";

  return(
    <div className="flex gap-5 items-center">
      {logo && <img className="p-3 w-20 h-20 object-contain" src={logo} alt="logo" />}
      <div>
        <h2 className="text-4xl font-bold">{websiteTitle}</h2>
      </div>
    </div>
  )
}

export default Logo;
