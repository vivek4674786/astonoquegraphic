export type TGlobal = {
  header: THeader,
  logo: TLogo,
}

export type TNavBar = {
  label: string,
  path: string,
  name: string,
  orderNumber: number,
  isActive: boolean,
}

export type TLogo = {
  url: string,
  alt: string,
}

export type THeader = {
  nameOfTheSite: string,
  logoImage: string,
  navBar: TNavBar[],
}

export type THeroSlide = {
  title: string,
  bgColor: string,
  description: string,
  image: TLogo,
}
